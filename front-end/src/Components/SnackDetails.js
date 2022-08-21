import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import HealthCheck from "./HealthCheck";


function SnackDetails() {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data.payload);
    });
  }, [id, navigate, API]);
  
  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteSnack();
  };

  return (
    <>
      <article>
        <h4>{snack.name}</h4>
        <img src={snack.image} alt="pic"/> 
        <div className="showNavigation">
          <section>
            <HealthCheck snack={snack} /> 
          </section>
          <h3>Protein: {snack.protein}g</h3>
          <h3>Fiber: {snack.fiber}g</h3>
          <h3>Added sugar: {snack.added_sugar}g</h3>
          <div>
            {" "}
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </>
  );
}

export default SnackDetails;
