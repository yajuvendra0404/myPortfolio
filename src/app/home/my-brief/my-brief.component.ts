import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-brief',
  templateUrl: './my-brief.component.html',
  styleUrls: ['./my-brief.component.scss']
})
export class MyBriefComponent implements OnInit {

  personalInfo:any = [
    { class:"bi bi-calendar-event mt-2", info:"Date of birth - 04/04/1992" },
    { class:"bi bi-envelope-at mt-2", info:"Email - yajuvendra0404@gmail.com" },
    { class:"bi bi-telephone mt-2", info:"Phone - +1(437)9960910" },
    { class:"bi bi-geo-alt mt-2", info:"Date of birth - Ontario (Canada)" },
  ];
  expertise: any = [
    { class:"bi bi-globe mt-2", info:"" },
    { class:"bi bi-envelope-at mt-2", info:"" },
    { class:"bi bi-telephone mt-2", info:"" },
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
