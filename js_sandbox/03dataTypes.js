//DATA TYPES IN JAVASCRIPT

// Primitive Types
   // data is stored in the location the variable accesses
   //stored on the stack (memory heap)
      //when we access that data, we access it by its actual value
// Reference Types
   //accessed by reference, not by the actual value
   //objects are stored on the heap, not in the variable
   //a pointer to alocation in memory


// Primitive Types
   // Strings - Text (sequences of characters)
   // Numbers - integers, decimals, floats
   // Booleans - true/false
   // Null - intentional empty value
   // Udefined - variable that hans't been assigned a value, yet.  All variables are undefined by default
   // Symbols (ES6)

// Reference Types
   //Arrays
   //Object Literals
   //Functions
   //Dates
   //Anything else of value that we can store


// JS is Dynamically Typed Language
   // types are associated with the actual values, not variables
   //same variable can hold multiple types
   // we don't need to specify types

/* PRIMITIVE TYPES */

//String
const name = 'nabeel';

//number
const age = 32;

//booleans
const hasKids = true;
const doesChores = false;

//Null
const car = null;

// undefined
let gotNothingToSay;

//Symbol
const sym = Symbol();




/* Reference Types/Objects */

//Array
   const hobbies = ['coding', 'reading', 'sport'];

//Object literals
   const address = {
      street: "222 this way",
      city: "chicago",
      state: "il"
   }
//Output
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);






   



















