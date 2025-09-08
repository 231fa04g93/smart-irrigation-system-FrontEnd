import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    village: "",
    crop: "",
    land: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Registered Successfully ✅");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Farmer Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required />
        <input type="text" id="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" id="village" placeholder="Village" value={formData.village} onChange={handleChange} required />
        <input type="text" id="crop" placeholder="Main Crop" value={formData.crop} onChange={handleChange} required />
        <input type="number" id="land" placeholder="Land Area (in acres)" value={formData.land} onChange={handleChange} required />
        <input type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <button type="submit" className="btn register-btn">Register</button>
      </form>
    </div>
  );
};

export default Registration;
