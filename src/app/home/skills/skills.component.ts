import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';
import { IMultiSelectOption, IMultiSelectSettings } from 'ngx-bootstrap-multiselect';
import { HomeService } from '../home.service';
import { forEach, pick } from 'lodash';
import { ISkills } from '../home.interface';


highcharts3D(Highcharts);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  chartOptions: Highcharts.Options;
  optionsModel: number[] = [1, 2, 3, 4 ];
  myOptions: IMultiSelectOption[];
  highcharts: typeof Highcharts = Highcharts;
  mySettings: IMultiSelectSettings = {
    enableSearch: false,
    buttonClasses: 'btn btn-outline-secondary btn-block',
    dynamicTitleMaxItems: 1,
    displayAllSelectedText: true
};
  intializeHighchart() {
     return {
      chart: {
         renderTo: 'container',
         type: 'column',
         margin: 75,
         options3d: {
            enabled: true,
            alpha: 5,
            beta: 30,
            depth: 70,
            viewDistance: 35
         }
      },

      plotOptions : {
         column: {
            depth: 35
         }
      },
      xAxis: {
        categories: this.filterData('name')
      },
      yAxis: {
        crosshair: true
      },
      tooltip: {
        formatter: function() : string {
            return 'Rating';
        }
      },
      series : [{
         type: 'column',
         data: this.filterData('value'),
         colorByPoint: true
      }],
      title:{
        align:'center',
        floating:false,
        margin:15,
        style:{ "color": "gray", "fontSize": "38px" },
        text:"My Skill",
        useHTML:false,
        verticalAlign:undefined,
        widthAdjust:-44,

      },
      enabled:false,
      legend: {
        accessibility:{
          enabled:false
        },

        layout: 'horizontal',
        x: 0,
        y: 100
      },

   };
  }
  filterData(params: string) {
      let allSkillsName = this.homeSevice.getSkills().map(ele => ele[params as keyof ISkills]); // ['topic','topic']
      let skillArr: any[] = [];
      this.optionsModel.forEach( (ele)=> {
          if(this.homeSevice.getSkills()[ele][params as keyof ISkills] === allSkillsName[ele]){
            skillArr.push(allSkillsName[ele]);
          }
      })
      return skillArr;
  }
  onChange(ev: Event) {
    this.chartOptions = {};
    this.chartOptions = this.intializeHighchart() as Highcharts.Options;
  }

  constructor( private homeSevice : HomeService ) {
    this.chartOptions = this.intializeHighchart() as Highcharts.Options;
    this.myOptions = <IMultiSelectOption[]> this.homeSevice.getSkills().map((ele) => pick(ele,['id','name']));

  }
  ngAfterViewInit() {
    document.getElementsByClassName('highcharts-credits')[0].remove();
  }

  ngOnInit(): void {}

}
