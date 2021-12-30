import { FirebaseApp } from '@firebase/app'
import { getAuth, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { updateDoc, doc } from '@firebase/firestore'
import { db } from '../../firebase.config'
import { toast } from 'react-toastify'

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
        <div>
            <header>
                <p>My profile</p>
                <button type="button" onClick={onLogout}>Logout</button>
            </header>
            <main>
                <div>
                    <p onClick={() => {
                        changeDetails && onSubmit()
                        setChangeDetails((prevState) => !prevState)
                    }}>Personal Details. Not much to change here... But it works!
                        {changeDetails ? ' done' : ' change'}
                    </p>
                </div>
                <div>
                    <form>
                        <input type="text" id="email" disabled={true} value={email} />
                        <input type="text" id="firstName" disabled={!changeDetails} value={firstName} onChange={onChange} />

                    </form>
                </div>
            </main>
        </div>
    )
}

export default Profile
