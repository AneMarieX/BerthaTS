import {IUser} from "./DBInterfaces"
import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";


    export function CreateCookie(name: string, value: string, expiration: number):void {
        var d = new Date();
        d.setTime(d.getTime() + (expiration*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    export function CheckCookie():boolean {
        var username = this.GetCookie("UPSID");
        if (username != "") {
           return true;
        } else {
            return false;
        }
    }

    export function DeleteCookie(name:string){
        document.cookie = "UPSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    export function GetCookie(cname:string) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
