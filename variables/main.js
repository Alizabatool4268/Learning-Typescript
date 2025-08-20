// ------------- DECLARING VARIABLES --------------//
var message = ("Hi wanna learn typescript today");
console.log(message);
var user = ("aliza");
console.log(user);
// var should not be used as it is not good for our program
//------------------ STRONG TYPING ----------------------//
var userName = "aliza";
console.log(userName);
var digit = 12;
console.log(digit);
var iSactive = true;
console.log(iSactive);
// ------------------ TYPE INFERENCE -------------//
var theme = "dark"; // write the code in vscode and hover your mouse on the variable you will see
// let theme: string; 
// we have not defined the type how can we see the variable type as string?
// this is because of typescripts type inference.
var num = 1;
console.log(num);
console.log(1 + "" + 2);
console.log(5 + 4 + "7");
console.log("12" + true);
console.log(1 - 3 + "78");
