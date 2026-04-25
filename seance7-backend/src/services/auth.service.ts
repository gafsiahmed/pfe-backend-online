import  bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User} from '../models/user.model.js';
import { workerData } from 'node:worker_threads';
import dotenv from 'dotenv';

dotenv.config()


const JWT_SECRET = process.env.JWT_SECRET || "nosecret"
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d'


function generateToken(userId: String,role : string = 'user'){
    const token = jwt.sign({id : userId , role : role },JWT_SECRET, {
        expiresIn : JWT_EXPIRES_IN as any
    })
    return token
}

function comparePassword(passwordToCompare : string,hashedPassword : string){
    return bcrypt.compare(passwordToCompare,hashedPassword)
}


// on vas cree la logique mte3 l inscription


export async function register(data : {
    firstName : string,
    lastName : string,
    email : string,
    password : string
} ){

    const existingUser = await User.findOne({
        email : data.email
    })

    if(existingUser){
        throw new Error("User with this email , already exists")
    }
    // on vas crypter le mot de passe 
    let newUser = new User(data)
    const salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(newUser.password,salt) 
    
    const savedUser = await newUser.save()
    const token = generateToken(String(savedUser._id), savedUser.role)
    return {
        user : savedUser,
        token : token
    }
}





// on vas cree la logique de la connexion 

export async function login(email : string, password: string){
     const user = await User.findOne({
        email : email
     })
     if(!user){
        throw new Error("Invalid Credentials");
     }
     const match = await comparePassword(password,user.password) 
     if(!match){
        throw new Error("Invalid Credentials");
     }
     const token = generateToken(String(user._id), user.role)
     return {
        user : user,
        token : token
     }

}