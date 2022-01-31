import React from "react";
import './clickerStyle.css';
export const Clicker = () => {
    let [state, setState] = React.useState<number>(0)
    return (
        <div className="wrapper">
          <div className="clicker-display">{state}</div>
          <div className="button-list">
              <button className='button-item' style={{backgroundColor: 'green'}} onClick={() => setState(state + 1)}>+</button>
              <button className='button-item' style={{backgroundColor: 'yellow'}} onClick={() => setState(0)}>↺</button>
              <button className='button-item' style={{backgroundColor: 'red'}} onClick={() => setState(state - 1)}>-</button>  
          </div>
        </div>
    )
}