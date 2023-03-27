import { user } from '../utils/gun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const Modal = ({ navigate }) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-background"></div>
            <div className="modal"></div>
        </div>
    );
}

export default Modal;