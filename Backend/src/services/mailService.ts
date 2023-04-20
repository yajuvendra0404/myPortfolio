
import { autoInjectable } from "tsyringe";
import nodemailer from 'nodemailer';
import Config from "../configs/config.js";

@autoInjectable()
export class MailService {

    constructor(private _config : Config) {}

    async sendMail(userMailId: string): Promise<{[key:string]:string}> {
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
            let info = await transporter.sendMail({
                from: '"m04.portfolio.04" <m04.portfolio.04@gmail.com>', 
                to: userMailId,
                subject: "Email Verification OTP",
                html: this.getTemplate(),
            });

            console.log("Message sent: ", info.messageId);

            return {'message':'Verification OTP Send'};  
            
        } catch (exp) {
            return {"error":"Unable To Send Verification OTP."}
        }
    }

    private getTemplate(): string {
        let OTP = (Math.random()*1000000).toFixed(0);
        let template:string ="";

        template += "<html>"; 
        template += "Verification OTP - "+ OTP ;
        template += "<br> Thank you.";
        template += "</html>";

        return template;
    }
}