import { rolInterface } from "./rol.interface";

export interface UserInterface{
    id:string;
    name:string;
    age:number;
    rols:rolInterface[];
}