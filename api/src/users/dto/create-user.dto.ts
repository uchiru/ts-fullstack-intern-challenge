import { MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @MinLength(3, { message: 'Логин должен быть длиннее 3-х символов'})
    @MaxLength(30, { message: 'Логин не должен быть длиннее 30-ти символов'})
    login: string;

    @MinLength(3, { message: 'Пароль должен быть длиннее 3-х символов'})
    @MaxLength(30, { message: 'Пароль не должен быть длиннее 30-ти символов'})
    password: string;
}