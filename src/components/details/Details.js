import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { FaTimesCircle } from 'react-icons/fa';

const Details = (props) => {
    const handleClose = () => props.setShow(false);
    console.log(props.color);
    
    return (
        <Modal show={props.show} onHide={handleClose} className="modal">
            <div className='deatails'>
                <div className='deatailsImg'>
                    <img src={props.object.img} />
                </div>
                <div className='deatailsContent'>
                    <div className='deatailsTitle' style={{ color: `var(--${props.color})` }} >{props.object.title}</div>
                    <div className='deatailsText'>
                        {props.object.text}
                        <a href={props.object.link} style={{ color: `var(--${props.color})` }}> בכתבה המצורפת.</a>
                    </div>
                </div>
            </div>
            <div className='escDiv'>
                <FaTimesCircle onClick={handleClose} />
            </div>
        </Modal>
    )
}

export default Details