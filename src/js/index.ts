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


 
 

let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllButton");
buttonElement.addEventListener("click", showAllInfos);

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


