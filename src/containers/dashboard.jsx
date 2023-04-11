import { useEffect, useState } from 'react';
import TopNav from '../components/topNav';
import AddWebsiteModal from '../components/addWebsiteModal';
import Modal from '../components/modal';


const Dashboard = ({ navigate, userData, setUserData }) => {
    const [showAddWebiste, setShowAddWebsite] = useState(false);

    useEffect(() => {
    }, []);

    // const handleUpdateData = async () => {
    //     let encryptedUserData = await sea.encrypt(data, user._.sea);

    //     await user.get('user').put(encryptedUserData);
    // };

    return (
        <div className="dashboard">
            <TopNav setShowAddWebsite={setShowAddWebsite} navigate={navigate} />
            {
                userData === null ? (
                    <div className="loading">
                        loading
                    </div>
                ) : (
                    <div>
                        { showAddWebiste && 
                            <Modal hideModal={() => setShowAddWebsite(false)}>
                                <AddWebsiteModal />
                            </Modal>
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Dashboard;