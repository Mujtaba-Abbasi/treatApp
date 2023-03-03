import { useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";
import { useTreatsContext } from "../../hooks/useTreatsContext";
import Modal from "@mui/material/Modal";
import "./TreatStyles.css";

const TreatForm = () => {
  const { dispatch } = useTreatsContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [host, setHost] = useState("");
  const [status, setStatus] = useState("");
  
  const [error, setError] = useState(null);
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "70vh",
    width: "350px",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
  };
  
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen((prev) => !prev);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenSuccess(prev=> !prev);
    setOpen(prev=> !prev)    
    const treat = { title, description, host, status };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/treats",
        treat
      );

      setError(null);
      setTitle("");
      setDescription("");
      setHost("");
      setStatus("");
      dispatch({ type: "CREATE_TREAT", payload: response.data });
    } catch (error) { }
  };

  const [openSuccess, setOpenSuccess] = useState(false);
  function handleSuccessOpen() {
    setOpenSuccess(prev => !prev);
  }
  function handleSuccess(e){
      e.preventDefault();
  }



  return (
    <div>
      <a className="navPages" onClick={handleOpen}>
        Add Treat
      </a>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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

            <button className="submitButton">Add Treat</button>
            {error && <div className="error">{error}</div>}
          </form>

        </Box>
      </Modal>
      <Modal open={openSuccess} onClose={handleSuccessOpen}>
        <Box sx={{...style, height: '20vh' }}>
          <form onSubmit={handleSuccess} style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <h1 className='navPages' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px' }}>
              <CheckCircleIcon sx={{ color: "green" }} />Treat Added!
            </h1>
            <button onClick={handleSuccessOpen}>Close</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default TreatForm;