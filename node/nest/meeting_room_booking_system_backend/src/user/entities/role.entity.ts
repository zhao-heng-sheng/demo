import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity('roles')
export class Role{
    @PrimaryGeneratedColumn({type:'int'})
    id:number
    @Column({length:50,comment:'角色名称'})
    name:string 
}