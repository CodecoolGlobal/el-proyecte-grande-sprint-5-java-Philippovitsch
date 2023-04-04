import { Paper, Typography } from "@mui/material";

export default function About() {
  return (
    <div className="content-wrapper">
      <Typography gutterBottom variant="h4" component="div">
        About us:
      </Typography>
      <Paper elevation={4} sx={{ padding: 3, marginTop: 3 }}>
        <Typography>
          The Umbrella Corporation was founded on January 30th 2023 so that
          three coding amateurs could finish the last stage of their training
          to finally get a job and do something with there lives.
        </Typography>
      </Paper>
    </div>
  )
}