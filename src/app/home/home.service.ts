import { Injectable } from '@angular/core';
import { ISkills, IStrength, IStrengthAnimation } from './home.interface';
import { SkillsModel, StrengthModel } from './home.model';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  strength: IStrengthAnimation[] = [];
  skills: ISkills[] = [];

  constructor() {
    this.strength = [
        new StrengthModel("Detail-Oriented","#a0b8fa","#6488ea","white","zoom-in","500"), //a0b8fa
        new StrengthModel("Patience","#ff8086","#ce2029","white", "zoom-in","1000"), //ff8086
        new StrengthModel("Discipline","#9485f2","#6a5acd","white", "zoom-in","1500"), //9485f2
        new StrengthModel("Persistent ","#9dfc9d","#32cd32","white", "zoom-in","2000"), //9dfc9d
        new StrengthModel("Observant","#fcd29a","#ffae42","white", "zoom-in","2500"), //fcd29a
    ]
    this.skills = [
      new SkillsModel(0,'Javascript', 95),
      new SkillsModel(1,'Typescript', 92),
      new SkillsModel(2,'JQuery', 55),
      new SkillsModel(3,'AngularJS', 60),
      new SkillsModel(4,'Angular2+', 90),
      new SkillsModel(5,'NodeJs', 55),
      new SkillsModel(6,'Java', 35),
      new SkillsModel(7,'Azure', 50),
      new SkillsModel(8,'Docker', 60),
      new SkillsModel(9,'MongoDB', 65),
      new SkillsModel(10,'MySql', 65),
      new SkillsModel(11,'JSON', 90),
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

