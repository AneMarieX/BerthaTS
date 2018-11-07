export interface IUser {

    id: number;
    name: string;
    age:number;
    height:number;
    waight:number;
    pressure: number;
    pulse: number;
    temp : number;
}

export interface ILocationMeasurment {
    id: number;
    LocationID: number;
    AirCondition: string;
    CO2: number;
    NO2: number;
    SO2: number;
    Date: Date;
}

export interface IUserMeasurment {
    id: number;
    UserID: number;
    Date: Date;
    BloodPressure: number;
    Pulse: number;
    Temperature: number;

}

export interface ILocation {
    id: number;
    Location: string;
    Coordinates: string;
}