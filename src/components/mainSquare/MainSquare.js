import { useState, useEffect } from 'react';
import SubSquare from '../subSquare/SubSquare';

const MainSquare = (props) => {
  useEffect(() => {
    props.mainSelect && document.querySelector(".categories").scrollIntoView();
  })
  return (
    <>
      <div className="mainSquare mountedStyle"
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
              <SubSquare el={el} color={props.color} />
            )
          })
          }
        </div>
      }
    </>
  )
}

export default MainSquare