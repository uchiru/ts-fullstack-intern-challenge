import { Controller, Get, Post, Body, Put, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { Like } from './likes.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateLikeDto } from './dto/create-like.dto';

@Controller('likes')
export class LikesController {
    constructor(private readonly likesService: LikesService) {}

  //create like
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createLikeDto: CreateLikeDto, @Req() req) {
    return await this.likesService.create(createLikeDto, req.user.id);
  }

  //get user likes
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Req() req) {
    return await this.likesService.findAll(req.user.id)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string, @Req() req){
    return await this.likesService.remove(id, req.user.id)
  }

}
