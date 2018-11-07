import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";

interface IUser {

    id: number;
    name: string;
    age:number;
    height:number;
    waight:number;
    pressure: number;
    pulse: number;
    temp : number;
}

interface IAir{
    quality : string;
    CO: number;
    NO2: number;
    SO2: number;


}

interface ILoc{
    name: string;
    longitude : number;
    latitude : number;
}


 
 

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
    axios.get<IAir[]>(uri)
        .then(function (response: AxiosResponse<IAir[]>): void {
          
            let result: string = "<ol>";
            response.data.forEach((air: IAir) => {
                result += "<li>" + air.quality + " " + air.CO + "</li>" + air.NO2 + air.SO2;
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
    axios.get<ILoc[]>(uri)
        .then(function (response: AxiosResponse<ILoc[]>): void {
          
            let result: string = "<ol>";
            response.data.forEach((loc: ILoc) => {
                result += "<li>" + loc.name+ loc.latitude + " " + loc.longitude + "</li>" ;
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
    let uri:string ="http://localhost:44378/api/users";
    const newLocal = outputElement.innerHTML;
   
}
