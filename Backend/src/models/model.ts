import mongoose from 'mongoose';

export default class Models {
    
    Message = mongoose.model("message", new mongoose.Schema({
        message:{ type:String, required: true, trim: true },
        subject:{ type:String, required: true, trim: true },
        mailId:{ type:String, required: true, trim: true },
        isVerified:{ type:Boolean, trim:true, required:true},
    }))

    OTP = mongoose.model ("OTP", new mongoose.Schema({
        mailId:{ type:String, required: true, trim: true },
        OTP:{ type:Number, trim:true, required:true},
        expiresAt: { type: Date, required: true, index: true, expires:'1m'},  
    }))
    
}