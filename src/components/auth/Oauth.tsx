import { useLocation, useNavigate } from "react-router"
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../../firebase.config"
import { toast } from "react-toastify"
import '../layout/layout.css'
const Oauth = () => {
    const { default: googleIcon } = require('../assets/googleIcon.svg') as { default: string };
    const navigate = useNavigate()
    const location = useLocation()
    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            //check for user
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            //make if not
            if (!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    firstName: user.displayName,
                    phoneNumber: user.phoneNumber,
                    source: "GoogleLog",
                    timestamp: serverTimestamp()
                })
            }
            navigate('/profile')
        } catch (error) {
            toast.error("Could not authorize with Google")
        }
    }
    return (
        <div>
            <p>Sign {location.pathname === '/register' ? "Up" : "In"} with </p>
            <button onClick={onGoogleClick} style={{ border: 0, background: "none" }} className="googleClass">
                <img src={googleIcon} width="40px" height="40px" alt="Google icon" />
            </button>
        </div>
    )
}

export default Oauth
