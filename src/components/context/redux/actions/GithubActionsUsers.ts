import { GITHUB_FAIL,GITHUB_LOADING,GITHUB_SUCCES,GithubDispatchUsersTypes } from "./GithubActionsTypes";
import { Dispatch } from "redux";
import axios from 'axios'


export const GetUsers = (users:string) => async (dispatch:Dispatch<GithubDispatchUsersTypes>) =>{
    let qerry=""
    if(users===""){
        qerry=`/users`
    }
    else{
        qerry=`/users/${users}`
    }
    try {
        dispatch({
            type:GITHUB_LOADING
        })
        const response = await axios.get(`${process.env.REACT_APP_GITHUB_URL}${qerry}`,{
            headers:{
                Authorization : `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
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