import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ length: 50, comment: '用户名' })
  username: string;
  @Column({ length: 50, comment: '密码' })
  password: string;
  @Column({ length: 50, comment: '昵称' })
  nickName: string;
  @Column({ length: 50, comment: '邮箱' })
  email: string;
  @Column({ length: 250, comment: '头像', nullable: true })
  headPic: string;
  @Column({ length: 20, comment: '手机号', nullable: true })
  phoneNumber: string;
  @Column({ comment: '是否冻结', default: false })
  isFrozen: boolean;
  @Column({ comment: '是否管理员', default: false })
  isAdmin: boolean;
  @CreateDateColumn({ comment: '创建时间' })
  createTime: Date;
  @UpdateDateColumn({ comment: '更新时间' })
  update_time: Date;
  @ManyToMany(() => Role,role=>role.users)
  @JoinTable({name:'user_roles'})
  roles: Role[];
}
