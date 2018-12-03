export interface IUser {

    id: number;
    login: string;
    password: string;
    height:number;
    weight:number;
    dateOfBirth:number;
    UserMeasurement:IUserMeasurment;
  
}

export interface ILocationMeasurment {
    
    locationId: number;
    airCondition:string;
    temperature: any;
    pressure: any;
    humidity:any;
    location:string;
    date: number;
   
}

export interface IUserMeasurment {
    
    UserID: number;
    locationID:number;
    Date: number;
    BloodPressure: number;
    Pulse: number;
    Temperature: number;
    location:string;
    user:string;

}

export interface ILocation {
    id: number;
    LocationName: string;
    Coordinates: string;
}

export interface IPiResult{

    id: number;
    temperature: string;
    pressure: string;
    humidity:string;
    location:string;
    date: number;
}