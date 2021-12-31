import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormDataRegisterTypes } from '../types/formDataRegisterTypes';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from '../../firebase.config';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Oauth from '../auth/Oauth';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Register = () => {
    //const Image = require('../assets/RegisterPageBackgrond.jpg')
    const init = db
    const navigate = useNavigate()
    const [formData, setFormData] = useState<FormDataRegisterTypes>({
        email: "",
        password: "",
        firstName: "",
        phoneNumber: "",
        source: "Facebook",
        timestamp: {}
    })
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const handleChange = (e: SelectChangeEvent) => {
        setFormData((prevState) => ({
            ...prevState,
            source: e.target.value as string
        }))
    };

    const { email, password, firstName, phoneNumber, source } = formData
    const OtherOption = () => {
        return (
            <div>
                <TextField label="Source" color="primary" type="text" style={{ padding: "5px" }} />
            </div>
        )
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            if (auth.currentUser)
                updateProfile(auth.currentUser, {
                    displayName: firstName
                })
            const formDataCopy = { ...formData }
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            toast.success("Registration succesfull!")
            navigate("/")
        } catch (error) {
            toast.error("Bad user credentials")
        }
    }
    return (
        // style={{ backgroundImage: `url(${Image})` }}
        // do edycji ??
        <Box sx={{ backgroundColor: "#D3D3D3" }}>
            <Grid container spacing={0} justifyContent="center" textAlign="center" >

                <form onSubmit={onSubmit} >
                    <Grid item xs={12}>
                        <div style={{ height: "100px" }}></div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2"> Required </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" color="primary" type="email" style={{ padding: "5px" }} value={email} onChange={onChange} id="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" color="primary" type="password" style={{ padding: "5px" }} value={password} onChange={onChange} id="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2"> Optional </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Name" color="primary" type="text" style={{ padding: "5px" }} value={firstName} onChange={onChange} id="firstName" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Phone Number" color="primary" type="number" style={{ padding: "5px" }} value={phoneNumber} onChange={onChange} id="phoneNumber" />
                    </Grid>
                    <Grid item xs={12} sx={{ padding: "5px 0px 10px" }}>
                        <InputLabel id="source">Where did you find this site?</InputLabel>
                    </Grid><Grid item xs={12}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="source"
                            value={source}
                            onChange={handleChange}

                        >
                            <MenuItem value={"Facebook"}>Facebook</MenuItem>
                            <MenuItem value={"Github"}>Github</MenuItem>
                            <MenuItem value={"Discord"}>Discord</MenuItem>
                            <MenuItem value={"UpWork"}>UpWork</MenuItem>
                            <MenuItem value={"Linkedin"}>Linkedin</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: "10px 0px 10px" }}>
                        {(source === "Other") ? <OtherOption /> : <div></div>}
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" sx={{ marginRight: "5px" }} type="submit" >Register</Button>
                    </Grid>
                </form>
                <Grid item xs={12}>
                    <Oauth />
                </Grid>
                <Grid item xs={12} sx={{ padding: "15px 0px 10px" }}>
                    <Button variant="contained" color="primary" sx={{ marginRight: "5px" }} onClick={() => { navigate('/') }} >Back to main page</Button>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: "220px" }}></div>
                </Grid>
            </Grid>
        </Box >

    )
}

export default Register
