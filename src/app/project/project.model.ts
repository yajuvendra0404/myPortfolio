export class ProjectModel {
  public name: string;
  public company: string;
  public image: string;
  public description: string;
  public projectType: ProjectTypeEnum;
  constructor (name: string, company: string, image: string, description: string, projectType: ProjectTypeEnum) {
    this.name = name;
    this.company = company;
    this.image = image;
    this.description = description;
    this.projectType = projectType;
  }
}
export enum ProjectTypeEnum {
  PET_PROJECT = "pet project",
  PROFESSIONAL_PROJECT = "professional project",
  PORTFOLIO_PROJECT = "portfolio project"
}
