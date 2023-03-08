import { Injectable } from '@angular/core';
import { ProjectModel, ProjectTypeEnum } from './project.model';
import { IProject } from './project.interface';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // name: string, company: string, image: string, description: string, projectType: ProjectTypeEnum
  projects: IProject[] = [
    new ProjectModel('Jio Coverage Platform 1.0', 'Reliance JIO', '../../assets/images/Jcp1Src.png', "The JIO Coverage Platform is a tool for monitoring the performance of JIO's 4G LTE network.",ProjectTypeEnum.PROFESSIONAL_PROJECT),
    new ProjectModel('Jio Coverage Platform 2.0', 'Reliance JIO', '../../assets/images/Jcp1Src.png', "The JIO Coverage Platform is a tool for monitoring the performance of JIO's 4G LTE network.",ProjectTypeEnum.PROFESSIONAL_PROJECT),
    new ProjectModel('Meal Dash', 'College Final Project', '../../assets/images/Jcp1Src.png', "The JIO Coverage Platform is a tool for monitoring the performance of JIO's 4G LTE network.",ProjectTypeEnum.PET_PROJECT),
    new ProjectModel('Drivers License', 'College Project', '../../assets/images/Jcp1Src.png', "The JIO Coverage Platform is a tool for monitoring the performance of JIO's 4G LTE network.",ProjectTypeEnum.PET_PROJECT),
    new ProjectModel('Portfolio Website', 'Portfolio', '../../assets/images/Jcp1Src.png', "The JIO Coverage Platform is a tool for monitoring the performance of JIO's 4G LTE network.",ProjectTypeEnum.PET_PROJECT)
  ]
  getProjects() {
    return this.projects.slice();
  }
  setProjects() {

  }
  constructor() {}

}
