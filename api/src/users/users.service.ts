import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private readonly jwtService: JwtService
      ) {}
    
      //create user

      async create(createUserDto: CreateUserDto) {
        const userExist = await this.usersRepository.findOne({
          where: {
            login: createUserDto.login
          }
        })
        if(userExist) throw new BadRequestException('Пользователь с таким логином уже зарегистрирован')
        
        const user = await this.usersRepository.save({
          login: createUserDto.login,
          password: await argon2.hash(createUserDto.password)
        })

          const token = this.jwtService.sign({ login: createUserDto.login })

          return { user, token }
      }

      // get one user

      async findOne(login: string) {
        return await this.usersRepository.findOne({
          where: { login }
        })
      }

      // get all user

      async findAll() {
        return await this.usersRepository.find();
      }
    
      // update user
      
      // async update(id: number, user: User): Promise<User> {
      //   await this.usersRepository.update(id, user);
      //   return await this.usersRepository.findOne( { where : { id } } );
      // }
}
