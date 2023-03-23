import { Component } from '@angular/core';
import { faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import { faCoffee, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.scss']
})
export class MyResumeComponent {
  faLaptopFile = faLaptopFile;
  faGraduationCap = faGraduationCap;
}
