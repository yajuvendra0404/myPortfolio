import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-brief',
  templateUrl: './my-brief.component.html',
  styleUrls: ['./my-brief.component.scss']
})

export class MyBriefComponent implements OnInit {

  personalInfo:any = [
    { class:"bi bi-calendar-event m-2 ", info:"Date of birth - 04/04/1992" },
    { class:"bi bi-envelope-at m-2 ", info:"Email - yajuvendra0404@gmail.com" },
    { class:"bi bi-telephone m-2 ", info:"Phone - +1(437)9960910" },
    { class:"bi bi-geo-alt m-2 ", info:"Location - Ontario (Canada)" },
  ];
  expertise: any = [
    { class:"bi bi-droplet-half m-2 ", info:"User Experience Development (Ux)" },
    { class:"bi bi-globe m-2 ", info:"Web Developement" },
    { class:"bi bi-braces-asterisk m-2 ", info:"Backend Development" },
  ];

  constructor() {}
  ngOnInit(): void {}
}
