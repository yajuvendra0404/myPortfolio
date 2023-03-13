import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Icons {
  private PATH: string = "../../assets/icons/";

  ////// ----- Social Site Icons --- ///////

  facebook: string  = `${this.PATH}facebook.png`;
  github: string  = `${this.PATH}github.png`;
  gmail: string = `${this.PATH}gmail.png`;
  instagram: string = `${this.PATH}instagram.png`;
  linkedin: string =  `${this.PATH}linkedin.png`;

  ////// ----- Skills Icons --- ///////

  angular:string = `${this.PATH}icons-angular.png`;
  azure:string = `${this.PATH}icons-azure.png`;
  bootstrap:string = `${this.PATH}icons-bootstrap.png`;
  docker:string = `${this.PATH}icons-docker.png`;
  java:string = `${this.PATH}icons-java.png`;
  javascript:string = `${this.PATH}icons-javascript.png`;
  mongoDB:string = `${this.PATH}icons-mongodb.png`;
  mysql:string = `${this.PATH}icons-mysql.png`;
  scss:string = `${this.PATH}icons-sass.png`;
  typescript:string = `${this.PATH}icons-typescript.png`;
  jquery: string =`${this.PATH}icons-jquery.png`;
  nodejs: string = `${this.PATH}icons-node-js.png`;
  html:string = `${this.PATH}icons-html.png`;

}
