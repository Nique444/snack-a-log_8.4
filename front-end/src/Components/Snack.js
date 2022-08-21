import { Link } from "react-router-dom";
import HealthCheck from "./HealthCheck";

function Snack({ snack }) {
  return (
    <tr>
      <section>
        <HealthCheck snack={snack} />
      </section>
      <td>
        <img src={snack.image} alt="" />
      </td>
      <td>
        <Link className="Snack" to={`/snacks/${snack.id}`}>
          {" "}
          <h4>
            {" "}
            <a href={snack.id} >
              {snack.name}
            </a>
          </h4>
        </Link>
      </td>
      <td>
        <Link to={`/snacks/${snack.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Snack;
