import { Module, ValidationPipe } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [UserModule],
  controllers: [],
  // providers: [{
  //   provide: APP_PIPE,
  //   useClass: ValidationPipe,
  // }],
})
export class AppModule {}
