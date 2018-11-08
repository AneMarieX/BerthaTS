import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";

import {IUser} from "./DBInterfaces";

import * as passhashing from "../../node_modules/password-hash//lib/password-hash"

let allUsers: IUser[];
const uri: string = "http://localhost:44378/api/user";










export function getAllUsers() : IUser[]{
    let localUserVar: IUser[] = null;
    let userData:AxiosResponse<IUser[]>;
    try{
        axios.get<IUser[]>(uri)
        .then(function (response: AxiosResponse<IUser[]>): void {
            localUserVar = response.data;
        });
    }
        catch (error){
            console.log(error)
        }
   
        
    return localUserVar;
}
