import { getAuth, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { updateDoc, doc } from '@firebase/firestore'
import { db } from '../../firebase.config'
import { toast } from 'react-toastify'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const Profile = () => {

    const auth = getAuth()
    const [changeDetails, setChangeDetails] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState<any>({
        firstName: auth.currentUser?.displayName,
        email: auth.currentUser?.email
    })
    const { firstName, email } = formData
    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }
    const onSubmit = async () => {
        try {
            if (auth.currentUser?.displayName !== firstName) {
                await updateProfile(auth.currentUser!, {
                    displayName: firstName
                })
                const userRef = doc(db, 'users', auth.currentUser!.uid)
                await updateDoc(userRef, {
                    firstName,
                })
            }
        } catch (error) {
            toast.error("Something went wrong")
        }

    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState: any) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }


    return (
        // do edycji ??
        <Box sx={{ backgroundColor: "#D3D3D3", columnSpan: "all" }}>
            <Grid container spacing={0} justifyContent="center" textAlign="center" >
                <Grid item xs={12} >
                    <div style={{ height: "100px" }} />

                    <Grid item xs={12}>
                        <Button onClick={() => navigate('/')} variant="contained" sx={{ width: "200px", margin: "15px" }}>Back to main page</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={onLogout} variant="contained" sx={{ width: "200px", margin: "15px" }}>Logout</Button>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">{firstName ? firstName + " profile" : "User profile"}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <p >Personal Details. Not much to change here... But it works!</p>

                </Grid>
                <Grid item xs={12} columns={2} >
                    <form>
                        <Grid item xs={6}>
                            <Button sx={{ margin: "15px" }} onClick={() => {
                                changeDetails && onSubmit()
                                setChangeDetails((prevState) => !prevState)
                            }} variant="contained" color={changeDetails ? "success" : "primary"}
                            >{changeDetails ? ' done' : ' change'}</Button>
                        </Grid>
                        <Grid item xs={6} display={"block"}>
                            <div style={{ width: "100%" }}>
                                <TextField id="email" disabled={true} value={email} color="primary" type="email" sx={{ margin: "15px" }} />
                            </div>
                            <div style={{ width: "100%" }}>
                                <TextField id="firstName" disabled={!changeDetails} value={firstName} onChange={onChange} label="Name" color="primary" type="text" />
                            </div>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <div style={{ height: "390px" }} />
        </Box >
    )
}

export default Profile
