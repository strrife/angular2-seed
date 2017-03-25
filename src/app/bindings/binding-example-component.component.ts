import {Component, Input} from '@angular/core';

@Component({
  selector: 'binding-example-component',
  templateUrl: './binding-example-component.component.html'
})
export class BindingExampleComponent {
  @Input() text : string;
}
