// Q1 ..Difference between “ == “ and “ === “ operators.

// ""=="" operator is used to check the value of two different variables...
// let a=5;
// let b=5;
// console.log(a==b);
// the out is true because the == operator only check the value .. if we change the value of anyone variable then the out if false because after change the value the both variable value is not same to eachother...

// ""==="" operators is used to check the value and also the datatype the variables..
// let a="5";
// let b="5";
// console.log(a===b);the out is getting true because the === opeartor ckecks the value and also the datatypes...
// if we change the datatypes of any variable the output is false...
// the main difference between ==,=== opeartor is 

// the == opeartor only check the value but the === operator checks both value and the type the type of variable





// Q2..What are the differences between var, let and const?


// var is the global scope variable ...
// reassign and redeclaration  of variables both are done by the help of var..
// var a=50;
// var a=60;
// console.log(a);there is no eroor present in this code because of var..

// let is the block scope variable...
// let is reassign but not declared the same variable..
// let a=50;
// let a=60;
// console.log(a);
// there was a error show in let because the let is not redclare the variable 
// const is also the block scope variable..

// const is the block level variable 
// const is not reassign or redeclare the variable it remain constant ..
// const a=50;
// const a=60;
// console.log(a);
// there was a eroor present in the code because of const 

// Q3..How many operators do we have in JS ? 


// 1.arithmatic oprator(+,-,%,/,*)
// let a =90;          arithmatic operators..
// let b =5;
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);
// 2.= assignment opearators(+= ,-= ,*=, %=, **=)
// these all are assignment operators

// let a = 6;
// console.log(a+=1);  a=a+1 shortcut method is a+=1

// let a= 40;
// let b =20;
// a+=4; 
// // a=a+4 this is the mean of a+=4;
// console.log(a);

// example of -=
// let a= 40;
// let b =20;
// a-=4; 
// // a=a-4 this is the mean of a-=4;
// console.log(a);

// example of *=
// let a= 40;
// let b =20;
// a*=4; 
// // a=a*4 this is the mean of a*=4;
// console.log(a);

// example of /=
// let a= 40;
// let b =20;
// a/=4; 
// // a=a/4 this is the mean of a/=4;      print the remainder
// console.log(a);

// comparision operators
// equal to ==;
// equal to &type ===;
// not equal to !=;
// not equal to &type !==

// > greater than 
// >= greater than or equal to
// < less than
// <= less than or equal to
// forrrr ==;
// let a = 5;
// let b = 3;
// console.log(a==b); the return is false because both the variables are not equal to each other 

// let a = 5;
// let b = 5;
// console.log(a==b); both thevariables are same  the value is true because the both values is equal to each other

// for !=;
// let a = 5;
// let b = 5;
// console.log(a!=b); the output is false because both variables value is  same to each other;

// let a = 5;
// let b = 2;
// console.log(a!=b); the output is true because both the variables value is differ to each other;

// === this  check both the value and data types also 
// let a = 5; 
// let b = "5";
// console.log(a===b);
// let a = 5; number form
// let b = "5";string form
// console.log(a===b); the output is false because this sign checks both type and value also

// logical operator (&&,||)
// && operator:
// let a =5;
// let b =6;
// console.log(a<b&&b>a); the out put is true because both the condition is witten is true way

// let see if one condition is not true
// let a =5;
// let b =6;
// console.log(a>=b&&b>a); both the condition is notb true then the out is false beacuse in && operators both condition is written in truely way then the out put is true

// || or or operators in this only one condition is witten in trully way 

// let a =5;
// let b =6;
// console.log(a>=b||b>a); both the condition is not true but the output is true beacuse in || operators both condition is  notn written in truely way then the out put is true

// ternary operator 
// it is type os operator firstly it ckecks the condition if the condition is true then the first expression is execute



// Q4.. Difference between undefined vs not defined vs NaN
// undefined means the variable is declared but value is not asssign to that variable so in this case we get the undefined output
// not defined means if the variable is not declare then it will show the error not defined
// Nan  is a syntax error not a number error.. 

// Q5 ..what is hoisting in js .. 

// A default behaviour that moves variables and fuctions declaration to the top of their scope before the code is executed 

// Q6 ..what is exicution context? 
// Execution Context is the environment in which JavaScript code is executed.

// Q7 ..what is creation phase and execution phase..
// Creation phase ...
// During this initial phase the JavaScript engine sets up the necessary components for the execution context.
// Execution Phase ...
// Once the creation phase is complete, the execution phase begins. Here, the JavaScript engine executes the code line by line within the execution context.

// Q8 ..expalin local scope,block scope ,functional scope and scope chain in javascript
//  localblock scope
// these  variables are typically defined within a function
//  block scope 
// it is created within code blocks like if , for , or while statements.
//  scope Chain 
// The scope chain in JavaScript is formed when functions are nested within other functions.
// functional scope 
//  it is the concept that variables defined inside a function are only accessible within that function