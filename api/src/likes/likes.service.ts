import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './likes.model';
import { CreateLikeDto } from './dto/create-like.dto';

@Injectable()
export class LikesService {
        constructor(
        @InjectRepository(Like)
        private readonly likesRepository: Repository<Like>,
      ) {}

      async create(createLikeDto: CreateLikeDto, id: number) {
        const isExist = await this.likesRepository.findBy({
          user_id: id,
          cat_id: createLikeDto.cat_id
        })
        
        if(isExist.length) throw new BadRequestException('Попытка поставить лайк дважды');

        const newLike = {
          cat_id: createLikeDto.cat_id,
          url: createLikeDto.url,
          user_id: id
        }

        return await this.likesRepository.save(newLike);
      }

      async findAll(id: number) {
        return this.likesRepository.find({
          where: {
            user_id: id
          }
        })
      }
      
      async remove(cat_id: string, user_id: number) {
        return await this.likesRepository.delete({
          user_id,
          cat_id
        })
      }
}
