export interface HomeInterface {
}
export interface IStrength {
  strengthName: string;
}
export interface IStrengthAnimation extends IStrength {
  bgColorShadow: String;
  bgColor:string;
  textColor:string;
  animationMotion: string;
  animationDuration: string;
}

export interface ISkills {
  id:number;
  name: string;
  value: number;
  bgColor: string;
  iconImage: string;
}
