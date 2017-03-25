import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
  selector: 'bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings-component.css']
})
export class BindingsComponent {
  isRed:boolean = true;
  text:string = 'Text';
}
