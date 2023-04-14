import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose, { Model } from 'mongoose';

export default class InitializeApp{

   private app:express.Application;
   MONGODB_CONNECTION_STRING?:string;
   PORT?:string;
   SECRET_KEY?:string;
   routes: express.IRouter;

  constructor(
      routes: express.IRouter,
      MONGODB_CONNECTION_STRING?: string, 
      PORT?: string, 
      SECRET_KEY?: string
  ){
    // ------ variable initialization
    this.MONGODB_CONNECTION_STRING = MONGODB_CONNECTION_STRING;
    this.PORT = PORT;
    this.SECRET_KEY = SECRET_KEY;
    this.routes = routes;

    // ------ function initialization
    this.app = express();
    this.app.use(morgan('tiny'));
    this.app.use(cors()); 
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
