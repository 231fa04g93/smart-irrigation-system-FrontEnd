import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Index.css'

const Index = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/login");   // already registered → go to login
    } else {
      navigate("/registration"); // not registered → go to register
    }
  };

  return (
    <div className='indexbox'>
      <header>
        <h1>Smart Irrigation System</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/registration">Register</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h2>Efficient Water Management for Smart Farming</h2>
          <p>
            Monitor and control irrigation with real-time data and automation for
            better crop yields and water savings.
          </p>
          <button onClick={handleGetStarted} className="get-started-btn">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Our Features</h2>
          <div className="feature-grid">
            <div className="feature">
              <h3>💧 Real-time Monitoring</h3>
              <p>Track soil moisture and weather conditions instantly for better water management.</p>
            </div>
            <div className="feature">
              <h3>☀️ Weather Integration</h3>
              <p>Smart system adapts irrigation schedules based on rainfall and forecasts.</p>
            </div>
            <div className="feature">
              <h3>⚡ Automated Control</h3>
              <p>Automatic irrigation reduces water waste and improves crop productivity.</p>
            </div>
            <div className="feature">
              <h3>📱 Remote Access</h3>
              <p>Manage and monitor your farm irrigation system from any device.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Smart Irrigation System. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Index
