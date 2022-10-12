import { FaTimesCircle } from 'react-icons/fa';

const close = (e) => {
    const popup = e.target.parentElement.parentElement
    console.log(popup);
    popup.style.display = "none";
}

const Popup = (props) => {
    return (
        <div className="popup">
            {props.component}
            <div className='escDiv'>
                <FaTimesCircle onClick={close} />
            </div>
        </div>
    )
}

export default Popup