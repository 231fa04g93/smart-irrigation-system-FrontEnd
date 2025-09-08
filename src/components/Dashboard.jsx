import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart } from "chart.js/auto";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [moisture, setMoisture] = useState(65);
  const [pumpOn, setPumpOn] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [lastWatered, setLastWatered] = useState("--:--:--");
  const [weather, setWeather] = useState("Fetching weather data...");
  const [chartInstance, setChartInstance] = useState(null);

  // Setup chart once
  useEffect(() => {
    const ctx = document.getElementById("moistureChart");
    if (ctx) {
      if (Chart.getChart("moistureChart")) {
        Chart.getChart("moistureChart").destroy();
      }
      const newChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Soil Moisture (%)",
              data: [],
              borderColor: "green",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
      });
      setChartInstance(newChart);
    }

    // Fake weather update
    setTimeout(() => {
      setWeather("🌤️ 29°C, Clear Sky");
    }, 2000);
  }, []);

  // Update soil moisture randomly every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      let newMoisture = Math.floor(Math.random() * 40) + 50; // random 50–90
      setMoisture(newMoisture);

      if (chartInstance) {
        const now = new Date().toLocaleTimeString();
        const data = chartInstance.data;
        data.labels.push(now);
        data.datasets[0].data.push(newMoisture);

        // Keep last 10 readings
        if (data.labels.length > 10) {
          data.labels.shift();
          data.datasets[0].data.shift();
        }

        chartInstance.update();
      }

      // Auto mode logic
      if (autoMode) {
        if (newMoisture < 60) {
          setPumpOn(true);
          setLastWatered(new Date().toLocaleTimeString());
        } else {
          setPumpOn(false);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [chartInstance, autoMode]);

  const togglePump = () => {
    setPumpOn(!pumpOn);
    if (!pumpOn) {
      setLastWatered(new Date().toLocaleTimeString());
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully 🚪");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <header>
        <h1>Smart Irrigation System</h1>
        <nav>
          <button onClick={handleLogout} className="btn logout-btn">
            Logout
          </button>
        </nav>
      </header>

      <main>
        <section className="dashboard">
          <h2>Soil Moisture Monitoring</h2>

          <div className="moisture-bar">
            <div
              className="moisture-fill"
              style={{ width: `${moisture}%` }}
            ></div>
          </div>
          <p>Moisture Level: {moisture}%</p>

          <button
            onClick={togglePump}
            className={`btn ${pumpOn ? "" : "off"}`}
          >
            Pump: {pumpOn ? "ON" : "OFF"}
          </button>

          <label>
            <input
              type="checkbox"
              checked={autoMode}
              onChange={() => setAutoMode(!autoMode)}
            />{" "}
            Auto Mode
          </label>

          <p>Last Watered: {lastWatered}</p>

          {/* Chart */}
          <canvas id="moistureChart" width="400" height="200"></canvas>

          <div className="tip-box">
            <h3>💡 Smart Tip</h3>
            <p>Water plants early in the morning.</p>
          </div>
        </section>

        {/* Weather Update */}
        <section className="weather">
          <h2>Live Weather Update</h2>
          <p>{weather}</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
