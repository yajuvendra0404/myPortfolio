/*  
    create vs save method - create method is used to 
    create new document while save method is use 
    to update already existing document.
    and in case of updating the doument it is 
    better to use updateOne() over save() because of atomicity 
*/

import { autoInjectable } from "tsyringe";
import { NextFunction,Request, Response } from "express";
import { Service } from "../services/service.js";

@autoInjectable()
export default class Controller {
    
    constructor ( 
        private _service: Service
    ) {}

    // ------ test route.
    testRoute(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({ title: 'Test Complete.' }); 
    }

    // ------ save message after OTP verification.
    async saveMessage(req: Request, res: Response, next: NextFunction) {
        try {
            var json = this._service.saveMessage(req.body);
            res.status(200).json(json) 
        } catch(exp) {
            console.log("exception occured");
        }
    }

    // ------ send mail for OTP verification.
    async sendOTP(req: Request, res: Response, next: NextFunction) {
        let mailSent = await this._service.sendMail(req.body.emailId);
        res.status(200).json(mailSent);
    }
}