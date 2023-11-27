import { Inject, Injectable } from '@nestjs/common';
import {RedisClientType} from 'redis';
@Injectable()
export class RedisService {
    @Inject('REDIS_CLIENT') private RedisClient:RedisClientType;

    async get(key:string){
        return await this.RedisClient.get(key);
    }
    async set(key:string,value:string|number,ttl?:number){
        await this.RedisClient.set(key,value);
        if(ttl){
            await this.RedisClient.expire(key,ttl);
        }
    }
}
