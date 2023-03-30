import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-underline-svg',
  templateUrl: './underline-svg.component.html',
  styleUrls: ['./underline-svg.component.scss']
})
export class UnderlineSvgComponent {
  @Input('lineType') lineType: string="";
}
