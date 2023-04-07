import React, { useState } from 'react'
import { TableContainer } from "@mui/material";
import { Table, TableHead, TableRow, TableCell, Paper, TableBody } from "@mui/material";
import { Button } from '@mui/material';
import { Snackbar, Alert } from '@mui/material';
import { getAllUsers, deleteUser } from '../fetch/adminEndpoint';
import RoleManagementModal from './RoleManagementModal';

export default function UsersTable({userData}) {

    const [users, setUsers] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [userToEditRole, setUserToEditRole] = useState('');
    const [oldRoleOfUserToEdit, setOldRoleOfUserToEdit] = useState('')

    const [successMessage, setSuccessMessage] = useState("");
    const [successOpen, setSuccessOpen] = useState(false);

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessOpen(false);
    };

    async function removeUserHandler(username) {
        const response = await deleteUser(username);
        if (response === 200) {
            setSuccessMessage('User successfully deleted from Database.')
            setSuccessOpen(true);
        }
        fetchUsers();
    }

    function removeRole_Prefix(fetchedUsers) {
        fetchedUsers.forEach(element => {
            element.roles[0].name = element.roles[0].name.substring(5);
        });
    }

    async function fetchUsers() {
        const fetchedUsers = await getAllUsers();
        removeRole_Prefix(fetchedUsers);
        setUsers(fetchedUsers);
    }
    fetchUsers();


    const closeModal = () => {
        setOpenModal(false);
    }

  return (
    <>
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
                        {row.username !== userData.username && <Button variant="text"
                                onClick={() => { 
                                    removeUserHandler(row.username);
                                    }}>Delete</Button>
                        }
                        {row.username !== userData.username && <Button variant="text"
                                onClick={() => { 
                                    setUserToEditRole(row.username);
                                    setOldRoleOfUserToEdit(row.roles[0].name)
                                    setOpenModal(true);
                                    }}>Change Role</Button>
                        }
                        {row.username === userData.username && 
                        <Button variant="text" disabled>Delete</Button>
                        }
                        {row.username === userData.username && 
                        <Button variant="text" disabled>Change Role</Button>
                        }
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        {openModal && 
            <RoleManagementModal 
                closeModal= {closeModal}
                userToEditRole= {userToEditRole} 
                oldRole = {oldRoleOfUserToEdit}
                fetchUsers = {fetchUsers}
                setSuccessMessage = {setSuccessMessage}
                setSuccessOpen = {setSuccessOpen}
            />
        }
        <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} variant="filled" severity="success" sx={{ width: '100%' }}>
                {successMessage}
            </Alert>
        </Snackbar>
    </>
  )
}
