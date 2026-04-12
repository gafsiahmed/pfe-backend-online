export interface Todo {
    id?: number;
    title : string;
    description : string;
    status : 'pending' | 'in progress' | 'completed';
    priority : 'low' | 'medium' | 'high'; 
    category : string;
}


let todos : Todo[] = [
   {
    "id": 1,
    "title": "Learn TypeScript",
    "description": "Understand types, interfaces, and integration with Node.js",
    "status": "pending",
    "priority": "high",
    "category": "Education"
  },
  {
    "id": 2,
    "title": "Build REST API with Express",
    "description": "Create a basic RESTful API using Express and test endpoints",
    "status": "in progress",
    "priority": "high",
    "category": "Development"
  },
  {
    "id": 3,
    "title": "Workout Session",
    "description": "Complete push day workout focusing on chest and triceps",
    "status": "pending",
    "priority": "medium",
    "category": "Health"
  },
  {
    "id": 4,
    "title": "Read MongoDB Docs",
    "description": "Study collections, documents, and indexing in MongoDB",
    "status": "pending",
    "priority": "medium",
    "category": "Education"
  },
  {
    "id": 5,
    "title": "Prepare Lecture",
    "description": "Create slides and examples for teaching Mongoose basics",
    "status": "completed",
    "priority": "high",
    "category": "Work"
  }
]


export function getTodos() : Todo[]{
    return todos;
}

export function getTodoById(id : number) : Todo | null {
    const todo = todos.find((todo)=> {
        return todo.id === id
    })
    if(!todo){
        return null;
    }
    return todo;
}

export function createNewTodo(todo : Todo) : Todo {
    todos.push(todo)
    return todo; 
}