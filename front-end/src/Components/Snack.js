import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <tr>
      <td>
      <img src={snack.image} alt="image"/> 
      </td>
      <td><Link to={`/snacks/${snack.id}`}>{snack.name}</Link></td>
      <td>
        <Link to={`/snacks/${snack.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Snack;
