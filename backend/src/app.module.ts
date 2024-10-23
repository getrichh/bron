import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import {PrismaService} from "./modules/prisma/prisma.service";
import { UserModule } from './modules/user/user.module';
import {UserController} from "./modules/user/user.controller";
import {UserService} from "./modules/user/user.service";
import {PrismaController} from "./modules/prisma/prisma.controller";

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [AppController, UserController, PrismaController],
  providers: [AppService,PrismaService, UserService],
})
export class AppModule {}
