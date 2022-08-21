import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
    image: "",
  });

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (response) => setSnack(response.data.payload),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const updateSnack = () => {
    axios.put(`${API}/snacks/${id}`, snack).then(
      (res) => {
        setSnack(res.data.payload);
        navigate(`/snacks`);
      },
      (error) => console.error(error)
    );
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label For="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        <label For="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          value={snack.fiber}
          placeholder="0"
          onChange={handleTextChange}
        />
        <span> g</span>
        <label For="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          value={snack.protein}
          placeholder="0"
          onChange={handleTextChange}
        />
        <span> g</span>
        <label For="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          value={snack.added_sugar}
          placeholder="0"
          onChange={handleTextChange}
        />
        <span> g</span>
        <label For="image">Image:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          required
          value={snack.image}
          placeholder="https://"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/snacks/`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default SnackEditForm;
