import { Typography } from "@mui/material";

export default function Header (props){
    return (
        <header>
            <Typography variant="h1" color="primary" 
                        sx={{ textAlign: 'center' }}>
                {props.title}
            </Typography>
        </header>
    );
}