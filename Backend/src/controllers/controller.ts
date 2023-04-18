import Message from "@/models/message";
import { NextFunction,Request, Response } from "express";

export default class Controller{
    private _messageModel: Message;

    constructor ( _messageModel: Message ) {
        this._messageModel = _messageModel;
    }

    testRoute(req: Request, res: Response, next: NextFunction) {
        console.log("----- req -----",req);
        res.status(200).json({ title: 'thakur for thakur' }); 
    }

    async saveMessage(req: Request, res: Response, next: NextFunction) {
        
        try {

            let OTP = (Math.random()*1000000).toFixed(0);
            let messageCreated = await this._messageModel.Message.create({...req.body,OTP});  
            res.status(200).json({ message: "_data_saved"});

            /* Create vs save method - create method is used to 
            /* create new document while save method is use 
            /* to uopdate already existing document.
            /* And in case of updating the doument it is 
            /* better to use updateOne() over save() because of atomicity */

        } catch(exp) {
            console.log("exception occured");
        }

    }
}