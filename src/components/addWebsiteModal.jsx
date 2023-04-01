import { useState } from "react";
import { user } from '../utils/gun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Modal from './modal';


const AddWebsiteModal = (props) => {
    const [websiteName, setWebsiteName] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");


    return (
        <Modal {...props}>
            <div className='add-website-modal'>
                <div className='website-logo-wrapper'>

                </div>
                <input className="text-large font-bold header" 
                    placeholder="Website Name"
                    value={websiteName} 
                    onChange={e => setWebsiteName(e.target.value)}
                />
                <div className='input-wrapper'>
                    <input value={websiteLink} onChange={e => setWebsiteLink(e.target.value)}/>
                    <label>Website Link</label>
                </div>
                <div className='half-width'>
                    <div className='input-wrapper'>
                        <input value={websiteLink} onChange={e => setWebsiteLink(e.target.value)}/>
                        <label>Website Link</label>
                    </div>
                </div>
            </div>
        </Modal>

    );
}

export default AddWebsiteModal;