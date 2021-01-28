import React, { useState } from 'react';

import "./Slider.css";



function Slider({ min, max, unit }) {

    // const setInput = () => {
    //     return(document.querySelector(".amount").value)
    // }

    const [val, setVal] = useState(1);


    const getVal = (e) => {
        setVal(e.target.value);
    }
    


        

    
    return (
        <div className="slider">
            <input className="slider__range"
                   type="range"
                   min = { min }
                   max = { max }
                   onChange={getVal}
                   value={val}
                   id="amount"
                   placeholder={val}
                   />
            <output className="slider__bubble">
            </output>
            <div className="slider__value">
            <span>{min}</span>
            <span>{ unit }</span>
            <span>{max}</span>
            </div>

            
        </div>
    )
}

export default Slider;
