import { Request, Response, NextFunction } from "express";



export default function authentificate(req : Request,res : Response, next : NextFunction ){

 const authHeader = req.headers['authorization']

 if(!authHeader || !authHeader.startsWith('Bearer ') ){
    res.status(401).json({
        message : 'Token is missing or invalid'
    })

    return;
 }

 // this will remove the "Bearer " part from the token and keep only the actual token value
 const token = authHeader?.substring(7)

 if(!(token === 'opuslab2026secrettoken' || token === 'admin' || token === 'user')){
    res.status(403).json({
        message : 'Forbidden : Invalid token'
    })

    return;
 }

 next();

}