import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LikesModule } from './likes/likes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'cat-pinterest-api-pg',
    port: 5432,
    username: 'postgres',
    password: '1',
    database: 'support_lk_db',
    entities: [],
    synchronize: true,
    autoLoadEntities:true,
  }),
    UsersModule,
    LikesModule,
    AuthModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
