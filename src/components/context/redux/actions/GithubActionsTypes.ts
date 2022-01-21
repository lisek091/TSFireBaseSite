export const GITHUB_LOADING = "GITHUB_LOADING"
export const GITHUB_SUCCES = "GITHUB_SUCCES"
export const GITHUB_FAIL = "GITHUB_FAIL"

export type UserType = {
    login :string,
    id: number,
    avatar_url:string,
    url:string,
    html_url:string,
    name:string,
    hireable:boolean | null,
    followers:number,
    following:number
}

export type UsersType = {
            id: number,
            login :string,
            avatar_url:string,
            html_url:string,           
}[]

export interface GithubUsersSucces {
type:typeof GITHUB_SUCCES
payload:UsersType
}

export interface GithubSucces {
    type:typeof GITHUB_SUCCES
    payload:UserType
}
export interface GithubFail {
    type:typeof GITHUB_FAIL
    payload:string
}

export interface GithubLoading {
    type:typeof GITHUB_LOADING
}

export type GithubDispatchTypes = GithubFail | GithubLoading | GithubSucces 
export type GithubDispatchUsersTypes = GithubFail | GithubLoading | GithubUsersSucces