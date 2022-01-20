import { GITHUB_FAIL,GITHUB_LOADING,GITHUB_SUCCES,GithubDispatchTypes } from "./GithubActionsTypes";
import { Dispatch } from "redux";
import axios from 'axios'


export const GetUser = (user:string) => async (dispatch:Dispatch<GithubDispatchTypes>) =>{
    try {
        dispatch({
            type:GITHUB_LOADING
        })
        const response = await axios.get(`${process.env.REACT_APP_GITHUB_URL}/users/${user}`,{
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