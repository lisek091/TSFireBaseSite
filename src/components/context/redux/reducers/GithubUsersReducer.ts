import { GITHUB_SUCCES,GITHUB_FAIL,GITHUB_LOADING,UsersType,GithubDispatchUsersTypes } from "../actions/GithubActionsTypes";
interface DefaultState {
    loading:boolean,
    users?:UsersType
    error?:string

}
const defaultState:DefaultState ={
    loading:false,
    error: "",
    users:[]
}


export const githubUsersReducer = (state:DefaultState=defaultState,action:GithubDispatchUsersTypes):DefaultState =>{
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
                users:action.payload
            }

        default:return state
    }
}