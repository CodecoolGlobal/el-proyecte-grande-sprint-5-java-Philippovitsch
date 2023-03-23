import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import { useState } from 'react';

export default function EventModal({ closeModal, addCalendarEvent }) {
    const [eventname, setEventname] = useState("");


    document.onkeydown = (event) => {
        if (event.code === "Escape") {
            closeModal();
        }
    };

    const changeEventname = (event) => {
        setEventname(event.target.value);
    };

    const onAdd = async () => {
        const calendarEvent = {
            name: eventname
        }
        addCalendarEvent(calendarEvent);
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(event) => { event.stopPropagation() }} style={{ cursor: 'default' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <span className="close" onClick={closeModal}>&times;</span>
                    </Grid>
                    <div className='content-wrapper'>
                        <Typography gutterBottom variant="h4" component="div">
                            New Event:
                        </Typography>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                marginTop: 3
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    focused
                                    id="eventName"
                                    label="Event"
                                    type="text"
                                    helperText="Please enter an Event."
                                    InputProps={{ sx: { width: 500 } }}
                                    onChange={changeEventname}
                                />
                                <br />
                                <Button variant="contained" onClick={onAdd} sx={{ marginTop: 3 }}>SUBMIT</Button>
                            </div>
                        </Box>
                    </div>
                </Grid>
            </div>
        </div>
    )
}

EventModal.propTypes = {
    closeModal: PropTypes.func.isRequired
}