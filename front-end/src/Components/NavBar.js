import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="nav-title">
        <Link to="/snacks" className="nav-title-link">Snacks</Link>
      </h1>
      <button className="nav-button">
        <Link to="/snacks/new" className="nav-button-link">New Snack</Link>
      </button>
    </nav>
  );
}
