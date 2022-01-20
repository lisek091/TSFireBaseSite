import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../context/redux/store"
import { GetUser } from "../context/redux/actions/GithubActions"
import { GetUsers } from "../context/redux/actions/GithubActionsUsers"
import { useEffect, useState } from "react"
import Topbar from "../layout/Topbar"
import '../layout/layout.css'
import UsersList from "../layout/github/UsersList"

const Github = () => {

    const dispatch = useDispatch()
    const [userName, setUserName] = useState("lisek091")
    const userState = useSelector((state: RootState) => state.githubUserReducer)
    const [usersName, setUsersName] = useState("")
    const usersState = useSelector((state: RootState) => state.githubUsersReducer)
    useEffect(() => {
        dispatch(GetUsers(usersName))
    }, [])
    console.log(usersState)
    if (!usersState.users) {
        return (<div>
            ...loading
        </div>)
    }
    else {
        return (
            <div className='bg-global' style={{ height: "100vh" }}>
                <Topbar />
                <div>{usersState.users.map((user) => (<div>{user.login}</div>))}</div>
            </div>
        )
    }
}

export default Github
