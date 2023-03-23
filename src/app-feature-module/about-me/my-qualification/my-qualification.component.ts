import { Component } from '@angular/core';
import { faCoffee, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-my-qualification',
  templateUrl: './my-qualification.component.html',
  styleUrls: ['./my-qualification.component.scss']
})
export class MyQualificationComponent {
  faGraduationCap = faGraduationCap;
}
