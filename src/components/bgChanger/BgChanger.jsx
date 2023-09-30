import React, { useState } from 'react'
import  './bgChanger.css'

const BgChanger = () => {
    const [color, setColor] = useState("aqua")
  return (
    <div className='container' style={{backgroundColor: color}}>      
    <nav className="navbar">
        <div className="navitems">
            <button className='btn' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className='btn' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
            <button className='btn' style={{backgroundColor: "black", color: "white"}} onClick={() => setColor("black")}>Black</button>
            <button className='btn' style={{backgroundColor: "white"}} onClick={() => setColor("white")}>White</button>
            <button className='btn' style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>Orange</button>
            <button className='btn' style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
            <button className='btn' style={{backgroundColor: "gray"}} onClick={() => setColor("gray")}>Gray</button>
        </div>
    </nav>
    </div>
  )
}

export default BgChanger
