import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getFizzBuzz(count:Number): object {

   let fizzBuzz: Array<any> = [];

   for (let i = 1; i < count; i++) {
      if (i % 15 === 0){
        fizzBuzz.push('FizzBuzz');
      } else if (i % 3 === 0){
        fizzBuzz.push('Fizz');
      } else if (i % 5 === 0) {
        fizzBuzz.push('Buzz');
      } else {
        fizzBuzz.push(i);
      }
    }
    return { countNumber:count, data:fizzBuzz };
  }
}
