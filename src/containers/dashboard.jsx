import { useEffect, useState } from 'react';
import TopNav from '../components/topNav';
import { user, sea, gun } from '../utils/gun';

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
            <TopNav />
            {
                data === null ? (
                    <div className="loading">
                        loading
                    </div>
                ) : (
                    <div>
                        dashboard
                    </div>
                )
            }
        </div>
    );
}

export default Dashboard;