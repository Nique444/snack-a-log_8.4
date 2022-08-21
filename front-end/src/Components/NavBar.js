import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 class="nav-title">
        <Link to="/snacks" class="nav-title-link">Snacks</Link>
      </h1>
      <button class="nav-button">
        <Link to="/snacks/new" class="nav-button-link">New Snack</Link>
      </button>
    </nav>
  );
}
