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
            color: '#05454F',
            text: 'מידע כללי',
            link: '#',
        },
        {
            img: patient,
            color: '#00667D',
            text: 'זכויות המטופל',
            link: '#',
        },
        {
            img: lifestyle,
            color: '#17A1BB',
            text: 'נוחות ופנאי',
            link: '#',
        },
        {
            img: services,
            color: '#29D1DE',
            text: 'שירותים מיוחדים',
            link: '#',
        },
        {
            img: relligion,
            color: '#95D600',
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
                    <AiOutlineMenu style={{ color: '#05454F' }} />

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
            </main>
        </>
    )
}

export default Main