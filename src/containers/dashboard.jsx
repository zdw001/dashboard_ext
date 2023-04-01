import { useEffect, useState } from 'react';
import TopNav from '../components/topNav';
import { user, sea, gun } from '../utils/gun';
import AddWebsiteModal from '../components/addWebsiteModal';

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
    const [showAddWebiste, setShowAddWebsite] = useState(false);

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleUpdateData = async () => {
        let encryptedUserData = await sea.encrypt(data, user._.sea);

        await user.get('user').put(encryptedUserData);
    };

    const fetchUserData = async () => {
        let keyPair = user._.sea;
        let encryptedUserData = await gun.user(keyPair.pub);
        let userData = await sea.decrypt(encryptedUserData.user, keyPair);

        setData(userData);
    };

    return (
        <div className="dashboard">
            <TopNav setShowAddWebsite={setShowAddWebsite}/>
            {
                data === null ? (
                    <div className="loading">
                        loading
                    </div>
                ) : (
                    <div>
                        { showAddWebiste && <AddWebsiteModal hideModal={() => setShowAddWebsite(false)} />}
                    </div>
                )
            }
        </div>
    );
}

export default Dashboard;