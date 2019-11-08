import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { SampleDependencyService } from '../sample-dependency/sample-dependency.service';

@Controller('users')
export class UserController {
  constructor(@Inject('SampleDependency') private readonly sampleDependency: SampleDependencyService) {}

  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
    return;
  }
}
