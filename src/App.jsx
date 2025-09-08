import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";
import Index from "./components/Index.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;