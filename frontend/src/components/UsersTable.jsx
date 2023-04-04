import React, { useEffect, useState } from 'react'
import { TableContainer } from "@mui/material";
import { Table, TableHead, TableRow, TableCell, Paper, TableBody } from "@mui/material";
import { fetchData } from '../functions/fetch';
import { Button } from '@mui/material';
import { removeUser } from '../functions/fetch';

export default function UsersTable() {

    const [users, setUsers] = useState([]);
    const [deleteCounter, setDeleteCounter] = useState(0);

    async function removeUserHandler(username) {
        await removeUser(username);
        setDeleteCounter(deleteCounter+1);
    }

    useEffect(() => {
        async function fetchUsers() {
            const fetchedUsers = await fetchData("/api/admin");
            setUsers(fetchedUsers);
        }
        fetchUsers();
    }, [deleteCounter])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="left">E-Mail</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Administration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.roles[0].name}</TableCell>
              <TableCell align="left">
                <Button variant="text"
                        onClick={() => { 
                            removeUserHandler(row.username);
                            }}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}