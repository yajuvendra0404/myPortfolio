import { Component, Input, OnInit } from '@angular/core';
import { Images } from '@assets/images';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('headerImg') headerImg: string ="";
  constructor() {
  }

  ngOnInit(): void {
  }

}
