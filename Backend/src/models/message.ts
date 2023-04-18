import mongoose from 'mongoose';

export default class Message {
    
    Message = mongoose.model("message", new mongoose.Schema({
        message:{ type:String, required: true, trim: true },
        subject:{ type:String, required: true, trim: true },
        userId:{ type:String, required: true, trim: true },
        OTP:{ type:Number, trim:true, required:true}
    }))

}