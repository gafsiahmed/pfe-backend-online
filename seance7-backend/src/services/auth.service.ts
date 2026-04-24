import  bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User} from '../models/user.model.js';
import { workerData } from 'node:worker_threads';


const JWT_SECRET = process.env.JWT_SECRET || 'thisisasecret'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d'


function generateToken(userId: String){
    const token = jwt.sign({id : userId},JWT_SECRET, {
        expiresIn : JWT_EXPIRES_IN as any
    })
    return token
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
    const token = generateToken(String(savedUser._id))
    return {
        user : savedUser,
        token : token
    }
}





// on vas cree la logique de la connexion 

export async function login(){

}