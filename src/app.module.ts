import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from './user/user.module';


@Module({
  imports: [UserModule, PrismaModule.forRoot()],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
