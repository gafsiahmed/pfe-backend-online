import mongoose, { Model } from "mongoose";
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
  role : string;
}

// we need to extend the Document interface to include our custom methods and properties for the user model
export interface IUserModel extends Model<IUser> {
    findUserByEmail(email: string): Promise<IUser | null>;
}

const userSchema = new mongoose.Schema<IUser, IUserModel>({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
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
    role : {
        type : String,  
        enum : ['user','admin'],
        default : 'user'
    },
    isMarried : Boolean

})


userSchema.methods.returnFullName = function(){
    return this.firstName + " " + this.lastName
}

userSchema.statics.findUserByEmail = function(email :string){
    return this.findOne({
        email : email
    })
}

userSchema.statics.findAdults = function(){
    return this.find({
        $and : [ {$gte : 18},{$lte : 60} ]
    })
}

// userSchema.pre("save", async function(next){
//        if(!this.isModified("password")){
//         return ;
//        }
//        const salt = await bcrypt.genSalt(10)
//        this.password = await bcrypt.hash(this.password,salt)      
// })


// userSchema.methods.comparePassword = async function(passwordToCompare : string){
//     return 
// }

export const User = mongoose.model<IUser, IUserModel>("User",userSchema)