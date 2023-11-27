
import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity({
    name:'t_aaa'
})
export class Aaa{
    @PrimaryGeneratedColumn('uuid',{
        comment:'这是id',
    })
    id:string

    @Column({
        name:'a_aa',
        type:'text',
        comment:'这是aaa'
    })
    aaa:string

    @Column({
        unique:true,
        nullable:false,
        length:10,
        type:'varchar',
        default:'bbb'
    })
    bbb:string

    @Column('double')
    ccc:number

}