import { Request, Response, NextFunction } from "express";7



export default function accessByRole(allowedRoles : string[]){
    return (req:Request,res:Response, next : NextFunction)=>{

        const userRole = req.headers['authorization']?.substring(7) as string 
        if(!userRole){
            res.status(401).json({
                message : 'Token is missing or invalid'
            })

            return;
        
    }
    if (!allowedRoles.includes(userRole)){
        res.status(403).json({
            message : 'Forbidden :  You have no access to this resource'
        })
        return;
    }
    next();
    }
}