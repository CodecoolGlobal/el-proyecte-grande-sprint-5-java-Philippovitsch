import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Alert, Button, Typography } from '@mui/material';
import { useState } from 'react';

import { logIn } from '../functions/authentication';
import { useNavigate } from 'react-router-dom';

export default function LogIn({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [severity, setSeverity] = useState("info");
  const [loginMessage, setLoginMessage] = useState(null);

  const navigate = useNavigate();

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const redirectUser = () => {
    setTimeout(() => {
      if (window.location.pathname === "/LogIn") {
        navigate("/")
      }
    }, 2000)
  }

  const performLogIn = async () => {
    const userData = {
      username: username,
      password: password
    }
    const response = await logIn(userData);

    if (response.status === 200) {
      setUser(response.userData);
      setSeverity("success");
      setLoginMessage("Login successful!");
      redirectUser();
    } else {
      setSeverity("error");
      setLoginMessage(`${response.error}: ${response.message}`);
    }
  };

  return (
    <div className='content-wrapper'>
        <Typography gutterBottom variant="h4" component="div">
          User login:
        </Typography>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          marginTop: 3
        }}
        noValidate
        autoComplete="off"
      >
        { loginMessage && <Alert severity={severity} sx={{ mb: 4, width: 485 }}>{loginMessage}</Alert>}
        <div>
          <TextField
            required
            focused
            id="username"
            label="Username"
            type="text"
            helperText="Please enter your username."
            InputProps={{ sx: { width: 500 } }}
            onChange={changeUsername}
          /><br />
          <TextField
            required
            focused
            id="password"
            label="Password"
            type="password"
            helperText="Please enter your password."
            InputProps={{ sx: { width: 500 } }}
            onChange={changePassword}
          /><br />
          <Button variant="contained" onClick={performLogIn} sx={{ marginTop: 3 }}>SUBMIT</Button>
        </div>
      </Box> 
    </div>
  )
}
