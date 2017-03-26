import { Component, Inject } from '@angular/core';
import { NumberGenerator } from './number-generator';
import { NumberOperator } from './number-operator';

@Component({
  selector: 'service-example',
  providers: [NumberOperator, NumberGenerator],
  template: '<h2>The number is {{number}}</h2>'
})
export class ServiceExampleComponent {

  number:Number;

  constructor(@Inject(NumberOperator) public numberService){
    this.number = numberService.getNumber();
  }
}
