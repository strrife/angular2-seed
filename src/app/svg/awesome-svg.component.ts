import {Component, Input} from '@angular/core';

@Component({
  selector: 'awesome-svg',
  templateUrl: './awesome-svg.component.html'
})
export class AwesomeSvgComponent {
  @Input() title : string;
  @Input() colors : string[] = [];
}
