import { IsNotEmpty, isString } from "class-validator";

export class  LoginDto{
    @IsNotEmpty()
    username:string;
    @IsNotEmpty()
    password:string;
}