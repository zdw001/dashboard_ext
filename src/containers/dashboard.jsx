import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import TopNav from '../components/topNav';
import WebsiteModal from '../components/websiteModal';
import Modal from '../elements/modal';
import Tile from '../components/tile';
import Background from '../elements/background';

const Dashboard = ({ navigate }) => {
    const websites = useSelector(state => state.userData.websites);
    const searchValue = useSelector(state => state.searchValue.value);

    const [showAddWebiste, setShowAddWebsite] = useState(false);

    return (
        <div className="dashboard">
            <TopNav setShowAddWebsite={setShowAddWebsite} navigate={navigate} />
            <div>
                { showAddWebiste && 
                    <Modal hideModal={() => setShowAddWebsite(false)}>
                        <WebsiteModal />
                    </Modal>
                }
                <div className="tile-container">
                    <div className="tile-grid">
                    {
                        websites.map(website => {
                            if (searchValue) {
                                if (
                                    website.name.includes(searchValue) ||
                                    website.link.includes(searchValue) ||
                                    website.username.includes(searchValue) || 
                                    website.notes.includes(searchValue)
                                ) {
                                    return (
                                        <Tile key={website.website_id} website={website} />
                                    ) 
                                }
                            } else {
                                return (
                                    <Tile key={website.website_id} website={website} />
                                )
                            }
                        })
                    }
                    </div>
                
                </div>
            </div>
            <div className="dashboard-background">
                <Background />
            </div>
        </div>
    );
}

export default Dashboard;