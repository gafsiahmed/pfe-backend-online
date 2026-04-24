import { Request, Response } from "express"; 
import { register } from "../services/auth.service.js";



export async function registerController(req : Request ,res : Response){
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
        res.status(201).json({
            message : "User registered successfully",
            user : result.user,
            token : result.token
        })
    }
    catch(err : any){
        res.status(500).json({
            message : err.message || "Internal Server Error"
        })
    }
}