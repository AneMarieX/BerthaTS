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
    let uri: string = "https://berthawebap20181108065629.azurewebsites.net/Api/Users" + name;
    axios.delete(uri)
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


function deleteLocation(): void {
    let output: HTMLDivElement = <HTMLDivElement>document.getElementById("contentDelete");
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("deleteInput");
    let name: string = inputElement.value;
    let uri: string = "https://berthawebap20181108065629.azurewebsites.net/Api/Locations" + name;
    axios.delete(uri)
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

function deleteResult(): void {
    let output: HTMLDivElement = <HTMLDivElement>document.getElementById("contentDelete");
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("deleteInput");
    let name: string = inputElement.value;
    let uri: string = "https://berthawebap20181108065629.azurewebsites.net/Api/PiResults" + name;
    axios.delete(uri)
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