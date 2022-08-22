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
    <div>
      <h3 className="title">Snack List</h3>
      <div className="snacks">
        {snacks.map((snack) => {
          return <Snack key={snack.id} snack={snack} /> 
        })}
        </div>
      </div>
  );
}

export default Snacks;
