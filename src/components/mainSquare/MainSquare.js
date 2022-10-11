
const MainSquare = (props) => {

  return (
    <div className="mainSquare" style={{ background: props.color }}>
      <div className="mainSquareImg">
        <img src={props.img} />
      </div>
      <div className="mainSquareText">
        {props.text}
      </div>
    </div>
  )
}

export default MainSquare