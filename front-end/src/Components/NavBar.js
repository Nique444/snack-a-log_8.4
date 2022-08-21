import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <button>
        <Link to="/snacks">Snacks</Link>
      </button>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
    </nav>
  );
}
