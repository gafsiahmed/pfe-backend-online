// import * as http from 'http';
import express, { type Application, type Request, type Response }  from 'express'
import {getUsers,addUser, User} from './services/users.service.js'

import usersRouter from './routes/users.routes.js' 


const app : Application = express()
const PORT : number = 8080



const users = getUsers();

// c'est un middleware qui "parse" le corps ( req.body) de la requete entrante en JSON et le transforme en un objet JavaScript que nous pouvons utiliser dans notre code.

app.use(express.json())
app.use(express.urlencoded({extended : true}))


// // Root endpoint ( GET / )
// app.get('/', (req : Request,res : Response)=> {
//     res.status(200).json({
//         message : "Welcome to my new Express Server",
//         author : "Ahmed Gafsi",
//         version : "1.0.0"
//     })
// })


app.use(usersRouter)


app.listen(PORT, ()=> {
    console.log("Welcome to my API")
    console.log(`Server is running on port  http://localhost:${PORT}`)
})


export default app