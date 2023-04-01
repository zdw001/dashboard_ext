import { useRef } from "react";
import { user } from '../utils/gun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Modal = (props) => {
    console.log(props)
    console.log(props.children)
    const background = useRef();
    const modal = useRef();

    const handleHideModal = () => {
        modal.current.style.opacity = 0;
        modal.current.style.webkitTransform = "translateY(5%)";

        background.current.style.opacity = 0;

        setTimeout(function() {
            props.hideModal()
        }, 400);
    };

    return (
        <div ref={background} className="modal-background" onClick={handleHideModal}>
            <div ref={modal} className="modal">
                { props.children }
            </div>
        </div>
    );
}

export default Modal;