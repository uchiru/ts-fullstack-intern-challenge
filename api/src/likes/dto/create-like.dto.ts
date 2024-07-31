import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateLikeDto {
    @IsNotEmpty()
    cat_id: string;

    @IsNotEmpty()
    url: string
}