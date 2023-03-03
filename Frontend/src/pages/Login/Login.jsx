import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField} from "@mui/material";
import Modal from "@mui/material/Modal";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "../../Components/TreatForm/TreatStyles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(prev => !prev);
  const handleClose = () => setOpen(prev => !prev);

  function handleClickShowPassword() {setShowPassword(prev=> !prev)}
  function handleMouseDownPassword(e) {e.preventDefault}
  async function handleSubmit(e){
    e.preventDefault();

    console.log(email, password);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: '40vh',
    width: "350px",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
  };

  return (
    <div>
      <a className='navPages' onClick={handleOpen}>Login</a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="create" onsubmit={handleSubmit}>
            <h3>Login</h3>

          <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <TextField
              required
              id="outlined-required"
              label="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <button>Login</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
