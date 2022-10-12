import { Link } from 'react-router-dom'

import general from '../../assets/images/general.jpg'
import lifestyle from '../../assets/images/lifestyle.png'
import patient from '../../assets/images/patient.jpg'
import relligion from '../../assets/images/relligion.jpg'
import services from '../../assets/images/services.jpg'
import logo from '../../assets/soroka-logo.png'
import mapIcon from '../../assets/map-icon.svg'

import MainSquare from '../mainSquare/MainSquare'
import { AiOutlineMenu } from 'react-icons/ai';

const Main = () => {

    const MainArr = [
        {
            img: general,
            color: 'general',
            text: 'מידע כללי',
            link: '#',
        },
        {
            img: patient,
            color: 'patient',
            text: 'זכויות המטופל',
            link: '#',
        },
        {
            img: lifestyle,
            color: 'lifestyle',
            text: 'נוחות ופנאי',
            link: '#',
        },
        {
            img: services,
            color: 'services',
            text: 'שירותים מיוחדים',
            link: '#',
        },
        {
            img: relligion,
            color: 'relligion',
            text: 'שירותי דת',
            link: '#',
        },
    ]

    return (
        <>
            <main className='mainPage' >
                <div className='nav'>
                    <img src={mapIcon} />
                    <img src={logo} />
                    <AiOutlineMenu style={{ color: 'var(--blue)', width: '10%' }} />

                </div>
                {MainArr.map((el, i) => {
                    return (
                        <MainSquare
                            color={el.color}
                            img={el.img}
                            text={el.text}
                        />
                    )
                })}
                <footer>
                    <a className='clalit' href="https://www.clalit.co.il" >אתר כללית</a>
                    <a className='soroka' href="https://www.clalit.co.il" >אתר סורוקה</a>
                </footer>
            </main>
        </>
    )
}

export default Main