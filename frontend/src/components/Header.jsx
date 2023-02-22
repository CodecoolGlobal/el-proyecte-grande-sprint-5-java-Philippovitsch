import { Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import AddLocation from "./AddLocation";

export default function Header (props){
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {props.title}
                    </Typography>
                        <AddLocation fetchLocations={props.fetchLocations} addLocation={props.addLocation}/>
                        <Button color="inherit" variant="text">Sign Up</Button>
                        <Button color="inherit" variant="text">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
}