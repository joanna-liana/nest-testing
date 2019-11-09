import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';

class TestDependency {}

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
    .overrideProvider('SampleDependency')
    .useClass(TestDependency)
    .compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  // fails when APP_PIPE is not provided in app module
  it('Should not post user without a valid e-mail', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ message: 'zzz' })
      .expect(400)
      .expect(
        `{"statusCode":400,"error":"Bad Request","message":[{"target":{"message":"zzz"},"property":"email","children":[],"constraints":{"isNotEmpty":"email should not be empty","isEmail":"email must be an email"}}]}`,
      );
  });
});
