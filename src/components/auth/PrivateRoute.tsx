import { Navigate, Outlet } from "react-router"
import { useAuthStatus } from "../../hooks/useAuthStatus"

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()
    if (checkingStatus) {
        return <h3>Loading...</h3>
    }
    return (
        loggedIn ? <Outlet /> : <Navigate to='/register' />
    )
}

export default PrivateRoute
