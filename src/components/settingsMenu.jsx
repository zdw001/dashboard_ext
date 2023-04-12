const SettingsMenu = ({ navigate }) => {

    const handleSignOut = () => {  
        localStorage.clear();
        window.location.reload();
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