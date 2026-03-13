// const message : string = "Hello , TypeScript";
// let  user_name : string = "Ahmed Gafsi";
// let count : number = 50;
// let isMarried : boolean = false; 



// console.log("Message recu :" ,message);
// console.log("Count : ",count )
// console.log("User Name : ",user_name )
// console.log("Is User Married : ",isMarried )


let user_name: string = 'Alice';
let age: number = 25;
let isActive: boolean = true;
let data: null = null;
let value: undefined = undefined;


// to define an array of numbers we can use two syntaxes :
let student_grades : number[] = [20,8,15,13]
// OR
let score : Array<number> = [10,20,30,40]

let user_obj : {name:string,email:string,password:string | number} = {
    name : "Ahmed Gafsi",
    email : "ahmed@gmail.com",
    password :12345678
}


let sahar_grades : [string,string,number] = ["Sahar","Jleli", 14]



function addNumbers(a:number,b:number) :number {
    return a+b;
}


console.log("result : " ,addNumbers(10,20))
console.log("result : " ,addNumbers(100,56))

console.log(user_obj.email)
// console.log("result : " ,addNumbers("10",20)) 🔴
// console.log("result : " ,addNumbers(5,undefined)) 🔴


type Direction = "Chamél" | "Janoub" | "Char9" | "Gharb"
let user_direction : Direction = "Gharb"

let user_id : number | string = 123;
user_id = 123
console.log("user id : ",user_id)


let student2 : unknown = {
    name :"Eya",
    lastName :"Bouzidi",
    age :22
}

console.log(student2)


type Role = "Admin" | "User" | "Manager"
interface User {
    id : number;
    name : string;
    email : string;
    age? : number;
    readonly createdAt : Date;
    sayHello(name: string): string;
}


interface Admin extends User {
    role : Role,
    permissions : Array<string>,
}

let user1 : User = {
    name : "Ahmed Gafsi",
    email : "ahmed@gmail.com",
    createdAt : new Date(),
    id : 1,
    sayHello(name: string): string {
        return `Hello ${name}, I am ${this.name}`
    }
    }


let admin1 : Admin = {
    name : "Eya Bouzidi",
    email : "eya@gmail.com",
    createdAt : new Date(),
    role :"Admin",
    id : 2,
    permissions : ['read','write','delete'],
    sayHello(name: string): string {
        return `Hello ${name}, I am ${this.name} and I am an ${this.role}`
    }
}

user1.name = "Mortadha Maamri"
// user1.createdAt = new Date()

console.log(user1)
console.log(admin1)




function getFirstItem<T>(arr:Array<T>) : T { 
    return arr[0]
}


console.log("first item is" ,getFirstItem<number>([10,20,30]))

console.log("first item is" ,getFirstItem<string>(["ali","mohamed","Eya"]))



