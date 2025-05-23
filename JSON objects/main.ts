// ------------------------- JSON OBJECTS -----------------------------//

// ----------------------- BASIC INTRODUCTION--------------------------------//
/*
JSON stands for javaScript object notation.
JSON is a text-based data format that is used to store and transfer data.
It is used to transfer data from server to client.
JSON objects are most commonly used as they are easily readable and understandable.
or ye dosri programing languages mai use kia ja sakta hai.
JSON objects are declared in curly bracets{}.
It is in key/values pairs.
*/

// Syntax of JSON objects
let json = {
  "name": "Aliza",
  "age": 17,
  "student": true,
};
console.log(json);

//---------------- DIFFERENCE BETWEEN JAVASCRIPT OBJECTS AND JSON OBJECTS--------------------//
// javaScript objects
let obj = {
    name:"aliza",
    age:17,
    student:true
}
console.log(obj);

// JSON objects

let jsonObj = {
  "name": "Fatima",
  "age": 19,
  "student": false,
};
console.log(jsonObj);

//---------DIFFERENCE---------//

/*
Some of the main differences are as follows
1) The key difference is of syntax.
2) javascript objects can contain functions but json objects can not.
3) javascript objects can not be used in multiple languages but JSON objects can be used.
*/

//---------------------- ACCESSING JSON DATA -----------------//
//JSON objects k andar values ko access kr ne k do tareke hote hain
// FRIST METHOD
let jsonObjCar = {
    "name":"lamborgini",
    "color":"black",
};
console.log(jsonObjCar.name);
console.log(jsonObjCar.color);

// SECOND METHOD
let jsonObjCars = {
    "name":"Corolla",
    "color":"black", 
};
console.log(jsonObjCars["name"]);
console.log(jsonObjCars["color"]);

//---------------------- JSON ARRAY -----------------------//
let jsonArray= ["coding","painting","drawing"];
console.log(jsonArray);

let jsObj = {
  "name": "batool",
  "age":"21",
  "hobbies":["coding","painting"]
}
console.log(jsObj);
console.log(jsObj["hobbies"][0]);// accessing array

//----- USAGE OF JSON ARRAYS-----//
/*JSON arrays are widely used in APIs and data interchange scenarios. Some common use cases include:

1)Lists of items: Like products, users, or any other collection.

2)Response data from servers: When querying a database or an API,
the response is often in the form of a JSON array.

3)Configuration settings: JSON arrays can be used to store configuration settings that involve
lists of values */


// -------------------- JSON string ---------------//
//this is how you can write json string
const data = '{"name": "nida", "age": 30}';
console.log(data);
//--------------converting JSON string into json object------------------//
const objs = JSON.parse(data); //
console.log(objs.age);

// ------------------ converting json object into json string------------------//

let student ={
  "quarter": 1,
  "learning":"typeScript",
  "exams":"upcomming",
  "preparationSource":"SirZiaRepo"
}
let turnIntoStr = JSON.stringify(student);
console.log(turnIntoStr);



// ------------------- PRACTICE QUESTIONS --------------------//

//-------------------QUESTION 1-----------------//
/*Convert the following json string into json object and log out the tittle */
// {
//   "book": {
//     "title": "JavaScript: The Good Parts",
//     "author": "Douglas Crockford",
//     "published": 2008
//   }
// }

const jsonString = '{"book": {"title": "JavaScript: The Good Parts", "author": "Douglas Crockford", "published": 2008}}';
const convert = JSON.parse(jsonString);
console.log(convert.book.title);


//-----------------QUESTION 2-------------//
// Convert the following JavaScript object into a JSON string.
// const user = {
//   name: "Ali",
//   age: 25,
//   skills: ["HTML", "CSS", "JavaScript"]
// };

let transform =  {name: "Ali", age: 25, skills: ["HTML", "CSS", "JavaScript"]};
console.log(JSON.stringify(transform));


//------------------- QUESTION 3 ------------------//
// using the following JSON object, write a function to return the name of the second employee.
// {
//   "employees": [
//     { "name": "ali", "age": 30 },
//     { "name": "Daniyal", "age": 25 },
//     { "name": "hamza", "age": 35 }
//   ]
// }

function employee (){
  const emp = {
  "employees": [
  { "name": "ali", "age": 30 },
  { "name": "Daniyal", "age": 25 },
  { "name": "hamza", "age": 35 }
  ]
   }
  return emp
}
let result = employee()
let output = result.employees[1].name
console.log(output);

//----------------- QUESTION 4--------------------//

// Write a function that takes a JSON string representing an array of numbers and returns the sum of
// those numbers.

let adc = '[1,2,3,4,5,6]';
let arr:number[] = JSON.parse(adc);
function calculate (arrr:number[]){
return arrr.reduce((sum:number,num:number)=>sum + num)
 
}
console.log(calculate(arr));

//----------------- QUESTION 5----------------//
// Given the following JSON array of objects, write a function to filter out users who are not active.

// [
//   { "name": "Ali", "active": true },
//   { "name": "Batool", "active": false },
//   { "name": "kinza", "active": true }
// ]

const Data ='[{"name": "Ali", "active": true},{"name": "Batool", "active": false},{"name": "Kinza", "active": true}]'
const filterData = JSON.parse(Data);
function filtringData(user:any){
  return user.filter((user: { active: boolean; }) => user.active);
}
console.log(filtringData(filterData))