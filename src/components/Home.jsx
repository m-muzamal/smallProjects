import React, { useState } from "react";
import "./home.css";
import StudentCard from "./studentCard/StudentCard";

const Home = () => {
  const [submit, setSubmit] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    ag: "",
    degree: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleSubmit = () => {
    setSubmit(true);
  };

  const handleClick = () => {
    setSubmit(false);
  };
  return (
    <>
      <div id="/" className={` ${submit ? "blurred" : "home"}`}>
        <div className="container">
          <h2 className="header-text">Enter the details.</h2>
          <div className="items">
            <div className="inputs">
              <h3 className="header-text2">Name:</h3>
              <input
                className="input-text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="inputs">
              <h3 className="header-text2">AG NO:</h3>
              <input
                className="input-text"
                name="ag"
                value={formData.ag}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter ag number"
              />
            </div>
          </div>
          <div className="items">
            <div className="inputs">
              <h3 className="header-text2">Degree:</h3>
              <input
                className="input-text"
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your degree"
              />
            </div>
            <div className="inputs">
              <h3 className="header-text2">Address:</h3>
              <input
                className="input-text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your address"
              />
            </div>
          </div>
          <input type="file" accept="image" onChange={handleImageChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      {submit && (
        <div className="preview">
          <StudentCard
            props={formData}
            btn={handleClick}
            image={selectedImage}
          />
        </div>
      )}
    </>
  );
};

export default Home;
