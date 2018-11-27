import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";
import { IUserMeasurment, IUser, ILocationMeasurment, ILocation, IPiResult } from "./DBInterfaces";


 

let buttonElement1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllUsers");
buttonElement1.addEventListener("click", showAllUsers);





let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("showAllUsers");

let buttonDeleteElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deleteButton");


function showAllUsers(): void {
    let uri: string = "https://berthawebap20181108065629.azurewebsites.net/Api/Users";
   
    axios.get<IUser[]>(uri)
        .then(function (response: AxiosResponse<IUser[]>): void {
          
            let result: string = "<ol>";
            response.data.forEach((user: IUser) => {
                result += "<li>" + user.id + " " + user.login  +user.password +user.dateOfBirth+user.height+user.waight+"</li>" ;
            });
            result += "</ol>";
         outputElement.innerHTML= result;
         
        })
        .catch(function (error: AxiosError): void { 
            if (error.response) {
         
                 error;
            } else {
                 error;
            }
        });
}






// function addUser(): void {
//     let addPresureElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addPresure");
//     let addPulseElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addPulse");
//     let addTempElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addTemp");
//     let addLocationElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addLocation");
//     let myPresure: number =  Number(addPresureElement.value);
//     let myPulse: number =  Number(addPulseElement.value);
//     let myTemp: number = Number(addTempElement.value);
//     let myLoc: number = Number(addLocationElement.value);

//     let uri: string = "https://berthawebap20181108065629.azurewebsites.net/Api/Users";
//     axios.post<IUser>(uri, { pulse: myPulse, pressure: myPresure, temp: myTemp, location: myLoc })
//         .then((response: AxiosResponse) => { console.log("response " + response.status + " " + response.statusText); })
//         .catch((error: AxiosError) => { console.log(error); });
// }