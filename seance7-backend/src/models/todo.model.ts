import { Schema } from "mongoose";
import mongoose , { Document}  from "mongoose";




export interface ITodo extends Document {
    title : string;
    description : string;
    completed : boolean;
    category : string;
    status : 'pending' | 'in-progress' | 'completed';
    priority : 'low' | 'medium' | 'high';
    createdAt : Date;
    updatedAt : Date;
    owner : mongoose.Types.ObjectId;
}



const todoSchema = new mongoose.Schema<ITodo>({
    title : {
        type : String,
        required : true,    

    },
    description : String,
    completed : {
        type : Boolean,
        default : false
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    category : String,
    status  : {
        type : String,
        enum : ['pending','in-progress','completed'],
        default : 'pending'
    },
    priority : {
        type : String,
        enum : ['low','medium','high'],
        default : 'low'
    },
    },{
    timestamps : true
    })


    export const Todo = mongoose.model<ITodo>('Todo',todoSchema)