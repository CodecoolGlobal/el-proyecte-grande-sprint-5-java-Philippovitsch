import { Typography } from "@mui/material";

export default function Header (props){
    return (
        <header>
            <Typography variant="h1" color="primary" 
                        sx={{ textAlign: 'center', fontSize: 50, mt: 2 }}>
                {props.title}
            </Typography>
        </header>
    );
}