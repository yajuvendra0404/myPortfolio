import { Component, HostListener, OnInit } from '@angular/core';
import { IStrength, IStrengthAnimation } from './home.interface';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  strength: IStrengthAnimation[] = [];
  isheaderVisible: string= "blue";
  constructor(private homeService: HomeService) {
    this.strength = this.homeService.getStrengths();
  }
  onscroll() {
    console.log("yajuvendra scrolling");
  }
  @HostListener('document:scroll') onScrollEvent(){
    // console.log(window.scrollY)
    if(window.scrollY > 150) {
      this.isheaderVisible = "red";
    } else {
      this.isheaderVisible = "green";
    }
  }
  ngOnInit(): void {
  }
}
// E:\Angular-Projects\MyPortfolio\myPortfolio\node_modules\.bin\webpack-bundle-analyzer

