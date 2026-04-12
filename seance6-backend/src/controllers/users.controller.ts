// import { getUsers , addUser , deleteUserById, getUserById, updateUser, User, updateUserPartial } from "../services/users.service.js"

import {getUsers,addUser,getUserById, updateUser, deleteUserById} from "../services/users.service.js"

import {Request , Response} from "express"




// Create the function that getAll users 

export async function getAllUsers(req : Request,res : Response ) {
    try {
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