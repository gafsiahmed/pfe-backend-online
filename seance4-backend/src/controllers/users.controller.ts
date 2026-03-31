import { getUsers , addUser , deleteUserById, getUserById, updateUser, User, updateUserPartial } from "../services/users.service.js"

import {Request , Response} from "express"




// Create the function that getAll users 

export function getAllUsers(req : Request,res : Response ) {
    const users = getUsers();
    res.status(200).json(users)
}


export function getUserByIdController (req : Request,res : Response) {
    
    const id : number = Number(req.params.id)
    // we will wall the function that search and return the user by id
    const user = getUserById(id);
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


export function createNewUser(req : Request,res : Response) {
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
    addUser(newUser);

    res.status(201).json({
        message : "User added successfully",
        user : newUser
    })
}



export function updateUserController (req : Request,res : Response) {
    const id : number = Number(req.params.id);
    const updatedUser : any = req.body;

    if(!updatedUser){
        res.status(400).json({
            message : "Bad Request",
            error : "Request body is missing"
        })

        return;
    }

    updateUser(id,updatedUser)
    res.status(200).json({
        message : "User updated successfully"
    })
}

export function patchUserById (req : Request,res : Response) {
    const id : number = Number(req.params.id);
    const updatedFields : Partial<User> = req.body;

    if(!updatedFields){
        res.status(400).json({
            message : "Bad Request",
            error : "Request body is missing"
        })
    return;
    }

    const updatedUser = updateUserPartial(id,updatedFields)
    res.status(200).json({
        message : "User updated successfully",
        user : updatedUser
    })

}



export function deleteUser (req: Request, res: Response) {
    const id : number = Number(req.params.id);
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