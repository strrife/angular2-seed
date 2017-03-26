import { Component } from '@angular/core';

@Component({
  selector: 'bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings-component.css']
})
export class BindingsComponent {
  isRed:boolean = true;
  text:string = 'Text';
}
