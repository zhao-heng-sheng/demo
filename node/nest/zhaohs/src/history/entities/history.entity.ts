import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'history',
})
export class History {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 200,
    comment: '页面title',
  })
  title: string;
  @Column({ comment: '页面地址' })
  url: string;
  @Column({ length: 255, comment: '页面域名' })
  domain: string;
  @Column({ comment: '端口号' })
  port: number;

  @Column({ length:50,comment: '访问设备' })
  os: string;
  @Column({ length:50,comment: '浏览器类型' })
  browserType: string;

  @Column({ comment: '经度' })
  longitude: number;
  @Column({ comment: '纬度' })
  latitude: number;


  @CreateDateColumn()
  createdAt: Date;
}
