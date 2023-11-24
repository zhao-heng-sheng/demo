import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import {User} from './user.entity'
@Entity('roles')
export class Role{
    @PrimaryGeneratedColumn({type:'int'})
    id:number
    @Column({length:50,comment:'角色名称'})
    name:string
    @ManyToMany(()=>User,user=>user.roles)
    users:User[];
}