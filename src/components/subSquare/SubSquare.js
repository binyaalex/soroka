import { useState } from 'react';
import Details from "../details/Details";

const SubSquare = (props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div className="category" onClick={handleShow} >
            <img src={props.el.img} />
            <div className='textDiv'>
                <h2 style={{ color: `var(--${props.color})` }}>{props.el.title}</h2>
            </div>
            <Details show={show} setShow={setShow} object={props.el} />
        </div>
    )

}

export default SubSquare