# JSON OBJECTS

## BASIC INTRODUCTION

JSON stands for javaScript object notation. JSON is a text-based data format that is used to store and transfer data. It is used to transfer data from server to client.
JSON objects are most commonly used as they are easily readable and understandable.It can be used in other programing languages.JSON objects are declared in curly bracets{}.
It is in key/values pairs.


#### Syntax of JSON objects
```
let json = {
  "name": "Aliza",
  "age": 17,
  "student": true,
};
console.log(json);
```
## DIFFERENCE BETWEEN JAVASCRIPT OBJECTS AND JSON OBJECTS
JavaScript objects
```
let obj = {
    name:"aliza",
    age:17,
    student:true
}
console.log(obj);
```
JSON objects
```
let jsonObj = {
  "name": "Fatima",
  "age": 19,
  "student": false,
};
console.log(jsonObj);
```
### DIFFERENCE

Some of the main differences are as follows
1) The key difference is of syntax.
2) javascript objects can contain functions but json objects can not.
3) javascript objects can not be used in multiple languages but JSON objects can be used.


# ACCESSING JSON DATA 
There are two methods to access data in JSON fromat
FRIST METHOD
```
let jsonObjCar = {
    "name":"lamborgini",
    "color":"black",
};
console.log(jsonObjCar.name);
console.log(jsonObjCar.color);
```
SECOND METHOD
```let jsonObjCars = {
    "name":"Corolla",
    "color":"black", 
};
console.log(jsonObjCars["name"]);
console.log(jsonObjCars["color"]);
```
