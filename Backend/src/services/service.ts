
import { autoInjectable } from "tsyringe";
import nodemailer from 'nodemailer';
import Config from "../configs/config.js";
import Models from "../models/model.js";

@autoInjectable()
export class Service {
    private generatedOTP:number;
    constructor(
        private _config : Config,
        private _models : Models
    ) {}

    async sendMail(mailId: string): Promise<{[key:string]:string} | string> {
        try {
            let transporter = nodemailer.createTransport({
                host: this._config.SMTP_HOST,
                port: 587,
                secure: false, 
                auth: {
                    user: this._config.SMTP_USERNAME,
                    pass: this._config.SMTP_PASSWORD
                },
            });
            await transporter.sendMail({
                from: '"m04.portfolio.04" <m04.portfolio.04@gmail.com>',
                to: mailId,
                subject: "Email Verification OTP",
                html: this.getTemplate(),
            }, async (error, info) => {
                // if (error) throw new OperationCanceledException();
                
                let OTP = await this._models.OTP.create({
                    "mailId":mailId, 
                    "OTP":this.generatedOTP,
                    "expiresAt": new Date(Date.now() + 2*60)
                });

            });
            return {'message':'Verification OTP Send'};  
            
        } catch (exp) {
            throw new Error("Verification OTP was not Send");
            // return {"error":"Unable To Send Verification OTP."}
        }
    }
    async saveMessage (data: Request): Promise<{[key:string]:string}> {
        await this._models.Message.create({...data,isVerified:true});  
        return { message: "Data Saved"};
    }
    private getTemplate(): string {
        this.generatedOTP = parseInt((Math.random()*1000000).toFixed(0));

        let template:string ="";

        template += "<html>"; 
        template += "Verification OTP - "+ this.generatedOTP ;
        template += "<br> Thank you.";
        template += "</html>";

        return template;
    }
}