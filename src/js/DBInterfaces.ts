export interface IUser {

    id: number;
    login: string;
    password: string;
    height:number;
    waight:number;
    dateOfBirth:number;
  
}

export interface ILocationMeasurment {
    id: number;
    locationName: string;
    airCondition: string;
    temperature: number;
    pressure: number;
    humidity: number;
    Date: Date;
}

export interface IUserMeasurment {
    id: number;
    UserID: number;
    locationID:number;
    Date: Date;
    BloodPressure: number;
    Pulse: number;
    Temperature: number;

}

export interface ILocation {
    id: number;
    LocationName: string;
    Coordinates: string;
}

export interface IPiResult{

    id: number;
    temperature: number;
    pressure: number;
    humidity:number;
}