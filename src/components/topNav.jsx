import { useState } from 'react';
import { user } from '../utils/gun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import SettingsMenu from '../components/settingsMenu';
import SearchBackground from './background';



const TopNav = ({setShowAddWebsite, navigate}) => {
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false)

    return (
        <div className="top-nav">
            <div>
                <div className="nav-icon-wrapper" onClick={setShowAddWebsite}>
                    <FontAwesomeIcon className="nav-icon icon-md" icon={icon({ name: "plus" })} />
                    <div className="label text-small">Add Website</div>
                </div>
            </div>
            <div className="search">
                <div className={showDashboard ? "search-blur show-dashboard" : "search-blur"} onClick={() => setShowDashboard(true)}>
                    <SearchBackground />
                </div>
                <div className={showDashboard ? 'search-wrapper show-dashboard' : 'search-wrapper'}>
                    <FontAwesomeIcon className='search-icon icon-sm' icon={icon({ name: 'search' })} />
                    <input
                        type="text"
                        placeholder="Search command center"
                        onClick={() => setShowDashboard(true)}
                    />
                </div>
            </div>
            <div className="settings">
             <div className="nav-icon-wrapper">
                <div className='label text-small'>Settings</div>
                <FontAwesomeIcon
                    className='nav-icon icon-md'
                    icon={icon({ name: 'cog' })}
                    onClick={() => setShowSettingsMenu(prev => !prev)}
                />
                {
                    showSettingsMenu && <SettingsMenu navigate={navigate} />
                }
            </div>
            </div>
        </div>
    );
}

export default TopNav;