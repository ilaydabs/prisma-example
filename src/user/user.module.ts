import { Module } from '@nestjs/common';
import { PostService } from '../post.service';
import { PrismaService } from '../prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, PostService],
})
export class UserModule {}