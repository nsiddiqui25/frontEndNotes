/*
Functions
   -control structure
   -blocks of code that can be defined, then called at a later time; in some cases, defined and called at the same time
   -functions take in parameters, which can later be passed as arguments when the function is called
*/


//FUNCTION DECLARATIONS
function greet1(){
   //anything inside here is a function scope
   console.log('Hello');
}
greet1();

   //The 'Return' keyword
   function greet2(){
      return 'Hello return keyword';
   }
   console.log(greet2());
   alert(greet2());

   //Parameters and Arguments
      // parameter - a variable in a method definition (function)
      // arguments - data you pass into the method's parameters

   function greet3(firstName, lastName){
      return 'Hello ' + firstName + ' ' + lastName;
   }
   console.log(greet3());
   console.log(greet3('John', 'Smith'));

      //default values - pre ES6
      function greet4(firstName, lastName){
         if(typeof firstName === 'undefined'){firstName = 'John'}
         if(typeof lastName === 'undefined'){lastName = 'Smith'} 
         return 'Hello ' + firstName + ' ' + lastName;
      }
      console.log(greet4());
      console.log(greet4('Mota', 'Bhai'));

      // default values - es6
      function greet5(firstName = 'John', lastName = 'Smith'){
         return 'Hello ' + firstName + ' ' + lastName;
      }
      console.log(greet5());
      console.log(greet5('Patla', 'Bhai'));






//FUNCTION EXPRESSIONS
      //it's putting a function in a variable
      //it can be named or anonymous
const square = function(x){
   return x*x;
}
console.log(square(8));





// IIFE (Immediately Invokable Function Expressions)
(function(){
   console.log('IIFE ran....');
})();

(function(name){
   console.log('Hello ' + name);
})('IIFE with param');




//Property methods
   //functions inside objects

   const todo = {
      add: function(){
         console.log('add todo');
      },
      edit: function(id = 'default id'){
         console.log(`Edit todo ${id}`);
      }
   }
   todo.add();
   todo.edit(22);