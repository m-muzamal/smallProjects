import React from "react";
import "./studentCard.css";
import photo from "../../assets/pic.jpg";
import uaf from "../../assets/uaf.png";

const StudentCard = ({ props, btn, image }) => {
  return (
      <div className="card-container">
        <div className="card">
          <div className="head">
            <div className="title">
              <div className="title-text">
                <h3 className="card-title">UNIVERSITY OF AGRICULTURE</h3>
                <p className="title-p">FAISLABAD-PAKISTAN</p>
              </div>
              <div className="logo">
                <img className="logo-img" src={uaf} alt="" />
              </div>
            </div>
          </div>

          <div className="left">
            <div className="image">
              {image ? (
                <img
                  className="img"
                  src={URL.createObjectURL(image)}
                  alt="Selected"
                />
              ) : (
                <img className="img" src={photo} alt="not-selected" />
              )}
            </div>
            <div className="box1">Student</div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="text">
              <p>Director </p>
              <p>Students Affairs</p>
            </div>
          </div>

          <div className="right">
            <div className="detail">
              <span>{props.name}</span>
              <span>{props.ag}</span>
              <span>{props.degree}</span>
              <span>{props.address}</span>
            </div>
            <div className="bottom">NON-BOARDER</div>
          </div>
          <button className="confirm-btn" onClick={btn}>
            Confirm
          </button>
        </div>
      </div>
  );
};

export default StudentCard;
