import React, { useState } from "react"
import { Link } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from "@firebase/auth"
import { toast } from "react-toastify"
import { AiOutlineArrowRight } from "react-icons/ai"




const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success("Email was sent")
        } catch (error) {
            toast.error("Could not send reset email")
        }
    }

    return (
        <div>
            <header>
                <p>Forgot password?</p>
            </header>
            <main>
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={onChange}></input>
                    <Link to="/register" >Sign In</Link>
                    <div>
                        Send Reset Link
                        <button type="submit">
                            <AiOutlineArrowRight width="40px" height="40px" />
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default ForgotPassword
