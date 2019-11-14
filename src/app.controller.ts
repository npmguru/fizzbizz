import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/v1/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('findByFizzBuzz/:count')
  getFizzBuzz(@Param('count') count: number): object {
    if(isNaN(count) === true){
      return {countNumber : count, message : 'Invalid Number!!'}
    }
    return this.appService.getFizzBuzz(count);
  }
}
