import React from 'react'
import { Card } from '@mui/material'
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import UsersTable from '../components/UsersTable';

export default function Administration({userData}) {
  return (
    <>
        { userData && userData.roles.includes("ROLE_ADMIN") &&
            <div className="cardwrapper">
                <Card sx={{ width: 1, pt: 3.5, pr: 3.5, pl: 3.5 }}>
                    <Typography gutterBottom variant="h4" component="div">
                    Administration Page
                    </Typography>
                    <UsersTable />
                </Card>
            </div>
        }
        { !userData &&
            <Paper elevation={4} sx={{ padding: 3, marginTop: 3 }}>
                <Typography>
                You are not logged in.
                </Typography>
            </Paper>
        }
        { userData && !userData.roles.includes("ROLE_ADMIN") && 
            <Paper elevation={4} sx={{ width: 1, padding: 3, marginTop: 3 }}>
                <Typography>
                You are not an Administrator.
                </Typography>
            </Paper>
        }
    </>
  )
}
