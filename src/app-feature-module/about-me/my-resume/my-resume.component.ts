import { Component } from '@angular/core';
import { faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import { faCoffee, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { IResumeDetails } from '@aboutMe/about-me-interfaces';
@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.scss']
})
export class MyResumeComponent {
  faLaptopFile = faLaptopFile;
  faGraduationCap = faGraduationCap;
  qualificationDetails: IResumeDetails[] = [];
  experienceDetails: IResumeDetails[] = [];
  constructor (){
    this.qualificationDetails = [
      {
        year:"2010 - 2014",
        organisationName:"Rajiv Gandhi Technical University",
        courseType:"Bachelor's Of Engineering",
        course:"Computer Sience",
        content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      },{
        year:"2021 - 2022",
        organisationName:"Conestoga College",
        courseType:"Post Graduation",
        course:"Web Development",
        content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      }
    ]
    this.experienceDetails = [
      {
        year:"2016 - 2017",
        organisationName:"Innoeye Technologies",
        role:"Software Developer",
        content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      },
      {
        year:"2018 - 2021",
        organisationName:"Reliance Jio Infocomm",
        role:"Software Developer",
        content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      }
    ]
  }

}
