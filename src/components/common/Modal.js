import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import '../css/Modal.css';


const Modal = ({closeModal, children}) => {

    return (
        <div className={"modal_container"}>
            <div className={"modal_body"}>
                <IoCloseCircleOutline onClick={closeModal} className={"modal_close_icon"}/>
                {children}
            </div>
        </div>
    )
}

export default Modal;
