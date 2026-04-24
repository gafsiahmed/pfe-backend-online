import {User} from '../models/user.model.js'


export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  salary?: number;
  email?: string;
  isMarried?: boolean;
}


export async function getUsers(){
    return await User.find()
}

export function getUserById(id: String){
     return User.findById(id)
}

export async function addUser(user: User){
    return await User.create(user)
}




export async function updateUser(id : String , updateFields : Partial<User> )  {
    try {
        const user = await User.findById(id)
        if(user === null){
          console.log("user not found")
          return;
        }      
        const newData = {
          ...user.toObject(),
          ...updateFields
        }
        await User.findByIdAndUpdate(id,newData)


    }
    catch(error){
      console.error("Failed to update user from service 🟥", error)
    }

}

export async function deleteUserById(id : String)  {
  return await User.findByIdAndDelete(id)
}


