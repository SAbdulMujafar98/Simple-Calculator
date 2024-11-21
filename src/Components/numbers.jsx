import React, { useState } from 'react'
import './numbers.css'

const Numbers = () => {

    const [input , setInput] =useState(" ");
    const [display, setDisplay] = useState("0");

    const handleClick = (value) => {
        setInput((prev) =>(prev + value));
        if(!isNaN(value)) {
            setDisplay((prev) => prev + value)
        }
    };

    const calculate = () => {
        try{
            // eslint-disable-next-line
            const result = eval(input);
            setInput(String(result));
            setDisplay(String(result));
        } catch (err) {
            setInput(" ");
            setDisplay("Error")
        }
    };

    const clearInput = () =>{
        setInput(" ")
        setDisplay(" ")
    }

    const negativeInput = () =>{
        setInput(input* -1)
        setDisplay(input* -1)
    }


  return (
    <section className='calculator'>
        <div className="display" >{ display || "0"}</div>
        <div className='cal-rows' >
            <button className="function" onClick={clearInput}>AC</button>
            <button className="function" onClick={negativeInput}>+/-</button>
            <button className="function" onClick={() => handleClick("%")}>%</button>
            <button className="operator" onClick={() => handleClick("/")}>÷</button>
        </div>
        <div className='cal-rows'>
            <button className="number" onClick={() => handleClick("7")}>7</button>
            <button className="number" onClick={() => handleClick("8")}>8</button>
            <button className="number" onClick={() => handleClick("9")}>9</button>
            <button className="operator" onClick={() => handleClick("*")}>×</button>
        </div>
        <div className='cal-rows'>
            <button className="number" onClick={() => handleClick("4")}>4</button>
            <button className="number"onClick={() => handleClick("5")}>5</button>
            <button className="number"onClick={() => handleClick("6")}>6</button>
            <button className="operator" onClick={() => handleClick("-")}>-</button>
        </div>
        <div className='cal-rows'>
            <button className="number" onClick={() => handleClick("1")}>1</button>
            <button className="number" onClick={() => handleClick("2")}>2</button>
            <button className="number" onClick={() => handleClick("3")}>3</button>
            <button className="operator" onClick={() => handleClick("+")}>+</button>
        </div>
        <div className='cal-rows'>
            <button className="zero-number" onClick={() => handleClick("0")} >0</button>
            <button className="point" onClick={() => handleClick(".")}>.</button>
            <button className="operator" onClick={calculate}>=</button>
        </div>
    </section>
  )
}

export default Numbers