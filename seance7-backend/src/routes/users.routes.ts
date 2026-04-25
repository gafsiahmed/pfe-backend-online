import Router from "express"
// import { createNewUser, deleteUser, getAllUsers ,getUserByIdController, patchUserById, updateUserController } from "../controllers/users.controller.js"

import { createNewUser, deleteUser, getAllUsers , getUserByIdController, updateUserController } from "../controllers/users.controller.js"
import authentificate from "../middlewares/authentificate.js"
import accessByRole from "../middlewares/accessByRole.js"


const router = Router()

// The First Endpoint ( GET /users )
router.get('/users',authentificate, accessByRole(['admin']),getAllUsers )
// Get user by ID 
router.get('/users/:id',authentificate,getUserByIdController)
// The Second Endpoint ( POST /users )
router.post('/users',authentificate ,createNewUser )
// router.put('/users/:id',updateUserController)
router.patch('/users/:id', authentificate,updateUserController)
router.delete('/users/:id',authentificate,deleteUser )


export default router
