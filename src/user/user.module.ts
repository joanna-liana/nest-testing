import { Module, ValidationPipe } from '@nestjs/common';
import { UserController } from './user.controller';
import { SampleDependencyService } from '../sample-dependency/sample-dependency.service';
import { SampleDependencyModule } from '../sample-dependency/sample-dependency.module';
import { APP_PIPE, APP_FILTER, BaseExceptionFilter, APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [SampleDependencyModule],
  controllers: [UserController],
  providers: [{
    provide: 'SampleDependency',
    useClass: SampleDependencyService,
  }],
})
export class UserModule {}
