import { GITHUB_FAIL,GITHUB_LOADING,GITHUB_SUCCES,GithubDispatchTypes } from "./GithubActionsTypes";
import { Dispatch } from "redux";
import axios from 'axios'


export const GetUser = (user:string) => async (dispatch:Dispatch<GithubDispatchTypes>) =>{
    const github = "https://api.github.com"
    try {
        dispatch({
            type:GITHUB_LOADING
        })
        const response = await axios.get(`${github}/users/${user}`,)
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

/*


*/