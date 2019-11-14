import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "FizzBuzz"', () => {
      let responce = {"countNumber":10,"data":[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz"]};
      expect(appController.getFizzBuzz(10)).toMatchObject(responce);
    });
  });
});
