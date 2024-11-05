// user.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get('users-list')
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Post('create-user')
  create(@Body() user: User): User {
    return this.userService.create(user);
  }

  @Get('/')
  getHello(): string {
    return this.userService.getHello();
  }
}
