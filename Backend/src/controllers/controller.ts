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
import nodemailer from 'nodemailer';


@autoInjectable()
export default class Controller {
    
    private _messageModel: Message;

    constructor ( _messageModel: Message ) {
        this._messageModel = _messageModel;
    }

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

    async sendmail(req: Request, res: Response, next: NextFunction) {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'm04.portfolio.04@gmail.com',
                    pass: 'fzvlxplvqrlaujfu'
                },
            });

            let info = await transporter.sendMail({
                from: '"Yajuvendra Singh" <foo@example.com>', // sender address
                to: "ythakur4190@gmail.com", // list of receivers
                subject: "Verification OTP", // Subject line
                text: "OTP is 123456", // plain text body
                html: "<b>Hello world?</b>", // html body
            });

            console.log("Message sent: ", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));

            res.status(200).json({...req.body,"success":"Mail has been send."});

        } catch (exp) {
            console.log("expection occured");
        }
    }
}