import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaTimesCircle } from 'react-icons/fa';

const SubSquare = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="category" onClick={handleShow} >
                <img src={props.el.img} />
                <div className='textDiv'>
                    <h2 style={{ color: `var(--${props.color})` }}>{props.el.title}</h2>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} className="modal">
                <div className='deatails'>
                    <div className='deatailsImg'>
                        <img src={props.el.img} />
                    </div>
                    <div className='deatailsContent'>
                        <div className='deatailsTitle'
                            style={{ color: `var(--${props.color})` }}
                        >
                            {props.el.title}
                        </div>
                        <div className='deatailsText'>
                            {props.el.text}
                            <a
                                href={props.el.link}
                                style={{ color: `var(--${props.color})` }}
                            >
                                קישור
                            </a>.
                        </div>
                    </div>
                </div>
                <div className='escDiv'>
                    <FaTimesCircle onClick={handleClose} color={`var(--${props.color})`} />
                </div>
            </Modal>
        </>
    )

}

export default SubSquare