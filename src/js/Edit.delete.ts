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



let buttonDeleteElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deleteButton");




function deleteUser(): void {
    let output: HTMLDivElement = <HTMLDivElement>document.getElementById("contentDelete");
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("deleteInput");
    let name: string = inputElement.value;
    let uri: string = "http://localhost:44378/api/user" + name;
    axios.delete<IUser>(uri)
        .then(function (response: AxiosResponse<IUser>): void {
          
            console.log(JSON.stringify(response));
            output.innerHTML = response.status + " " + response.statusText;
        })
        .catch(function (error: AxiosError): void { 
            if (error.response) {
               
                output.dataset;
            } else {
                output.dataset;
            }
        });
}
