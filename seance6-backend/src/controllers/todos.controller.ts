import {Request , Response} from "express"
import { createNewTodo, getTodoById, getTodos, Todo } from "../services/todos.service.js";


/*

getAllTodosController 
getTodoByIdController
createNewTodoController
updateTodoController
patchTodoController
deleteTodoController

*/


export function getAllTodosController(req :Request,res : Response){
   const todos = getTodos();
   if(todos.length ===0 || todos === null){
    res.status(404).json({
        message : 'No todos found'
    })
    return;
   }
    res.status(200).json(todos)
}


export function getTodoByIdController(req :Request,res : Response){
     const id = Number(req.params.id)
     const todo = getTodoById(id)
     if(!todo){
        res.status(404).json({
            message : `Todo with id ${id} not found`
        })
        return;
     }
     res.status(200).json(todo)
}


export function createNewTodoController(req :Request,res : Response){
     const newTodo : Todo = req.body
     if(!newTodo.title || !newTodo.description || !newTodo.status || !newTodo.priority || !newTodo.category){
        res.status(400).json({
            message : 'Missing required fields'
        })
        return;
    }
    if(newTodo.description.length <=10 && newTodo.description.length >= 500){
        res.status(400).json({
            message : 'Description should be between 10 & 500 characters'
        })
    }
    const  newTodoCreated = createNewTodo(newTodo)
    res.status(201).json(newTodoCreated)
}