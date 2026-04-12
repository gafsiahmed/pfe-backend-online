import Router from "express"
import { createNewTodoController, getAllTodosController, getTodoByIdController } from "../controllers/todos.controller.js"
import authentificate from "../middlewares/auth.js"

const router = Router()

// get all todos
router.get('/todos',authentificate,getAllTodosController)
// get Todo by Id
router.get('/todos/:id',authentificate,getTodoByIdController)
// create new Todo
router.post('/todos',authentificate,createNewTodoController)
// update Todo by Id
// router.put('/todos/:id',updateTodoController)
// patch Todo by Id
// router.patch('/todos/:id',patchTodoController)
// delete Todo by Id
// router.delete('/todos/:id',deleteTodoController)





export default router
