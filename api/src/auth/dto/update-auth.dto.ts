import { MaxLength, MinLength } from "class-validator";
import { Like } from "src/likes/likes.model";

export class UpdateAuthDto {

    likes: Like[];
}