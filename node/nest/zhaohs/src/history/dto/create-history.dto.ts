import {IsNotEmpty, IsNumber, IsPort, IsString} from 'class-validator'
export class CreateHistoryDto {
  title?:string;
  @IsNotEmpty({
    message:'url不能为空'
  })
  @IsString()
  url:string;
  @IsNotEmpty({
    message:'域名不能为空'
  })
  @IsString()
  domain:string;
  port?:number;
  os?:string;
  browserType?:string;
  longitude?:number;
  latitude?:number;
}
