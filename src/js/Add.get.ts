import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";
import { IUserMeasurment, IUser, ILocationMeasurment, ILocation } from "./DBInterfaces";


 

let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllButton");
buttonElement.addEventListener("click", showAllInfos);

let buttonElement1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllButton");
buttonElement1.addEventListener("click", showAllAir);

let buttonElement2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllButton");
buttonElement2.addEventListener("click", showAllLocations);

let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

let buttonDeleteElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deleteButton");


function showAllInfos(): void {
    let uri: string = "http://localhost:44378/api/user";
    const newLocal = outputElement.innerHTML;
    axios.get<IUser[]>(uri)
        .then(function (response: AxiosResponse<IUser[]>): void {
          
            let result: string = "<ol>";
            response.data.forEach((user: IUser) => {
                result += "<li>" + user.pressure + " " + user.pulse + "</li>" + user.temp;
            });
            result += "</ol>";
         
        })
        // .catch(function (error: AxiosError): void { 
        //     if (error.response) {
         
        //         newLocal = error;
        //     } else {
        //         outputElement.innerHTML = error;
        //     }
        // });
}

function showAllAir ():void{
    let uri:string ="http://localhost:44378/api/airlog";
    const newLocal = outputElement.innerHTML;
    axios.get<ILocationMeasurment[]>(uri)
        .then(function (response: AxiosResponse<ILocationMeasurment[]>): void {
          
            let result: string = "<ol>";
            response.data.forEach((air: ILocationMeasurment) => {
                result += "<li>" + air.id + " " + air.locationName + "</li>" + air.airCondition + air.temperature + air.pressure + air.humidity + air.Date;
            });
            result += "</ol>";
         
        })
        .catch(function (error: AxiosError): void { 
            if (error.response) {
         
              error;
            } else {
               error;
            }
        });

}
function showAllLocations ():void{
    let uri:string ="http://localhost:44378/api/locations";
    const newLocal = outputElement.innerHTML;
    axios.get<ILocation[]>(uri)
        .then(function (response: AxiosResponse<ILocation[]>): void {
          
            let result: string = "<ol>";
            response.data.forEach((loc: ILocation) => {
                result += "<li>" + loc.LocationName+ loc.LocationName + " " + loc.Coordinates + "</li>" ;
            });
            result += "</ol>";
         
        })
        .catch(function (error: AxiosError): void { 
            if (error.response) {
         
              error;
            } else {
               error;
            }
        });

}

function showAllUsers ():void{
    let uri:string ="http://localhost:44378/api/userInfo";
    const newLocal = outputElement.innerHTML;
   
}
function addUser(): void {
    let addPresureElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addPresure");
    let addPulseElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addPulse");
    let addTempElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addTemp");
    let addLocationElement: HTMLInputElement = <HTMLInputElement>document.getElementById("addLocation");
    let myPresure: number =  Number(addPresureElement.value);
    let myPulse: number =  Number(addPulseElement.value);
    let myTemp: number = Number(addTempElement.value);
    let myLoc: number = Number(addLocationElement.value);

    let uri: string = "http://localhost:44378/api/userInfo";
    axios.post<IUser>(uri, { pulse: myPulse, pressure: myPresure, temp: myTemp, location: myLoc })
        .then((response: AxiosResponse) => { console.log("response " + response.status + " " + response.statusText); })
        .catch((error: AxiosError) => { console.log(error); });
}