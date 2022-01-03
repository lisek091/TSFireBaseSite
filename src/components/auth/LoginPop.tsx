import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./loginPop.css"
import { FormDataTypes } from '../types/formDataTypeLogin';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Oauth from './Oauth';
const LoginPop = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<FormDataTypes>({
        email: "",
        password: ""
    })
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    const { email, password } = formData
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if (userCredential.user) {
                toast.success('Welcome!')
            }
            navigate('/profile')

        } catch (error) {
            toast.error("bad user credentials")
        }


    }
    return (
        <div className="form-popup form-container">
            <form onSubmit={onSubmit}>
                <TextField label="Type in your email" color="primary" type="email" style={{ padding: "5px" }} value={email} onChange={onChange} id="email" />
                <TextField label="Type in your password" color="primary" type="password" style={{ padding: "5px" }} value={password} onChange={onChange} id="password" />
                <Button variant="contained" color="secondary" style={{ padding: "5px", width: "125px" }} type="submit">Sign in</Button>
            </form>
            <Oauth />
        </div>

    )
}

export default LoginPop
