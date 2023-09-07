import { useEffect, useState } from 'react';
import SettingsMenu from '../components/settingsMenu';
import SearchBackground from './searchBackground';
import { FaCog, FaSearch, FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../slices/searchValueSlice';

const TopNav = ({setShowAddWebsite, navigate }) => {
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false);

    const searchValue = useSelector(state => state.searchValue.value);

    const dispatch = useDispatch();

    const handleSearchInput = value => {
        console.log('handleSearchInput')

        dispatch(setSearchValue(value))
    };


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
                        value={searchValue}
                        onChange={e => handleSearchInput(e.target.value)}
                    />
                </div>
            </div>
            <div className="settings">
             <div className="nav-icon-wrapper" onClick={() => setShowSettingsMenu(true)}>
                <div className='label text-small'>Settings</div>
                <FaCog className='nav-icon icon-md' />
            </div>
            {
                showSettingsMenu && <SettingsMenu navigate={navigate} hideMenu={() => setShowSettingsMenu(false)}/>
            }
            </div>
        </div>
    );
}

export default TopNav;