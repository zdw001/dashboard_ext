import { useState } from "react";
import {
    generateUuid, simpleEncrypt, generateRandomLogo
} from '../utils/general';

const AddWebsiteModal = ({handleHideModal, userData, setUserData}) => {
    const [websiteName, setWebsiteName] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [websiteNotes, setWebsiteNotes] = useState("");

    const handleSaveWebsite = async () => {
        console.log('simple:')
        console.log(simpleEncrypt('test123'))
        let new_website = {
            id: generateUuid(),
            name: websiteName,
            link: websiteLink,
            username: username,
            password: simpleEncrypt(password),
            notes: websiteNotes,
            img: "",
        };

        console.log('new_website')
        console.log(new_website)

        let updatedUserData = userData;

        updatedUserData.websites.push(new_website)
        setUserData(updatedUserData);

        console.log('ADD WEBSITE')
        console.log({
            website: new_website
        })

        // Save to DB
        fetch('http://localhost:8080/add-website', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                website: new_website
            })
        }).then(function(response) {
            return response.json();
        }).then(data => {
            // SUCCESS
            setUserData(data.user);

            handleHideModal();
        }).catch(err => {
            console.log('ERROR')
            console.log(err)

            // TODO: REVERT DATA
        });
    };

    return (
        <div className='add-website-modal'>
            <div className='row'>
                <div className='website-logo-wrapper'
                    style={{backgroundColor: generateRandomLogo(websiteName)}} 
                >
                    <span>{websiteName.charAt(0).toUpperCase()}</span>
                </div>
                <input className="text-large font-bold" 
                    placeholder="Website Name"
                    value={websiteName} 
                    onChange={e => setWebsiteName(e.target.value)}
                />
            </div>
            <div className='input-wrapper'>
                <input value={websiteLink} onChange={e => setWebsiteLink(e.target.value)}/>
                <label>Website Link</label>
            </div>
            <div className="input-row">
                <div className='input-wrapper'>
                    <input value={username} onChange={e => setUsername(e.target.value)}/>
                    <label>Username</label>
                </div>
                <div className='input-wrapper'>
                    <input value={password} onChange={e => setPassword(e.target.value)}/>
                    <label>Password</label>
                </div>
            </div>
            <div className='input-wrapper'>
                <textarea value={websiteNotes} onChange={e => setWebsiteNotes(e.target.value)}/>
                <label>Notes</label>
            </div>
            <div className="buttons">
                <div className="btn" onClick={handleHideModal}>Cancel</div>
                <div className="btn" onClick={handleSaveWebsite}>Save</div>
            </div>
        </div>
    );
}

export default AddWebsiteModal;