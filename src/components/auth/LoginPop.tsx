import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./loginPop.css"
import { FormDataTypes } from '../types/formDataTypeLogin';
import React, { useState } from 'react';
const LoginPop = () => {
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
    return (
        <div className="form-popup ">
            <form className="form-container">
                <TextField label="Type in your email" color="primary" type="email" style={{ padding: "5px" }} value={email} onChange={onChange} id="email" />
                <TextField label="Type in your password" color="primary" type="password" style={{ padding: "5px" }} value={password} onChange={onChange} id="password" />
                <Button variant="contained" color="secondary" style={{ padding: "5px", width: "125px" }}>LogIn</Button>
            </form>
        </div>

    )
}

export default LoginPop
