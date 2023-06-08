import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { autoInjectable, inject, injectable } from "tsyringe";
import Config from "../configs/config";
import Routes from '../routes/routes';

@injectable()
export default class InitializeApp{

   private app:express.Application;
   private MONGODB_CONNECTION_STRING:string;
   private PORT:string;
   private routes: express.IRouter;

  constructor(
    private _config:Config,
    private _routes:Routes
  ){
    console.log("--- config ---",_config);
    // ------ config variable initialization
    this.MONGODB_CONNECTION_STRING = _config.MONGODB_CONNECTION_STRING || "";
    this.PORT = _config.PORT || "";
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
      this.listen();
      console.log(`---------- Database connection established`);
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
