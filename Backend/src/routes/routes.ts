import { Router } from "express";

export default class Routes {
    path:string ="/"
    routes = Router();

    constructor() {
        this.routes.get(`${this.path}greet`, (_req, _res)=>{
            _res.send({ title: 'thakur for thakur' }).status(200);            
        })
    }
}