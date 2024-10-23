import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import {PrismaService} from "../prisma/prisma.service";

@Controller('user')
export class UserController {
  constructor(
      private readonly userService: UserService,
      private readonly prismaService: PrismaService
  ) {}

  @Get('hello')
  getHello():string{
    return 'Hello, world!!';
  }
}
