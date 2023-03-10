export class StrengthModel {

  public strengthName: string;
  public bgColorShadow: string;
  public bgColor: string;
  public textColor: string;
  public animationMotion: string;
  public animationDuration: string;
  constructor ( strengthName: string,bgColorShadow: string, bgColor:string, textColor:string, animationMotion:string, animationDuration: string ) {
    this.strengthName = strengthName;
    this.bgColor = bgColor;
    this.bgColorShadow = bgColorShadow;
    this.textColor = textColor;
    this.animationMotion = animationMotion;
    this.animationDuration = animationDuration
  }
}

export class SkillsModel {
  public name: string;
  public value: number;
  public id: number;
  public bgColor: string;
  public iconImage: string;
  constructor ( skillId: number,skillName: string , skillValue: number, bgColor: string, iconImage: string ) {
    this.name =  skillName;
    this.value = skillValue;
    this.id= skillId;
    this.bgColor = bgColor;
    this.iconImage = iconImage;
  }
}
