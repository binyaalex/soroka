
const MainSquare = (props) => {

  return (
    <>
      <div className="mainSquare"
        style={{ background: `var(--${props.color})` }}
        onClick={() => props.setMainSelect(props.mainSelect === props.color ? '' : props.color)}
      >
        <div className="mainSquareImg">
          <img src={props.img} />
        </div>
        <div className="mainSquareText">
          {props.text}
        </div>
      </div >

      {props.mainSelect === props.color &&
        <div className="categories">
          {props.categories.map((el, i) => {
            return (
              <div className="category" key={i} onClick={''} >
                <img src={el.img} />
                <h2 style={{ color: `var(--${props.color})` }}>{el.title}</h2>
              </div>
            )
          })
          }
        </div>
      }
    </>
  )
}

export default MainSquare