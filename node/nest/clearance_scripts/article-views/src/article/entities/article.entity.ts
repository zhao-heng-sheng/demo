import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({comment: '文章标题'})
  title: string;

  @Column({comment: '文章内容'})
  content: string;

  @Column({comment:'阅读量',default:0})
  viewCount: number;

  @Column({comment: '点赞数',default:0})
  likeCount: number;

  @Column({comment: '收藏数',default:0})
  collectCount: number;
}
