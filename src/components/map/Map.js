import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import map from '../../assets/images/map.jpg'
import { FaTimesCircle } from 'react-icons/fa';

const Map = (props) => {
    const handleClose = () => props.setShow(false);

    return (
        <Modal show={props.show} onHide={handleClose} className="modal">
            <div className="map">
                <img src={map} />
            </div>
            <div className='escDiv'>
                <FaTimesCircle handleClose={handleClose} />
            </div>
        </Modal>
    )
}

export default Map