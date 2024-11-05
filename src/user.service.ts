// user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  create(user: User): User {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  getHello(): string {

    return "Hello World!";
  }
}
