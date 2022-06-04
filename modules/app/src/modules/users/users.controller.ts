import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { UserRequestDto } from './dto/user-request.dto';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(): Promise<Users> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Users> {
    return this.usersService.findOne(params.id);
  }

  @Post()
  async create(@Body() useResquestDto: UserRequestDto) {
    return this.usersService.save(useResquestDto);
  }

  @Delete(':id')
  async remove(@Param() params): Promise<any> {
    return this.usersService.remove(params.id);
  }
}

