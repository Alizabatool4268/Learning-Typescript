// ------------- DECLARING VARIABLES --------------//
let message = ("Hi wanna learn typescript today");
console.log(message);

const user = ("aliza");
console.log(user);
// var should not be used as it is not good for our program

//------------------ STRONG TYPING ----------------------//
let userName:string = "aliza";  // here :string annotates userNames type 
console.log(userName);

let digit:number = 12; // here :number annotates userNames type
console.log(digit);

let iSactive:boolean = true ; // here :boolean annotates userNames type 
console.log(iSactive);

// ------------------ TYPE INFERENCE -------------//
let theme = "dark"; // write the code in vscode and hover your mouse on the variable you will see
// let theme: string; 
// we have not defined the type how can we see the variable type as string?
// this is because of typescripts type inference.

let num = 125;
// type inference occurs here to

