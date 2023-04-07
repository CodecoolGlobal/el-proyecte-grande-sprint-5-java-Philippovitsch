import { NavLink } from 'react-router-dom';

import { Button, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import TsunamiIcon from '@mui/icons-material/Tsunami';

import MenuBar from './MenuBar';

export default function Header(props) {
    const authenticationItems = (props.userData)
            ? <>
                <Typography variant="body1" sx={{ mr: 3 }}>
                    <i>Logged in as: </i>
                    <NavLink to="/UserDetails" className="link"><b>{props.userData.username}</b></NavLink>
                </Typography>
                <NavLink to="/LogOut" style={{ textDecoration: 'none' }}>
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        LOGOUT
                    </Button>
                </NavLink>
            </>
            : <>
                <NavLink to={"/SignUp"} style={{ textDecoration: 'none' }}>
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        SIGN UP
                    </Button>
                </NavLink>
                <NavLink to="/LogIn" style={{ textDecoration: 'none' }}>
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        LOGIN
                    </Button>
                </NavLink>
            </>;


    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 1 }}
                        >
                            <TsunamiIcon />
                        </IconButton>
                        <NavLink to="/" className="link" >
                            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                                {props.title}
                            </Typography>
                        </NavLink>
                        <MenuBar userData = { props.userData }/>
                        { authenticationItems }
                    </Toolbar>
                </AppBar>
            </Box>
        </header >
    );
}