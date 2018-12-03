import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";
import { IUserMeasurment, IUser, ILocationMeasurment, ILocation, IPiResult } from "./DBInterfaces";


 



let buttonElement2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllLoc");
 buttonElement2.addEventListener("click", showAllLocations);

let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("showAllLocations");





function showAllLocations ():void{
    let uri:string ="https://berthawebap20181108065629.azurewebsites.net/Api/LocationMeasurments";
   
    axios.get<ILocationMeasurment[]>(uri)
        .then(function (response: AxiosResponse<ILocationMeasurment[]>): void {
          
            let result: string = "<ol>";
            response.data.forEach((loc: ILocationMeasurment) => {
                result += "<li>"+"Location Id:"+loc.locationId+" , "+"Air Quality:"+loc.airCondition+" , "+"Location Temperature: "+loc.temperature+" , "+"Location Pressure: "+loc.pressure+" , "+ "Location Humidity: "+loc.humidity+" , "+"Location Name: "+loc.location+" , "+"Date: "+loc.date+ "</li>" ;
            });
            result += "</ol>";
            outputElement.innerHTML = result;
        })
        .catch(function (error: AxiosError): void { 
            if (error.response) {
         
              error;
            } else {
               error;
            }
        });

}





  