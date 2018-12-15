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
            
            let result: string = '<table class="table"><thead class="thead-light"><tr> <th scope="col">Id</th>  <th scope="col">Humidity</th> <th scope="col">Pressure</th> <th scope="col">Temperature</th>  </tr></thead>';
            response.data.forEach((air: IPiResult) => {
                result +='<tbody> <tr> <th scope="row">' + air.id+ '</th> <td>' + air.humidity+ '</td> <td>' + air.pressure + '</td>    <td>' + air.temperature+ '</td> </tr>   </tbody> ';
            });
            result += "</table>";
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


