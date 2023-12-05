import { Column, Entity, ManyToMany,JoinTable, PrimaryGeneratedColumn } from 'typeorm'
import {User} from './user.entity'
import {Permission} from './permission.entity'
@Entity('roles')
export class Role{
    @PrimaryGeneratedColumn({type:'int'})
    id:number
    @Column({length:50,comment:'角色名称'})
    name:string
    @ManyToMany(()=>User,user=>user.roles)
    users:User[];
    @ManyToMany(()=>Permission,permission=>permission.roles)
    @JoinTable({name:'role_permissions'})
    permissions:Permission[]
}