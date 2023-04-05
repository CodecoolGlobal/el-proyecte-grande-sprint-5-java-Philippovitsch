import { Alert, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { signUp } from "../functions/authentication";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [severity, setSeverity] = useState("info");
  const [signUpMessage, setSignUpMessage] = useState(null);

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const getUserRoles = () => {
    const checkboxes = document.querySelectorAll("input[type=radio]:checked");
    
    if (checkboxes.length === 0) {
      return ["user"];
    }

    const roles = [];
    checkboxes.forEach(checkbox => {
      // write one operation per line, there is no need to make everything a one-liner
      roles.push(checkbox.value.replaceAll("role-", ""));
    })
    return roles;
  };

  const performSignUp = async () => {
    const userData = {
      username: username,
      email: email,
      password: password,
      role: getUserRoles()
    }
    const response = await signUp(userData)
    // .then(response=> {
      
    // })
    // use then chaining method of the Promise, instead of await

    if (response.status === 200) {
      setSeverity("success");
      setSignUpMessage("User successfully created!")
    } else {
      setSeverity("error");
      setSignUpMessage(`${response.error}: ${response.message}`);
    }
  };


  return (
    <div className='content-wrapper'>
        <Typography gutterBottom variant="h4" component="div">
          Sign up:
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
        { signUpMessage && <Alert severity={severity} sx={{ mb: 4, width: 485 }}>{signUpMessage}</Alert>}
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
            id="email"
            label="E-Mail"
            type="email"
            helperText="Please enter your E-Mail."
            InputProps={{ sx: { width: 500 } }}
            onChange={changeEmail}
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
          <FormControl sx={{ marginTop: 2, marginLeft: 1 }}>
            <FormLabel id="user-role">User role</FormLabel>
              <RadioGroup
                sx={{ display: "inline" }}
                aria-labelledby="user-role"
                defaultValue="role-premium"
              >
                <FormControlLabel value="role-user" control={<Radio />} label="User" />
                <FormControlLabel value="role-premium" control={<Radio />} label="Premium User" />
                <FormControlLabel value="role-admin" control={<Radio />} label="Admin" />
              </RadioGroup>
            </FormControl><br />
          <Button variant="contained" onClick={performSignUp} sx={{ marginTop: 3 }}>SUBMIT</Button>
        </div>
      </Box> 
    </div>
  )
}
