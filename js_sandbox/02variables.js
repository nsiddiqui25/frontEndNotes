/*

var - been around since the beginning of JS
let
const


*/

//declaring variable
var name = 'sam';
console.log(name);
name = "nabeel";
console.log(name);

//initializing variable
var greeting;
console.log(greeting);
greeting = 'hello everybody';
console.log(greeting);


/* 
Rules/Conventions of JavaScript
   - variables can include letters, numbers, _, and $
   - cannot start with a number
   - multiword conventions
      - camelCasing
      - PascalCasing
      - underscore_casing
*/

//let
let favoriteSport;
favoriteSport = 'basketball';
console.log(favoriteSport);
favoriteSport = 'soccer';
console.log(favoriteSport);


//const - stands for constant = meaning that it can't be changed/reassigned
const nickname = 'nubs';
console.log(nickname);
// nickname = 'bubs';
// console.log(nickname);
// const noValueHere;

   // quirk - working with objects
   const person = {
      name: "rodney rodnington",
      age: 32,
      height: "5'4"
   }
   console.log(person);

   person.name = 'sara';
   person.age = '16';
   console.log(person);


   // working with arrays
   const array = ['bob','rob','sam','tim','jim','joe','ron','jon','tom','fin','Laquisha'];
   console.log(array);
   console.log(array[10]);
   
   array.push('Michael Jordan');
   console.log(array);






   

