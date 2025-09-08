import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div style={{ display: "flex", gap: 12 }}>
     
        <Link to="/dashboard">
          <button>Go to Dashboard</button>
        </Link>
        <Link to="/registration">
          <button>Registration</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
