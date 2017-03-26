import { Injectable, Inject } from '@angular/core';
import { NumberGenerator } from './number-generator';

@Injectable()
export class NumberOperator {

  counter : number = 0;

  constructor(@Inject(NumberGenerator) private generator) { }

  getNumber(){
    return this.generator.getNumber() + this.counter++;
  }
}
