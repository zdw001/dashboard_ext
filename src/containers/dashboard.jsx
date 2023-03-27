import { useEffect, useState } from 'react';
import { user, sea, gun } from '../utils/gun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import SettingsMenu from '../components/settingsMenu';

const Dashboard = ({ navigate }) => {
    // const [txt, setTxt] = useState();

    // useEffect(() => {
    //     gun.get('text').once((node) => { // Retrieve the text value on startup
    //         if (node == undefined) {
    //             gun.get('text').put({ text: "Write the text here" })
    //         } else {
    //             setTxt(node.text)
    //         }
    //     })

    //     gun.get('text').on((node) => { // Is called whenever text is updated
    //         setTxt(node.text)
    //     })
    // }, []);

    // const updateText = (event) => {
    //     gun.get('text').put({ text: event.target.value }) // Edit the value in our db
    //     setTxt(event.target.value)
    // }



    const [data, setData] = useState(null);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleUpdateData = async () => {
        let encryptedUserData = await sea.encrypt(data, user._.sea);

        await user.get('user').put(encryptedUserData);
    };

    const fetchUserData = async () => {
        console.log('fetchUserData')
        let keyPair = user._.sea;

        console.log('keyPair: ')
        console.log(keyPair)

        let encryptedUserData = await gun.user(keyPair.pub);

        console.log("encryptedUserData")
        console.log(encryptedUserData)

        let userData = await sea.decrypt(encryptedUserData.user, keyPair);

        console.log('setting data!')
        console.log(userData)

        setData(userData);
    };

    return (
        <div className="dashboard">
            {
                data === null ? (
                    <div className="loading">
                        loading
                    </div>
                ) : (
                    <div>
                        <div className="top-nav">
                            <div className="add-website">
                                <div className="btn text-small">Add Website</div>
                            </div>
                            <div className="search">
                                <div className="search-wrapper">
                                    <FontAwesomeIcon className='search-icon icon-sm' icon={icon({ name: 'search' })} />
                                    <input type="text" placeholder="Search command center" />
                                </div>
                            </div>
                            <div className="settings">
                                <FontAwesomeIcon
                                    className='settings-icon icon-md'
                                    icon={icon({ name: 'cog' })}
                                    onClick={() => setShowSettingsMenu(prev => !prev)}
                                />
                                {
                                    showSettingsMenu && <SettingsMenu />
                                }
                            </div>
                        </div>
                        {/* <h1>{data.username}'s Command Center</h1> */}
                    </div>
                )
            }
        </div>
    );
}

export default Dashboard;