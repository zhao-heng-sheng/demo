import { Column, Entity, ManyToMany,JoinTable, PrimaryGeneratedColumn } from 'typeorm'
import {User} from './user.entity'
import {Premission} from './permission.entity'
@Entity('roles')
export class Role{
    @PrimaryGeneratedColumn({type:'int'})
    id:number
    @Column({length:50,comment:'角色名称'})
    name:string
    @ManyToMany(()=>User,user=>user.roles)
    users:User[];
    @ManyToMany(()=>Premission,permission=>permission.roles)
    @JoinTable({name:'role_permissions'})
    permissions:Premission[]
}