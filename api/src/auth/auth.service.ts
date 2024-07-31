import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { UserInterface } from 'src/types/types';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(login: string, password: string) {
        const user = await this.usersService.findOne(login);
        const passwordIsMatch = await argon2.verify(user.password, password);
        if (user && passwordIsMatch) {
          return user;
        }

        throw new UnauthorizedException('Неправильный логин или пароль')
    }


    async login(user: UserInterface) {
        const { id, login } = user;
        return {
          id, login, token: this.jwtService.sign({ id: user.id, login: user.login })
        };
      }

    create(createAuthDto: CreateAuthDto) {
        return 'New auth'
    }

    findAll() {
        return 'All'
    }

    findOne(id: number) {
        return 'One'
    }

    update(id:number, updateAuthDto: UpdateAuthDto){

    }

}
