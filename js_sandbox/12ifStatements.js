/*
If Statements - conditional - used to evaluate some kind of condition and then perform an action based on that condition; or perform another action if that conditions is not met

Syntax:
if(givenCondition) {
   doSomething
} else {
   doSomethingElse
}

if(givenCondition) {
   doSomething
} else if (givenCondition) {
   doSomethingElse
} else {
   doSomethingElse for any other condition
}
*/

const id = 100;


// IF STATEMENTS
if(id == 100) {
   console.log('correct');
} else {
   console.log('incorrect');
}

if(id != 100) {
   console.log('correct');
} else {
   console.log('incorrect');
}

if(id !== '100') {
   console.log('correct');
} else {
   console.log('incorrect');
}

// ELSE IF STATEMENTS
if (id > 150){
   console.log('your id is greater than 150');
} else if (id < 100) {
   console.log('your id is less than 100');
} else {
   console.log(`your id is ${id}`);
}

const color = 'red';
if(color === 'red'){
   console.log('color is red');
} else if (color === 'blue'){
   console.log('color is blue');
} else {
   console.log('color is not red or blue');
}

const name = 'Steve';
let age = 18;

//create an if else statement
   //if age is between 0 and 12, print that name is child
   //if age is between 13 and 19, print that name is teenager
   // else name is adult
if(age>0 && age<=12) {
   console.log(`${name} is a child`);
} else if (age >=13 && age<=19){
   console.log(`${name} is a teenager`);
} else {
   console.log(`${name} is an adult`)
}

// under 16 or over 65 can't participate in race
if(age<16 || age>65){
   console.log(`${name} cannot participate in 200k triathalon`);
} else {
   console.log(`${name} is registered for the race`);
}

//TERNARY OPERATOR - short way of doing conditionals
console.log(id === 100 ? "correct" : "Incorrect");

//without braces
if (id===100)
   console.log('correct without braces');
else 
   console.log('incorrect without braces');