import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import LoginPop from "../auth/LoginPop";
import { useNavigate } from 'react-router-dom'
import { getAuth } from '@firebase/auth';
const Topbar = () => {
    const [logged, setLogged] = useState(false)
    const auth = getAuth()
    useEffect(() => {
        if (auth.currentUser !== null) {
            setLogged(true)
        }
        // eslint-disable-next-line
    }, [])
    const navigate = useNavigate()
    const [search, setSearch] = useState<null | string | React.ChangeEvent<HTMLInputElement>>("")
    const [logTab, setLogTab] = useState(false)
    const onTypeIn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const onLogout = () => {
        auth.signOut()
        setLogged(false)
    }

    return (
        <>
            <Box sx={{ textAlign: "end" }}>
                <AppBar position="relative">
                    <Toolbar>
                        {logged ? <div>
                            <Button variant="contained" color="secondary" sx={{ marginRight: "5px" }} onClick={() => navigate('/profile')}>Profile</Button>
                            <Button variant="contained" color="secondary" sx={{ marginRight: "5px" }} onClick={onLogout}>Log out</Button>
                        </div> : <div>
                            <Button variant="contained" color="secondary" sx={{ marginRight: "5px" }} onClick={() => setLogTab(!logTab)}>Login</Button>
                            <Button variant="contained" color="secondary" sx={{ marginRight: "5px" }} onClick={() => navigate('/register')}>Register</Button>
                        </div>}

                        <div style={{ flexGrow: 1 }}></div>


                        <TextField label="Type in to search" color="secondary" value={search} onChange={onTypeIn} />
                    </Toolbar>
                </AppBar>
            </Box>
            {logTab ? <LoginPop /> : <div></div>}
        </>
    )
}

export default Topbar
