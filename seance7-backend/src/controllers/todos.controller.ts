import {Request , Response} from "express"
import { createTodo, getTodoById, getTodosByUser } from "../services/todos.service.js";


export async function getTodoByUserId(req:any,res : Response){
    try {
        const userId = req.user.id
        const todo = await getTodosByUser(userId)

        console.log(todo , "niveau controller")
        res.status(200).json({
            message : "Todos retrieved successfully",
            todos : todo
        })
    }catch(err : any){
        res.status(500).json({
            message : err.message || "Internal Server Error"
        })
    }
   
}


export function getTodoByIdAndUserId(req :Request,res : Response){
     
}


export function CreateNewTodo(req : any,res : Response){
      try {
        const userId = req.user.id
        const {
            title,
            description,
            owner,
            category
        } = req.body
        
        if(!title || !description || !owner || !category){
            res.status(400).json({
                message : "All Fields are required"
            })
            return;
        }

        const createdTodo = createTodo(
            {
                title,
                description,
                owner,
                category
            },
            userId
        )
        res.status(201).json({
            message : "Todo created successfully",
            todo : createdTodo
        })

      } catch (err : any) { 
        res.status(500).json({
            message : err.message || "Internal Server Error"
        })
      }
}