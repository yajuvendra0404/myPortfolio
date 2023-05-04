import Controller from "../controllers/controller.js";
import { Router } from "express";
import { autoInjectable, injectable } from "tsyringe";

@injectable()
export default class Routes {
    path:string ="/"
    routes = Router();

    constructor(
        _controller: Controller
        ) {
        this.routes.get(`${this.path}greet`, ( req, res, next)=>{
            _controller.testRoute(req, res, next);       
        })
        this.routes.post(`${this.path}saveMessage`, ( req, res, next)=>{
            _controller.saveMessage(req, res, next);     
        })
        this.routes.post(`${this.path}generateOTP`,(req, res, next)=> {
            _controller.sendOTP(req, res, next);
        })
    }
}