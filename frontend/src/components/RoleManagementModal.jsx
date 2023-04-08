import { useState } from 'react';

import { Typography, FormLabel, RadioGroup, FormControl, FormControlLabel, Radio, Grid, Box, Button } from '@mui/material'

export default function RoleManagementModal({ closeModal, userToEditRole, oldRole, changeUserRoleHandler }) {

  const [newRole, setNewRole] = useState(oldRole);

  document.onkeydown = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div  className="modal-content" 
        sx = {{ p: 5 }}
        onClick={(event) => { event.stopPropagation() }} 
        style={{ cursor: 'default' }}
      >
        <span className="close" onClick={closeModal}>&times;</span>
        <Typography gutterBottom variant="h4" component="div" sx={{ mt: 4, textAlign: "center" }}>
          Role Management
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ mt: 2, mb: 7, textAlign: "center" }}>
           User: {userToEditRole}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center' }}>
              <FormControl>
                <FormLabel id="role-radio-label">Choose role:</FormLabel>
                <RadioGroup
                  aria-labelledby="role-radio-label"
                  defaultValue={oldRole}
                  name="radio-buttons-group"
                  onChange={(event) => setNewRole(event.target.value)}
                >
                  <FormControlLabel value="USER" control={<Radio />} label="Standard User" />
                  <FormControlLabel value="PREMIUM_USER" control={<Radio />} label="Premium User" />
                  <FormControlLabel value="ADMIN" control={<Radio />} label="Administrator" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ m: 4, mt: 2, textAlign: "center" }}>
                <p style={{color: '#adadad'}}>Old Role: {oldRole}</p>
                <p>New Role: {newRole}</p>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button variant="contained" onClick={() => changeUserRoleHandler(userToEditRole, newRole)}>Submit</Button>
        </Box>
      </div>
    </div>
  )
}
