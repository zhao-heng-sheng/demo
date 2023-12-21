import {IsNotEmpty, IsNumber, IsString} from 'class-validator'
export class CreateHistoryDto {
  @IsString()
  title:string;
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
  @IsNumber()
  port:number;
  os:string;
  browserType:string;
  @IsNumber()
  longitude:number;
  @IsNumber()
  latitude:number;
}
