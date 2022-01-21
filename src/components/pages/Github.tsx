import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../context/redux/store"
import { GetUser } from "../context/redux/actions/GithubActions"
import { useEffect, useState } from "react"
import Topbar from "../layout/Topbar"
import '../layout/layout.css'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Spinner from "../layout/github/Spinner"
import Typography from '@mui/material/Typography';
import { toast } from "react-toastify"
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "20px"
}));


const Github = () => {

    const dispatch = useDispatch()
    const userState = useSelector((state: RootState) => state.githubUserReducer)
    const [userName, setUsersName] = useState("lisek091")
    if (userState.loading || userState.user === undefined) {
        if (userState.error) {
            toast.error(userState.error)
        }
    }
    useEffect(() => {
        dispatch(GetUser(userName))
    }, [])
    return (
        <div className='bg-global' style={{ height: "100vh" }}>
            <Topbar />
            {userState.user ?
                <div style={{ alignItems: "center", justifyContent: "center" }}>
                    <div style={{ height: '200px' }} />
                    <Item sx={{ maxWidth: "80%" }}>
                        <img src={userState.user.avatar_url} alt={userState.user.login} style={{ maxHeight: "150px", maxWidth: "150px", borderRadius: "40px" }}></img>
                        <Button variant="contained" color="info" onClick={() => { window.open('https://github.com/lisek091/TSFireBaseSite', 'target_blank') }}>Go to Github</Button>
                        <Typography color="aquamarine">Work in slow progres but redux is fine...</Typography>
                    </Item>
                </div>



                :
                <Spinner />}
        </div>

    )
}


export default Github

/*
{usersState.users && <div>
                <div style={{ height: "10px" }} />
                <Box sx={{ flexGrow: 1, marginLeft: "5px" }}>
                    <Grid container spacing={2}>
                        {usersState.users.map((user) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={user.id}>
                                <Item sx={{ maxWidth: "90%" }}>
                                    <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                        <div>
                                            <img src={user.avatar_url} alt={user.login} style={{ maxHeight: "70px", maxWidth: "70px", borderRadius: "10px" }}></img>
                                        </div>
                                        <div>
                                            <Button variant="contained" color="info" sx={{ marginLeft: "10px" }}>{user.login}</Button>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Visit profile
                                            </Typography>
                                        </div>

                                    </div>
                                </Item>
                            </Grid>))}
                    </Grid>
                </Box>
                <div style={{ height: "50px" }} />
            </div>}


        </div >

 */