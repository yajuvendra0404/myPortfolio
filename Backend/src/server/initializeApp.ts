import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { autoInjectable} from "tsyringe";
import Config from "../configs/config.js";
import Routes from '../routes/routes.js';

@autoInjectable()
export default class InitializeApp{

   private app:express.Application;
   private MONGODB_CONNECTION_STRING?:string;
   private PORT?:string;
   private SECRET_KEY?:string;
   private routes: express.IRouter;

  constructor(
      _config:Config,
      _routes:Routes
  ){

    // ------ config variable initialization
    this.MONGODB_CONNECTION_STRING = _config.MONGODB_CONNECTION_STRING;
    this.PORT = _config.PORT;
    this.SECRET_KEY = _config?.SECRET_KEY;
    this.routes = _routes.routes;


    // ------ express initialization
    this.app = express();
    this.app.use(morgan('tiny'));
    this.app.use(cors()); 
    this.app.use(express.json());


    // ------ init functions initialization
    this.initalizeDatabase();
    this.initializeRouter();
  }

  initializeRouter () { 
    this.app.use("/",this.routes);
  } 

  initalizeDatabase () {
    mongoose.connect("mongodb"+this.MONGODB_CONNECTION_STRING).then(()=>{
      console.log(`---------- Database connection established`);
      this.listen();
    }).catch( err => {
      console.log(`---------- Database connection error -----`,err)
    });
  }

  listen(){
    this.app.listen(this.PORT, () => {
      return console.log(`

      ---------------------------------------------
      ---------------------------------------------
      Express is listening at http://localhost:${this.PORT}
      ---------------------------------------------
      ---------------------------------------------
      `);
    });
  }
}
