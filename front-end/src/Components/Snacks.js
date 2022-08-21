import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h3>Snack List</h3>
      <div class="row">
        {snacks.map((snack) => {
          return <div class="col-4"> <Snack key={snack.id} snack={snack} /> </div>
        })}
      </div>
    </div>
  );
}

export default Snacks;
