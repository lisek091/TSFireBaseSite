import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import LoginPop from "../auth/LoginPop";
import { useNavigate, useLocation } from 'react-router-dom'
import { getAuth } from '@firebase/auth';
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../context/redux/store"
import { GetUsers } from "../context/redux/actions/GithubActionsUsers"
import { toast } from 'react-toastify';
const Topbar = () => {
    const dispatch = useDispatch()
    const usersState = useSelector((state: RootState) => state.githubUsersReducer)
    const [logged, setLogged] = useState(false)
    const auth = getAuth()
    const location = useLocation()
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
        toast.info("Loged out")
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(GetUsers(search as string))
        toast.info("Only in console for now")
        console.log(usersState)
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
                        <form onSubmit={onSubmit}>
                            {(location.pathname === '/github') ? <TextField label="Search on Github" color="secondary" value={search} onChange={onTypeIn} /> : <div></div>}
                        </form>

                    </Toolbar>
                </AppBar>
            </Box>
            {logTab ? <LoginPop /> : <div></div>}
        </>
    )
}

export default Topbar
