import { ITodo , Todo } from './../models/todo.model.js';

export async function createTodo(
data: Partial<ITodo>,
userId: string
) {
const todo = new Todo({ ...data, owner: userId });
return todo.save();
}



export async function getTodosByUser(userId : string){
     const todo : any =  await Todo.find({owner : userId}).sort({createdAt : -1}).populate({
      path : 'owner',
      select : 'firstName lastName email'
     })
    console.log(todo , 'user id : ',userId )
    return todo
}



export async function getTodoById(todoId : string, userId : string){
  return await Todo.findOne({
    _id : todoId,
    owner : userId
    })
}
