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
const Register = () => {
    const init = db
    const navigate = useNavigate()
    const [formData, setFormData] = useState<FormDataRegisterTypes>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
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
    const { email, password, firstName, lastName, source } = formData
    const OtherOption = () => {
        return (
            <div>
                <input placeholder="Type in the source" ></input>
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

            alert("Succes")
            navigate("/")
        } catch (error) {
            toast.error("Bad user credentials")
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextField label="Type in your email" color="primary" type="email" style={{ padding: "5px" }} value={email} onChange={onChange} id="email" />
                <TextField label="Type in your password" color="primary" type="password" style={{ padding: "5px" }} value={password} onChange={onChange} id="password" />
                <Typography variant="subtitle2"> Optionall </Typography>
                <TextField label="First name" color="primary" type="text" style={{ padding: "5px" }} value={firstName} onChange={onChange} id="firstName" />
                <TextField label="Last name" color="primary" type="text" style={{ padding: "5px" }} value={lastName} onChange={onChange} id="lastName" />
                <InputLabel id="source">Where did you find this site?</InputLabel>
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
                {(source === "Other") ? <OtherOption /> : <div></div>}
                <Button variant="contained" color="secondary" sx={{ marginRight: "5px" }} type="submit" >Register</Button>
            </form>
        </div>

    )
}

export default Register
