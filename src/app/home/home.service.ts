import { Injectable } from '@angular/core';
import { ISkills, IStrength, IStrengthAnimation } from './home.interface';
import { SkillsModel, StrengthModel } from './home.model';
import { Icons } from "@assets/icons";
@Injectable({
  providedIn: 'root'
})

export class HomeService {
  strength: IStrengthAnimation[] = [];
  skills: ISkills[] = [];

  constructor( private icons: Icons) {
    this.strength = [

        new StrengthModel("Patience","#ff8086","#ce2029","white", "zoom-in","1000"), //ff8086
        new StrengthModel("Discipline","#9485f2","#6a5acd","white", "zoom-in","1500"), //9485f2
        new StrengthModel("Detail-Oriented","#a0b8fa","#046ef8","white","zoom-in","500"), //a0b8fa
        new StrengthModel("Persistent ","#9dfc9d","#32cd32","white", "zoom-in","2000"), //9dfc9d
        new StrengthModel("Observant","#fcd29a","#ffae42","white", "zoom-in","2500"), //fcd29a
    ]
    // bgColorShadow, bgColor, textColor, animationMotion, animationDuration
    this.skills = [
      //
      new SkillsModel(0,'Javascript', 95, "rgba(251,211,4)","url(" + icons.javascript + ") no-repeat"),
      new SkillsModel(1,'Typescript', 92, "rgba(12,100,172)","url(" + icons.typescript + ") no-repeat"),
      new SkillsModel(2,'JQuery', 55, "rgba(24,100,172)" , "url(" + icons.jquery + ") no-repeat"),
      new SkillsModel(3,'Scss', 60, "rgba(248,100,148)" , "url(" + icons.scss + ") no-repeat" ),
      new SkillsModel(4,'Angular7+', 90, "rgba(220, 44, 4)" , "url(" + icons.angular + ") no-repeat" ),
      new SkillsModel(5,'NodeJs', 55, "rgba(40, 164, 100)" , "url(" + icons.nodejs + ") no-repeat" ),
      new SkillsModel(6,'Java', 35, "rgba(192,84,128)" , "url(" + icons.java + ") no-repeat" ),
      new SkillsModel(7,'Azure', 50, "rgba(44,156,227)" , "url(" + icons.azure + ") no-repeat" ),
      new SkillsModel(8,'Docker', 60, "rgba(4,84,156)" , "url(" + icons.docker + ") no-repeat" ),
      new SkillsModel(9,'MongoDB', 65, "rgba(108,164,108)" , "url(" + icons.mongoDB + ") no-repeat" ),
      new SkillsModel(10,'MySql', 65, "rgba(4,124,112)" , "url(" + icons.mysql + ") no-repeat" ),
      // new SkillsModel(11,'JSON', 90, "rgba(255, 90, 25)" , icons.json),
    ]
  }

  getStrengths(){
    return this.strength.slice();
  }
  setStrength () {
    return null;
  }
  getSkills() {
    return this.skills.slice();
  }
  setSkills () {
    return null;
  }
}

