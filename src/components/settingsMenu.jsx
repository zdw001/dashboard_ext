import DropDownList from "../elements/dropDownList";
import { generateRandomLogo } from "../utils/general";

const SettingsMenu = ({ userData, hideMenu }) => {

    const handleSignOut = () => {  
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className="settings-menu">
            <DropDownList hideMenu={hideMenu}>
                <div className="settings-header">
                    <div>
                        <div className='profile-logo-wrapper'
                            style={{backgroundColor: generateRandomLogo(userData.username)}} 
                        >
                            <span>{userData.username.charAt(0).toUpperCase()}</span>
                        </div>
                    </div>
                    <span className="settings-username">{userData.username}</span>
                </div>
                <div className="settings-option" onClick={handleSignOut}>
                    <span>Sign Out</span>
                </div>
            </DropDownList>
        </div>
    );
}

export default SettingsMenu;