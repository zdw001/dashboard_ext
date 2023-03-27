import { useState } from 'react';
import { user } from '../utils/gun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import SettingsMenu from '../components/settingsMenu';



const TopNav = () => {
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false)

    return (
        <div className="top-nav">
            <div className="nav-icon-wrapper">
                <FontAwesomeIcon className="nav-icon icon-md" icon={icon({ name: "plus" })} />
                <div className="label">Add Website</div>
            </div>
            <div className="search">
                <div className={showDashboard ? "search-blur show-dashboard" : "search-blur"} onClick={() => setShowDashboard(true)}></div>
                <div className={showDashboard ? 'search-wrapper show-dashboard' : 'search-wrapper'}>
                    <FontAwesomeIcon className='search-icon icon-sm' icon={icon({ name: 'search' })} />
                    <input
                        type="text"
                        placeholder="Search command center"
                        onClick={() => setShowDashboard(true)}
                    />
                </div>
            </div>
            <div className="settings nav-icon-wrapper">
                <div className='label'>Settings</div>
                <FontAwesomeIcon
                    className='nav-icon icon-md'
                    icon={icon({ name: 'cog' })}
                    onClick={() => setShowSettingsMenu(prev => !prev)}
                />
                {
                    showSettingsMenu && <SettingsMenu />
                }
            </div>
        </div>
    );
}

export default TopNav;