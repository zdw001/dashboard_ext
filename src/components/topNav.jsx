import { useState } from 'react';
import SettingsMenu from '../components/settingsMenu';
import SearchBackground from './background';
import { FaCog, FaSearch, FaPlus } from 'react-icons/fa';




const TopNav = ({setShowAddWebsite, navigate, userData}) => {
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false)

    return (
        <div className="top-nav">
            <div>
                <div className="nav-icon-wrapper" onClick={setShowAddWebsite}>
                    <FaPlus className="nav-icon icon-md" />
                    <div className="label text-small">Add Website</div>
                </div>
            </div>
            <div className="search">
                <div className={showDashboard ? "search-blur show-dashboard" : "search-blur"} onClick={() => setShowDashboard(true)}>
                    <SearchBackground />
                </div>
                <div className={showDashboard ? 'search-wrapper show-dashboard' : 'search-wrapper'}>
                    <FaSearch className='search-icon icon-sm' />
                    <input
                        type="text"
                        placeholder="Search command center"
                        onClick={() => setShowDashboard(true)}
                    />
                </div>
            </div>
            <div className="settings">
             <div className="nav-icon-wrapper" onClick={() => setShowSettingsMenu(true)}>
                <div className='label text-small'>Settings</div>
                <FaCog className='nav-icon icon-md' />
            </div>
            {
                showSettingsMenu && <SettingsMenu navigate={navigate} userData={userData} hideMenu={() => setShowSettingsMenu(false)}/>
            }
            </div>
        </div>
    );
}

export default TopNav;