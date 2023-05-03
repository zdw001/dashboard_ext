import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import TopNav from '../components/topNav';
import WebsiteModal from '../components/websiteModal';
import Modal from '../elements/modal';
import Tile from '../components/tile';
import { simpleDecrypt, simpleEncrypt } from '../utils/general';

const Dashboard = ({ navigate }) => {
    const [showAddWebiste, setShowAddWebsite] = useState(false);
    const userData = useSelector((state) => state.userData);

    useEffect(() => {
        let encrypted = simpleEncrypt('test1345678');

        let decrypted = simpleDecrypt(encrypted);
        console.log('------------')
        console.log('encrypted: ', encrypted)
        console.log('decrypted: ', decrypted)
        console.log('------------')

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
                            <Modal hideModal={() => setShowAddWebsite(false)}>
                                <WebsiteModal />
                            </Modal>
                        }
                        <div className="tile-container">
                            <div className="tile-grid">
                            {
                                userData.websites.map(website => {
                                    return (
                                        <Tile key={website.website_id} website={website} />
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