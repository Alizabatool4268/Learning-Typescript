# VARIABLES 
Variables in typescript are like containers that store data. 
### Example
we have all seen containers of salt, sugar and spices etc. In real life these containers sre storing some kind of eatable item in them. In typescript these containers are known as variables and the etable item is known as data

#### check out the main.ts file and see how to declare a variable

# Type inference
Type inference is the typescripts power to define the type of the variable by its value.
we get something like 
let message = "hello";
by hovering the cursor on the message we can see somethoing like (let message:string;)
#### check the main.ts file

# Strong typing/Type annotations
Whenever we define the type of the variable ourselves it is known as strong typing and the defined typed is named as type annotations

lets understand it 

let message : string = "Aliza";
Here the whole line of code will be considered as strongly typed because in this line we have specified the line of code with a type string it means that the variable message will not accept any other value eccept string. If we enter any other value the execpt string typescript will give an error.

The (:string) which we put infront of the variable message is know as an type annotation its just a name.


