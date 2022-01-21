import { GITHUB_FAIL,GITHUB_LOADING,GITHUB_SUCCES,GithubDispatchUsersTypes } from "./GithubActionsTypes";
import { Dispatch } from "redux";
import axios from 'axios'


export const GetUsers = (users:string) => async (dispatch:Dispatch<GithubDispatchUsersTypes>) =>{
    const github = "https://api.github.com"

    const params = new URLSearchParams ({
        q:users
    })
    try {
        dispatch({
            type:GITHUB_LOADING
        })
        const response = await axios.get(`${github}/search/users?${params}`,)
        dispatch({
            type:GITHUB_SUCCES,
            payload:response.data
        })
    } catch (error) {
        if(error){
            let e:any = error
            dispatch({
                type:GITHUB_FAIL,
                payload: e.message
            })
        }
    }
}