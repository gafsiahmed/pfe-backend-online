// import { getUsers , addUser , deleteUserById, getUserById, updateUser, User, updateUserPartial } from "../services/users.service.js"

import { User } from "../models/user.model.js"
import {getUsers,addUser,getUserById, updateUser, deleteUserById} from "../services/users.service.js"

import {Request , Response} from "express"




// Create the function that getAll users 

export async function getAllUsers(req : Request,res : Response ) {
    try {
        // we will check if there is req.query ( req.query is an object that contains all the query parameters in the url )
        // will we focus on pagination so we expect 2 parameters :  page and limit
        if(req.query.page && req.query.limit){

            const page = Number(req.query.page) || 1
            const limit = Number(req.query.limit) || 10


            const skip = (page - 1) * limit

            const data = await User.find().skip(skip).limit(limit)

            const totalUsers = await User.countDocuments()

            res.status(200).json({
                data : data,
                totalUsers : totalUsers,
                page : page,
                limit : limit,
                totalPages : Math.ceil(totalUsers / limit)
            })
            return;
        }


        const users = await getUsers()
        res.status(200).json({
            message : "Users retrieved successfully",
            users : users
        })
    }
    catch(error){
        res.status(500).json({
            message : "Failed to retrieve users",
            error : error
        })
}
}


export async function getUserByIdController (req : Request,res : Response) {
    
    const id : String = req.params.id as String
    // we will wall the function that search and return the user by id
    const user = await getUserById(id);

    if(user === null){
        res.status(404).json({
            message : 'User not found'
        })
        return;
    }
    res.status(200).json({
        message : "User found",
        user : user
    })
}


export async function createNewUser(req : Request,res : Response) {
    const newUser : any = req.body;

    // console.log(req.body)
    if(!newUser){
        res.status(400).json({
            message : "Bad Request",
            error : "Request body is missing"
        })
        return;
    }

    if(!newUser.firstName || !newUser.email){
        res.status(400).json({
            message : "Bad Request",
            error : "firstName and email are required fields"
        })
        return;
       
    }
    const createdUser = await addUser(newUser);

    res.status(201).json({
        message : "User added successfully",
        user : createdUser
    })
}



export async function updateUserController (req : Request,res : Response) {
    const id : String = req.params.id as String
    const updatedFields  = req.body;

    if(!updatedFields){
        res.status(400).json({
            message : "Bad Request",
            error : "Request body is missing"
        })
    return;
    }

    const updatedUser = await updateUser(id,updatedFields)
    res.status(200).json({
        message : "User updated successfully",
        user : updatedUser
    })

}



export function deleteUser (req: Request, res: Response) {
    const id : String = req.params.id as String
    console.log(id)

    if(!id){
        res.status(400).json({
            message : "Bad Request",
            error : "id is required"
        })
        return;
    }
    if(!deleteUserById(id)){
        res.status(404).json({
        message : "User not found"
    })
    }else{
        res.status(200).json({
        message : "User deleted successfully"
    })
    }
  
}
/* 
----------------------------------------------------------------------------------------
using the static methods we created in the User model to find the user
by email and return it to the client
----------------------------------------------------------------------------------------
 */

export async function findUserByEmailController(req : Request,res : Response){
    try {
         const email = req.body.email
         if(!email){
            res.status(400).json({
                message : "Email is required"
            })
            return;
         }

         const user = await User.findUserByEmail(email)
         res.status(200).json({
            message : "User found successfully",
            user : user
         })
    }catch(err : any){
        res.status(500).json({
            message : err.message || "Internal Server Error"
        })
    }
}