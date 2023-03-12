import { Component, Input, OnInit } from '@angular/core';
import { IStrength, IStrengthAnimation } from '../home.interface';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss']
})
export class StrengthComponent implements OnInit {
  @Input("strengths") strengths: IStrengthAnimation[] = []
  constructor() {

   }

  ngOnInit(): void {
    console.log("strength ---", this.strengths)
  }

}
