import { config } from 'dotenv';

export default class Config{
    
    SECRET_KEY?:string;
    PORT?:string;
    MONGODB_CONNECTION_STRING?: string ;
    SMTP_HOST?:string;
    SMTP_PORT?:string;
    SMTP_USERNAME?:string;
    SMTP_PASSWORD?:string;
    
    constructor() {
        config({path:`./src/env/${process.env.NODE_ENV}.env`});
        this.MONGODB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING_LOCAL;
        this.PORT = process.env.PORT;
        this.SECRET_KEY= process.env.SECRET_KEY;
        this.SMTP_HOST= process.env.SMTP_HOST;
        this.SMTP_PORT= process.env.SMTP_PORT;
        this.SMTP_USERNAME= process.env.SMTP_USERNAME;
        this.SMTP_PASSWORD= process.env.SMTP_PASSWORD;
    }
}
