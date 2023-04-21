import { useEffect, useState } from 'react';
import TopNav from '../components/topNav';
import AddWebsiteModal from '../components/addWebsiteModal';
import Modal from '../elements/modal';
import Tile from '../components/tile';

const Dashboard = ({ navigate, userData, setUserData }) => {
    const [showAddWebiste, setShowAddWebsite] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <div className="dashboard">
            <TopNav setShowAddWebsite={setShowAddWebsite} navigate={navigate} userData={userData} />
            {
                userData === null ? (
                    <div className="loading">
                        loading
                    </div>
                ) : (
                    <div>
                        { showAddWebiste && 
                            <Modal hideModal={() => setShowAddWebsite(false)} userData={userData} setUserData={setUserData}>
                                <AddWebsiteModal/>
                            </Modal>
                        }
                        <div className="tile-container">
                            <div className="tile-grid">
                            {
                                userData.websites.map(website => {
                                    return (
                                        <Tile key={website.id} website={website} setUserData={setUserData}/>
                                    )
                                })
                            }
                            </div>
                        
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Dashboard;