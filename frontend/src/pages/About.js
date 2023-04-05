import { Card, List, ListItemButton, ListItemText, Typography } from "@mui/material";

export default function About() {
  return (
    <div className="cardwrapper">
      <Card sx={{ width: 1, pt: 3.5, pr: 3.5, pl: 3.5 }}>
        <Typography gutterBottom variant="h4" component="div">
          About us:
        </Typography>
        <Typography gutterBottom component="div" sx={{ whiteSpace: "normal" }}>
          The Umbrella Corporation was founded on January 30th 2023 so that
          three coding amateurs could finish the last stage of their training
          to finally get a job and do something with there lives.
        </Typography>
        <List sx={{ ml: -2 }}>
          <ListItemButton style={{ cursor: 'default' }}>
            <ListItemText>
              <u>Contact data:</u><br />
              Umbrella Corporation<br />
              by Leon S. Kennedy<br />
              kennedy@umbrella.org
            </ListItemText>
          </ListItemButton>
          <ListItemButton style={{ cursor: 'default' }}>
            <ListItemText>
              <u>Address:</u><br />
              Raccoon City<br />
              123 Main Street<br />
              USA 55555
            </ListItemText>
          </ListItemButton>
        </List>
      </Card>
    </div>
  )
}
