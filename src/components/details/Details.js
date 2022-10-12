import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { FaTimesCircle } from 'react-icons/fa';

const Details = (props) => {
    const handleClose = () => props.setShow(false);
    
    return (
        <Modal show={props.show} onHide={handleClose} className="modal">
            {props.object.title}
            <div className='escDiv'>
                <FaTimesCircle onClick={handleClose} />
            </div>
        </Modal>
    )
}

export default Details