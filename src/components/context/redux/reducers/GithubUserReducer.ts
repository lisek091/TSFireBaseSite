import { GITHUB_SUCCES,GITHUB_FAIL,GITHUB_LOADING,UserType,GithubDispatchTypes } from "../actions/GithubActionsTypes";
interface DefaultState {
    loading:boolean,
    user?:UserType
    error?:string

}
const defaultState:DefaultState ={
    loading:false,
    error: "",

}


export const githubUserReducer = (state:DefaultState=defaultState,action:GithubDispatchTypes):DefaultState =>{
    switch(action.type){

        case GITHUB_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case GITHUB_LOADING:
            return{
                ...state,
                loading:true
            }
        case GITHUB_SUCCES:
            return{
                ...state,
                loading:false,
                user:action.payload
            }

        default:return state
    }
}