// template literals is used to add embedded expressions in a string ..

let x = 100
let y = 20
console.log("The addition is  ", x + y);
console.log(`The addition is ${x + y}`);

let name = "Praveen"
let age = 21
let city = "Hyderabad"

console.log(`The name of student is ${name} , and his age is ${age} and he lives in ${city}`);

// Object and arrays 
// without array
let std1 = "aman"
let std2 = "priya"
let std3 = "aditya"
let std4 = "sai"
let std5 = "praveen"

// console.log(std1);
// console.log(std2);
// console.log(std3);
// console.log(std4);
// console.log(std5);

// with array 
// array is collection of data and it contains indexing , that starts from 0 

let students = ["aman", "priya", "aditya", "sai", "praveen", 100, true]
//                0        1        2          3        4
console.log(students);
console.log(students[0]);
console.log(students[4]);
console.log(students[5]);

// Object -> that is combination of key and value pair 

let info = {
    //   key : value 
    name: "Mahesh",
    age: 25,
    salary: 55000
}

console.log(info);
console.log(info.salary);