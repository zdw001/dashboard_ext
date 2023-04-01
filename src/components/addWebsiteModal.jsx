import { useRef } from "react";
import { user } from '../utils/gun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Modal from './modal';


const AddWebsiteModal = (props) => {
    return (
        <Modal {...props}>
            <h1 className="text-large">Add Website</h1>
        </Modal>
    );
}

export default AddWebsiteModal;