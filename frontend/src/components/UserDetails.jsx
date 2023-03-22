import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Typography } from '@mui/material'

export default function UserDetails({userData}) {
  return (
    <div className="content-wrapper">
      <Typography gutterBottom variant="h4" component="div">
        User details:
      </Typography>
      <TableContainer component={Paper} sx={{ width: 500, marginTop: 4 }}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell><b>User-ID: </b></TableCell>
              <TableCell>{userData.id}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell><b>Username: </b></TableCell>
              <TableCell>{userData.username}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell><b>E-Mail: </b></TableCell>
              <TableCell>{userData.email}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell><b>Roles: </b></TableCell>
              <TableCell>{userData.roles.join(", ")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
