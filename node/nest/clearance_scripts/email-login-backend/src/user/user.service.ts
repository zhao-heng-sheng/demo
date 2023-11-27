import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import {User} from './entities/user.entity'

@Injectable()
export class UserService {
  @InjectEntityManager()
  private entityManager:EntityManager

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findUserByEmail(email: string) {
    return await this.entityManager.findOneBy(User,{
      email
    })
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
