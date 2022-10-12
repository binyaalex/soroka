import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { FaTimesCircle } from 'react-icons/fa';

const Details = (props) => {
    const handleClose = () => props.setShow(false);
    
    return (
        <Modal show={props.show} onHide={handleClose} className="modal">
            <div className='deatails'>
                <div className='deatailsImg'>
                    <img src={props.object.img} />
                </div>
                <div className='deatailsContent'>
                    <div className='deatailsTitle'>{props.object.title}</div>
                    <div className='deatailsText'>{props.object.text}</div>
                </div>
            </div>
            <div className='escDiv'>
                <FaTimesCircle onClick={handleClose} />
            </div>
        </Modal>
    )
}

export default Details