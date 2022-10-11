import lifestyle from '../../assets/images/lifestyle.png'
import patient from '../../assets/images/patient.jpg'
import relligion from '../../assets/images/relligion.jpg'
import services from '../../assets/images/services.jpg'

const Main = () => {
    
	const MainArr = [
		{
			img: lifestyle,
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
                {
                    MainArr.map((el, i) => {
                        return (
                            <div className="mainSquare" style={{background: el.color}}>
                                <div className="mainSquareImg">
                                    <img src={el.img} />
                                </div>
                                <div className="mainSquareText">
                                    {el.text}
                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}

export default Main