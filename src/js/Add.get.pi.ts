import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";
import { IUserMeasurment, IUser, ILocationMeasurment, ILocation, IPiResult } from "./DBInterfaces";



 let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllAir");
 buttonElement.addEventListener("click", ShowAllAir);



let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("ShowAllAir");




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


