import { useState } from "react";
import { user } from '../utils/gun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const AddWebsiteModal = (props) => {
    const [websiteName, setWebsiteName] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [websiteNotes, setWebsiteNotes] = useState("");

    const generateRandomLogo = (str) => {
        let hash = 0;
        let color = '#';

        for (let i=0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        for (let i=0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          color += ('00' + value.toString(16)).substr(-2);
        }

        return color;
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
            <div className='input-wrapper'>
                <textarea value={websiteNotes} onChange={e => setWebsiteNotes(e.target.value)}/>
                <label>Notes</label>
            </div>
            <div className="buttons">
                <div className="btn" onClick={props.handleHideModal}>Cancel</div>
                <div className="btn">Save</div>
            </div>
        </div>
    );
}

export default AddWebsiteModal;