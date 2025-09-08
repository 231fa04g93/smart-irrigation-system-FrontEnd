import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="aboutpage">
      <header>
        <h1>🌾 Smart Irrigation</h1>
        <nav>
          <Link to="/">Home</Link>
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </nav>
      </header>

      <div className="container">
        <h1>About Our Smart Irrigation System</h1>
        <p>
          The <b>Smart Irrigation System</b> helps farmers save water, increase
          crop yield, and manage farming with technology.
        </p>
        <p>
          It reduces wastage, improves efficiency, and provides simple tools for
          smart farming. 🌱
        </p>

        {/* Features */}
        <div className="features">
          <div className="card">
            <div className="emoji">💧</div>
            <h3>Water Saving</h3>
            <p>Optimized irrigation schedules based on real-time data.</p>
          </div>
          <div className="card">
            <div className="emoji">🌱</div>
            <h3>Better Crops</h3>
            <p>Right amount of water at the right time = better yield.</p>
          </div>
          <div className="card">
            <div className="emoji">📊</div>
            <h3>Smart Dashboard</h3>
            <p>Track land, crops, and irrigation easily.</p>
          </div>
          <div className="card">
            <div className="emoji">⚡</div>
            <h3>Automation</h3>
            <p>Automatic pumps save time and effort.</p>
          </div>
        </div>

        {/* Mission */}
        <div className="mission">
          <h2>🎯 Our Mission</h2>
          <p>
            Empower farmers with tools that make farming sustainable,
            productive, and eco-friendly.
          </p>
        </div>

        {/* Team */}
        <div className="team">
          <h2>👨‍👩‍👧‍👦 Meet Our Team</h2>
          <div className="team-members">
            <div className="member">
              <img src="ayush image.jpg" alt="Ayush Singh" />
              <h4>Ayush Singh</h4>
              <p>Project Lead</p>
            </div>
            <div className="member">
              <img src="https://via.placeholder.com/80" alt="Varshini Allam" />
              <h4>Varshini Allam</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="member">
              <img src="https://via.placeholder.com/80" alt="Vuyyuru Yaksha Somya" />
              <h4>Vuyyuru Yaksha Somya</h4>
              <p>Backend Engineer</p>
            </div>
            <div className="member">
              <img src="https://via.placeholder.com/80" alt="Sindhu Meghana Kalyanam" />
              <h4>Sindhu Meghana Kalyanam</h4>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
