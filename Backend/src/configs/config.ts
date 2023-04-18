import { config } from 'dotenv';

export default class Config{
    
    SECRET_KEY?:string;
    PORT?:string;
    MONGODB_CONNECTION_STRING?: string ;

    constructor() {
        config({path:`./src/env/${process.env.NODE_ENV}.env`});
        this.MONGODB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING_LOCAL;
        this.PORT = process.env.PORT;
        this.SECRET_KEY= process.env.SECRET_KEY;
    }
}
