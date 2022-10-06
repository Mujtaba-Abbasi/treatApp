import { useState } from "react";
import { TextField } from "@mui/material";
import "./WorkoutStyles.css";
import axios from "axios";
import {useTreatsContext} from '../../hooks/useTreatsContext'

const WorkoutForm = () => {
  const {dispatch } = useTreatsContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [host, setHost] = useState("");
  const [status, setStatus] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const treat = { title, description, host, status };
    try {
      const response = await axios.post("http://localhost:4000/api/treats", treat);

      setError(null);
      setTitle("");
      setDescription("");
      setHost("");
      setStatus(""); 
      dispatch({type: 'CREATE_TREAT', payload: response.data})
    } catch (error) {}
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Treat</h3>

      <TextField
        InputProps={{ className: "textField" }}
        required
        id="outlined-required"
        label="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <TextField
        InputProps={{ className: "textField" }}
        required
        id="outlined-required"
        label="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <TextField
        InputProps={{ className: "textField" }}
        required
        id="outlined-required"
        label="Host"
        onChange={(e) => setHost(e.target.value)}
        value={host}
      />
      <TextField
        InputProps={{ className: "textField" }}
        required
        id="outlined-required"
        label="Status"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      />

      <button>Add Treat</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
