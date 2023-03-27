import { user } from '../utils/gun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const SettingsMenu = ({ navigate }) => {

    const handleSignOut = () => {
        sessionStorage.clear();
        localStorage.clear();

        user.leave();

        navigate("sign-in");
    };

    return (
        <div className="settings-menu">
            <div className="settings-option" onClick={handleSignOut}>
                {/* <FontAwesomeIcon className='icon-md' icon={icon({ name: "logout" })} /> */}
                <span>Sign Out</span>
            </div>
        </div>
    );
}

export default SettingsMenu;