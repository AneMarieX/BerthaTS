import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";
import { IUserMeasurment, IUser, ILocationMeasurment, ILocation, IPiResult } from "./DBInterfaces";


 



let buttonElement4: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllMeasure");
 buttonElement4.addEventListener("click", showAllMeasure);

let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("showAllMeasure");





function showAllMeasure ():void{
    let uri:string ="https://berthawebap20181108065629.azurewebsites.net/Api/UsersMeasurments";
   
    axios.get<IUserMeasurment[]>(uri)
        .then(function (response: AxiosResponse<IUserMeasurment[]>): void {
          
            let result: string = "<ol>";
            response.data.forEach((me: IUserMeasurment) => {
                result += "<li>"+me.locationID+" , "+me.Date+" , "+"User Pulse:"+me.Pulse+","+"User BP:"+me.BloodPressure+","+"User Temp:"+me.Temperature+","+me.location+","+me.user+"</li>" ;
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





  