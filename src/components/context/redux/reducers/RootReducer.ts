import {combineReducers} from "redux";
import { githubUserReducer } from "./GithubUserReducer";
import { githubUsersReducer } from "./GithubUsersReducer";
const RootReducer = combineReducers({
    githubUserReducer,
    githubUsersReducer
});

export default RootReducer