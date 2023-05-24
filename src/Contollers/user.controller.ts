import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Users } from '../Models/users.model';
import { UserService } from '../Services/users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async obterTodos(): Promise<Users[]> {
    return this.userService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Users> {
    return this.userService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() postagem: Users) {
    this.userService.criar(postagem);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.userService.apagar(params.id);
  }
}
