import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {
    generateUuid, simpleEncrypt, generateRandomLogo
} from '../utils/general';
import { setUserData, addWebsite, editWebsite } from "../slices/userDataSlice";
import { simpleDecrypt } from "../utils/general";

const WebsiteModal = ({handleHideModal, website}) => {
    const [website_id] = useState(website ? website.website_id : generateUuid())
    const [websiteName, setWebsiteName] = useState(website ? website.name : "");
    const [websiteLink, setWebsiteLink] = useState(website ? website.link : "");
    const [username, setUsername] = useState(website ? website.username : "");
    const [password, setPassword] = useState(website ? simpleDecrypt(website.password) : "");
    const [websiteNotes, setWebsiteNotes] = useState(website ? website.notes : "");

    const dispatch = useDispatch();

    const userData = useSelector(state => state.userData);


    const handleSaveWebsite = async () => {
        console.log(userData.websites.find(x => x.website_id === website_id))
        let new_website = {
            _id: userData.websites.find(x => x.website_id === website_id) ? userData.websites.find(x => x.website_id === website_id)._id : null,
            website_id: website_id,
            name: websiteName,
            link: websiteLink,
            username: username,
            password: simpleEncrypt(password),
            notes: websiteNotes,
            img: "",
        };

        if (website) {
            dispatch(editWebsite(new_website));

             // Save to DB
             fetch('http://localhost:8085/edit-website', {
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
                dispatch(setUserData(data.user));

                handleHideModal();
            }).catch(err => {
                console.log('ERROR')
                console.log(err)

                // TODO: REVERT DATA
            });
        } else {
            dispatch(addWebsite(new_website));

            // Save to DB
            fetch('http://localhost:8085/add-website', {
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
                dispatch(setUserData(data.user));

                handleHideModal();
            }).catch(err => {
                console.log('ERROR')
                console.log(err)

                // TODO: REVERT DATA
            });
        }
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

export default WebsiteModal;