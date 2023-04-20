/*  
    create vs save method - create method is used to 
    create new document while save method is use 
    to update already existing document.
    and in case of updating the doument it is 
    better to use updateOne() over save() because of atomicity 
*/

import { autoInjectable } from "tsyringe";
import Message from "../models/message.js";
import { NextFunction,Request, Response } from "express";
import { MailService } from "../services/mailService.js";


@autoInjectable()
export default class Controller {
    

    constructor ( 
        private _messageModel: Message, 
        private _mailService: MailService
    ) {}

    testRoute(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({ title: 'Test Complete.' }); 
    }

    async saveMessage(req: Request, res: Response, next: NextFunction) {
        try {
            let OTP = (Math.random()*1000000).toFixed(0);
            await this._messageModel.Message.create({...req.body,OTP});  
            res.status(200).json({ message: "Data Saved"})
        } catch(exp) {
            console.log("exception occured");
        }
    }

    // send mail for OTP verification
    async sendmail(req: Request, res: Response, next: NextFunction) {
        let mailSent = await this._mailService.sendMail(req.body.userId);
        res.status(200).json(mailSent);
    }
}