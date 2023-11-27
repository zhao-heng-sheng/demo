import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Role } from './role.entity'
@Entity('permissions')
export class Premission{
    @PrimaryGeneratedColumn({type:'int'})
    id:number
    @Column({length:20,comment:'权限代码'})
    code:string
    @Column({length:100,comment:'权限描述'})
    description:string
    @ManyToMany(()=>Role,role=>role.permissions)

    roles:Role[]
}