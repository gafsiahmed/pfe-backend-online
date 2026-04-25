import { Request, Response } from "express"; 
import { login, register } from "../services/auth.service.js";


interface AuthenticatedRequest extends Request {
    user? : any ,
}
export async function registerController(req : AuthenticatedRequest ,res : Response){
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body

        if(!firstName && !lastName && !email && !password){
            res.status(400).json({
                message : "All Fields are required"
            })
            return;
        }

        const result = await register(
            {
                firstName,
                lastName,
                email,
                password
            }
        )
          const userToReturn = {
            id : result.user._id,
            fullName : result.user.firstName + " "+ result.user.lastName,
            email : result.user.email,
        }
        res.status(201).json({
            message : "User sign-up successfully",
            user : userToReturn,
            token : result.token
        })
    }
    catch(err : any){
        res.status(500).json({
            message : err.message || "Internal Server Error"
        })
    }
}


export async function loginController(req:Request,res : Response){
    try{

        const {
            email ,
            password
        } = req.body

        if(!email && !password){
            res.status(400).json({
                message : "All fields are required"
            })
            return;
        }


        const result = await login(email,password)
        const userToReturn = {
            id : result.user._id,
            fullName : result.user.firstName + " "+ result.user.lastName,
            email : result.user.email,
        }
        res.status(200).json({
            message : "User logged in successfully",
            user : userToReturn,
            token : result.token
        })

    }
    catch(err : any){
        res.status(500).json({
            message : err.message || "Internal Server Error"
        })
    }
}