import { ProjectTypeEnum } from './project.model';
export interface IProject {
  name: string;
  company: string;
  image: string;
  description: string;
  projectType: ProjectTypeEnum;
}
