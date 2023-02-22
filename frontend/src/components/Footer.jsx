import { Typography } from "@mui/material"

export default function Footer(props) {
  return (
    <footer>
      <Typography variant="body1" color="primary" 
        sx={{ textAlign: 'center', mt: 3 }}>
        {props.title}
      </Typography>
    </footer>
  )
}

Footer.defaultProps = {
    title: "© Umbrella Corporation"
}