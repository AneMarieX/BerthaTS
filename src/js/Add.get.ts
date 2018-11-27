import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";
import { IUserMeasurment, IUser, ILocationMeasurment, ILocation, IPiResult } from "./DBInterfaces";


 

let buttonElement1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllUsers");
buttonElement1.addEventListener("click", showAllUsers);

let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllAir");
buttonElement.addEventListener("click", ShowAllAir);

// let buttonElement2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ggetAllLoc");
// buttonElement2.addEventListener("click", showAllLocations);

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

function ShowAllAir ():void{
    let uri:string ="https://berthawebap20181108065629.azurewebsites.net/Api/PiResults";
   
    axios.get<IPiResult[]>(uri)
        .then(function (response: AxiosResponse<IPiResult[]>): void {
           
            let result: string = "<ol>";
            response.data.forEach((air: IPiResult) => {
                result += "<li>" + air.id + " " + air.temperature + air.pressure  + air.humidity + "</li>";
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
// function showAllLocations ():void{
//     let uri:string ="https://berthawebap20181108065629.azurewebsites.net/Api/LocationMeasurments";
//     const newLocal = outputElement.innerHTML;
//     axios.get<ILocation[]>(uri)
//         .then(function (response: AxiosResponse<ILocation[]>): void {
          
//             let result: string = "<ol>";
//             response.data.forEach((loc: ILocation) => {
//                 result += "<li>" + loc.LocationName+ loc.LocationName + " " + loc.Coordinates + "</li>" ;
//             });
//             result += "</ol>";
//             outputElement.innerHTML = result;
//         })
//         .catch(function (error: AxiosError): void { 
//             if (error.response) {
         
//               error;
//             } else {
//                error;
//             }
//         });

// }


function addUser(): void {
    let addPresureElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addPresure");
    let addPulseElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addPulse");
    let addTempElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addTemp");
    let addLocationElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addLocation");
    let myPresure: number =  Number(addPresureElement.value);
    let myPulse: number =  Number(addPulseElement.value);
    let myTemp: number = Number(addTempElement.value);
    let myLoc: number = Number(addLocationElement.value);

    let uri: string = "https://berthawebap20181108065629.azurewebsites.net/Api/Users";
    axios.post<IUser>(uri, { pulse: myPulse, pressure: myPresure, temp: myTemp, location: myLoc })
        .then((response: AxiosResponse) => { console.log("response " + response.status + " " + response.statusText); })
        .catch((error: AxiosError) => { console.log(error); });
}