import mongoose from "mongoose";
import bcrypt from "bcrypt"


export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  salary: number;
  email: string;
  isMarried: boolean;
  password: string;
}

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : String,
    age : Number,
    salary : Number,
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    isMarried : Boolean

})


userSchema.pre("save", async function(next){
       if(!this.isModified("password")){
        return ;
       }
       const salt = await bcrypt.genSalt(10)
       this.password = await bcrypt.hash(this.password,salt)      
})


userSchema.methods.comparePassword = async function(passwordToCompare : string){
    return await bcrypt.compare(passwordToCompare,this.password)
}

export const User = mongoose.model<IUser>("User",userSchema)