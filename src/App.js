import { React, useState } from "react";
import "./App.css";
import { Button, TextField } from "@mui/material";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/Navigation Bar";

export default function ButtonAppBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    let status = loggedIn === false ? true : false;
    setLoggedIn(status);
  };

  return (
    <div>
      <NavBar />
      {!loggedIn ? 
        <form className="formLogin">
          <TextField
            label="Username *"
            variant="standard"
            className="MuiTextField-root"
          />
          <TextField
            label="Password *"
            type="password"
            variant="standard"
            className="MuiTextField-root"
          />
          <div>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                width: 300,
                marginTop: 4,
              }}
            >
              LOGIN
            </Button>
          </div>
        </form> : <Dashboard />
      }
    </div>
  );
}