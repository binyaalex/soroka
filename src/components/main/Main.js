const Main = () => {

    
	const MainArr = [
		{
			img: '',
            color: 'blue',
			text: 'נקיון כניסה',
			link: '#',
		},
		{
			img: '',
            color: 'blue',
			text: 'תחזוקת מעליות',
			link: '#',
		},
		{
			img: '',
            color: 'blue',
			text: 'פינוי זבל',
			link: '#',
		},
		{
			img: '',
            color: 'blue',
			text: 'אבטחה',
			link: '#',
		},
		{
			img: '',
            color: 'blue',
			text: 'שיפוץ',
			link: '#',
		},
    ]

    return (
        <>
            <main className='mainPage' >
                {
                    MainArr.map((el, i) => {
                        return (
                            <div>
                                {el.text}
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}

export default Main