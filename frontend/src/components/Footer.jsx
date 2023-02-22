import { Typography, Box, Container } from "@mui/material"

export default function Footer(props) {
  return (
    <footer>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            {props.title}
          </Typography>
        </Container>
      </Box>
    </footer>
  )
}

Footer.defaultProps = {
    title: "© Umbrella Corporation 2023"
}