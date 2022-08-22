import { Link } from "react-router-dom";
import HealthCheck from "./HealthCheck";

function Snack({ snack }) {
  return (
    <div class="snack">
      <img src={snack.image} alt="" class="resize" />
      <h4 class="card-title">
        <Link className="Snack" to={`/snacks/${snack.id}`}>
          <a href={snack.id}>{snack.name}</a>{" "}
        </Link>
        <HealthCheck snack={snack} />
      </h4>
      <div class="card-body">
        <Link to={`/snacks/${snack.id}/edit`}>✏️</Link>
      </div>
    </div>
  );
}

export default Snack;
