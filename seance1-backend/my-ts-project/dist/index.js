"use strict";
// const message : string = "Hello , TypeScript";
// let  user_name : string = "Ahmed Gafsi";
// let count : number = 50;
// let isMarried : boolean = false; 
// console.log("Message recu :" ,message);
// console.log("Count : ",count )
// console.log("User Name : ",user_name )
// console.log("Is User Married : ",isMarried )
let user_name = 'Alice';
let age = 25;
let isActive = true;
let data = null;
let value = undefined;
// to define an array of numbers we can use two syntaxes :
let student_grades = [20, 8, 15, 13];
// OR
let score = [10, 20, 30, 40];
let user_obj = {
    name: "Ahmed Gafsi",
    email: "ahmed@gmail.com",
    password: 12345678
};
let sahar_grades = ["Sahar", "Jleli", 14];
function addNumbers(a, b) {
    return a + b;
}
console.log("result : ", addNumbers(10, 20));
console.log("result : ", addNumbers(100, 56));
console.log(user_obj.email);
let user_direction = "Gharb";
let user_id = 123;
user_id = 123;
console.log("user id : ", user_id);
let student2 = {
    name: "Eya",
    lastName: "Bouzidi",
    age: 22
};
console.log(student2);
let user1 = {
    name: "Ahmed Gafsi",
    email: "ahmed@gmail.com",
    createdAt: new Date(),
    id: 1,
    sayHello(name) {
        return `Hello ${name}, I am ${this.name}`;
    }
};
let admin1 = {
    name: "Eya Bouzidi",
    email: "eya@gmail.com",
    createdAt: new Date(),
    role: "Admin",
    id: 2,
    permissions: ['read', 'write', 'delete'],
    sayHello(name) {
        return `Hello ${name}, I am ${this.name} and I am an ${this.role}`;
    }
};
user1.name = "Mortadha Maamri";
// user1.createdAt = new Date()
console.log(user1);
console.log(admin1);
function getFirstItem(arr) {
    return arr[0];
}
console.log("first item is", getFirstItem([10, 20, 30]));
console.log("first item is", getFirstItem(["ali", "mohamed", "Eya"]));
