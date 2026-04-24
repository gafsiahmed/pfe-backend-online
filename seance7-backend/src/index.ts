// import * as http from 'http';
import express, { NextFunction, type Application, type Request, type Response }  from 'express'
import {getUsers,addUser, User} from './services/users.service.js'

import usersRouter from './routes/users.routes.js' 
import todosRouter from './routes/todos.routes.js'
import authRouter from './routes/auth.routes.js'
import logger from './middlewares/logger.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app : Application = express()
// we will import the port number from the .env file using the dotenv package
const PORT : number = Number(process.env.PORT) || 8080

const DB_URL : string = process.env.DATABASE_URL || "No Link Provided" 


// the database connection 
async function  connectToDatabase(){
    try {
        await mongoose.connect(DB_URL)
        console.log("Connected to the database successfully ✅")
    }
    catch(error){
        console.error("Failed to connect to the database 🟥", error)
    }
}




// c'est un middleware qui "parse" le corps ( req.body) de la requete entrante en JSON et le transforme en un objet JavaScript que nous pouvons utiliser dans notre code.

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(logger)



app.use(authRouter)
app.use(usersRouter)
app.use(todosRouter)


app.listen(PORT, ()=> {
    console.log("Welcome to my API")
    console.log(`Server is running on port  http://localhost:${PORT}`)
    connectToDatabase()

})


export default app