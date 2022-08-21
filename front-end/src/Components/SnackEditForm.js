import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label For="name">Name:</Form.Label>
        <Form.Control
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        </Form.Group>
        <Form.Group>
        <Form.Label For="fiber">Fiber:</Form.Label>
        <Form.Control
          id="fiber"
          type="number"
          value={snack.fiber}
          placeholder="0"
          onChange={handleTextChange}
        />
        </Form.Group>
        <span> g</span>
        <Form.Group>
        <Form.Label For="protein">Protein:</Form.Label>
        <Form.Control
          id="protein"
          type="number"
          value={snack.protein}
          placeholder="0"
          onChange={handleTextChange}
        />
        </Form.Group>
        <span> g</span>
        <Form.Group>
        <Form.Label For="added_sugar">Added Sugar:</Form.Label>
        <Form.Control
          id="added_sugar"
          type="number"
          value={snack.added_sugar}
          placeholder="0"
          onChange={handleTextChange}
        />
         </Form.Group>
        <span> g</span>
        <Form.Group>
        <Form.Label For="image">Image:</Form.Label>
        <Form.Control
          id="image"
          type="textarea"
          pattern="http[s]*://.+"
          required
          value={snack.image}
          placeholder="https://"
          onChange={handleTextChange}
        />
        </Form.Group>
        <Button type="submit" />
      </Form>
      <Link to={`/snacks/`}>
        <Button>Back</Button>
      </Link>
    </>
  );
}

export default SnackEditForm;
