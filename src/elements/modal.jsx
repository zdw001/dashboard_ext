import React, { useRef } from "react";

const Modal = ({hideModal, children, userData, setUserData}) => {
    const background = useRef();
    const modal = useRef();

    const handleHideModal = () => {
        modal.current.style.opacity = 0;
        modal.current.style.webkitTransform = "translateY(5%)";

        background.current.style.opacity = 0;

        setTimeout(function() {
            hideModal()
        }, 400);
    };

    const renderChildren = () => {
        return React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            handleHideModal: handleHideModal,
            userData: userData,
            setUserData: setUserData
          });
        });
      };
    

    return (
        <div ref={background} className="modal-background" onClick={handleHideModal}>
            <div ref={modal} className="modal" onClick={e => e.stopPropagation()}>
                { renderChildren() }
            </div>
        </div>
    );
}

export default Modal;