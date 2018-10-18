const numbers = [43, 56, 33, 23, 44, 36, 5];

   //conventional methods

const numbers2 = new Array(22,45,12,87,34);
   //using the array-constructor/array-object => new Array()

const age = [02, 3, 42, 15, 48];
const fruits = ['Apple','Banana','Orange','Pear'];

const mixedArray = [22, 'String', true, undefined, null, {a:1, b:'two'}, new Date()];

// console.log(numbers);
// console.log(numbers2);
// console.log(fruits);
// console.log(mixedArray);

let val;

//get array length
val = numbers.length;

//check if is array
val = Array.isArray(numbers);
val = Array.isArray('hello');

//get a single value
val = numbers[3];

//insert into array
numbers[2] = 100;

//find index of value
val = numbers.indexOf(36);




//MUTATING THE ARRAYS

//add onto the front of an array
numbers.unshift(120);
//take off from the front
numbers.shift();

//add on to the end
numbers.push(250);
//take off from end
numbers.pop();

//splice values
numbers.splice(1,3);

//reverse an array
numbers.reverse();

//concatenate arrays
val = numbers.concat(numbers2);

//sorting arrays
val = fruits.sort();

//sort numbers
val = age.sort();

//use 'compare function'
val = age.sort( (x,y) => {
   return x-y;
} )
val = age.sort( (min,max) => {
   return max-min;
} )

//find method (takes in a testing function)
   // to use the find method, we must first create a testing functions
   var under50 = (num) => {
      return num < 50;
   }
   val = age.find(under50);

//OUTPUT
// console.log(age);
console.log(val);
// console.log(numbers);