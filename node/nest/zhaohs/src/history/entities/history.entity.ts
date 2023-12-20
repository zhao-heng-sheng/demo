import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'history',
})
export class History {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 300,
    comment: '页面名',
  })
  title: string;
  @Column({ comment: '页面地址' })
  url: string;
  @Column({ comment: '访问设备' })
  equipment: string;
  @Column({ length: 255, comment: '页面域名' })
  domain: string;
  @Column({length:65535,comment:'端口号'})
  port:number;
  @CreateDateColumn()
  createdAt: Date;
}
