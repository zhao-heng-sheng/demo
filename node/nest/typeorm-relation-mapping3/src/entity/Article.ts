import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from './Tag';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number
    @Column({length:100,comment:'标题'})
    title:string
    @Column({type:'text',comment:'内容'})
    content:string
    @JoinTable()
    @ManyToMany(()=>Tag,tag=>tag.articles)
    tags:Tag[]
}
