import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logOut } from '../functions/authentication';

export default function LogOut({setUser}) {
  const [severity, setSeverity] = useState("info");
  const [logoutMessage, setLogoutMessage] = useState(null);

  const navigate = useNavigate();

  const redirectUser = () => {
    setTimeout(() => {
      if (window.location.pathname === "/LogOut") {
        navigate("/")
      }
    }, 2000)
  }

  useEffect(() => {
    const performLogOut = async () => {
      const response = await logOut();

      if (response.status === 200) {
        setUser(null);
        setLogoutMessage(response.message);
        setSeverity("success");
        redirectUser();
      } else {
        setLogoutMessage(`${response.error}: ${response.message}`);
        setSeverity("error");
      }
    };

    performLogOut();
  });

  return (
    <div className='content-wrapper'>
      { logoutMessage && <Alert severity={severity} sx={{ mb: 2 }}>{logoutMessage}</Alert>}
    </div>
  )
}
