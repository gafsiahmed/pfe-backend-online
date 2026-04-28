import Router from "express"
import { CreateNewTodo, getTodoByUserId   } from "../controllers/todos.controller.js"
import authentificate from "../middlewares/authentificate.js"

const router = Router()

// get all todos
// router.get('/todos',authentificate,getAllTodosController)
// get Todo by User Id
router.get('/todos',authentificate,getTodoByUserId)
// get Todo by Id and User Id
// router.get('/todos/:id',authentificate,getTodoByIdController)
// create new Todo
router.post('/todos',authentificate,CreateNewTodo)
// update Todo by Id
// router.put('/todos/:id',updateTodoController)
// patch Todo by Id
// router.patch('/todos/:id',patchTodoController)
// delete Todo by Id
// router.delete('/todos/:id',deleteTodoController)





export default router
