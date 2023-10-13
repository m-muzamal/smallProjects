import React, { useState } from "react";
import "./themechanger.css";
import img from "../../assets/uaf-bg.jpg";

const ThemeChanger = () => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor((prevSate) => !prevSate);
  };
  return (
    <div className={` ${color ? "containers" : "container"}`}>
      <div className={` ${color ? "cardblack" : "card"}`}>
        <img src={img} alt="Avatar" />
        <div className="box">
          <div className="text">
            <h3>University of Agriculture Faislabad</h3>
            <p>Sub campus Toba Tek Signh</p>
          </div>
          <button className="btn" onClick={handleClick}>
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
