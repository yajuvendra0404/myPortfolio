import Controller from "@/controllers/controller";
import Message from "../models/message";
import { Router } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class Routes {
    path:string ="/"
    routes = Router();

    constructor(
        _controller: Controller
        ) {
        this.routes.get(`${this.path}greet`, ( req, res, next)=>{
            _controller.testRoute(req, res, next);       
        })
        this.routes.post(`${this.path}message`, ( req, res, next)=>{
            _controller.saveMessage(req, res, next);     
        })
    }
}