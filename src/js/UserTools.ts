import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";

import {IUser} from "./DBInterfaces";

import * as passhashing from "../../node_modules/password-hash/lib/password-hash"
import { GetCookie, CheckCookie } from "./CookiesHandler";


const uri: string = "https://berthawebap20181108065629.azurewebsites.net/api/users";




export async function LogIn(login:string, password:string){
    let localUserVar = await getAllUsers();
    //alert()


}
export async function GetUserByName(name:string): Promise<IUser>{
    let localUserVar = await getAllUsers();
    return localUserVar.filter(x => x.login == name)[0];
}
export function CheckIfLoggedIn():boolean{
    if(CheckCookie("UDIP")){
        return true;
    }else return false;
}
export async function getUserLoggedIn():Promise<IUser>{
    if(CheckIfLoggedIn()){
        let name:string = GetCookie("UDIP");
        let userList:IUser[] = await getAllUsers();
        return userList.filter(x => x.login==name)[0];
    }
}
export async function CheckIfUserExist(name:string): Promise<boolean>{
    let userList:IUser[] = await getAllUsers();
    userList = userList.filter(x => x.login == name);
    if (userList.length>1){
        return true;
    }else return false;
}


export async function  getAllUsers() : Promise<IUser[]>{
    let localUserVar: IUser[];
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
        console.log("getAllUsers method - inside")
   return localUserVar;
}

