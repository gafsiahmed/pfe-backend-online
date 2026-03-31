import Router from "express"
import { createNewUser, deleteUser, getAllUsers ,getUserByIdController, patchUserById, updateUserController } from "../controllers/users.controller.js"


const router = Router()

// The First Endpoint ( GET /users )
router.get('/users',getAllUsers )
// Get user by ID 
router.get('/users/:id',getUserByIdController)
// The Second Endpoint ( POST /users )
router.post('/users', createNewUser )
router.put('/users/:id', updateUserController)
router.patch('/users/:id', patchUserById)
router.delete('/users/:id',deleteUser )


export default router
