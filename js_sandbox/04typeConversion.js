/*
Type Conversion - taking a variable and chaging the data type
*/

let val;

val = 555;
// number to string
val = String(555);
val = String(4+4);
//boolean to string
val = String(true);
//date to string
val = String(new Date());
//array to string
val = String([1,2,3,4,5]);
// toString() method
val = (5).toString();
val = ('bob had a lamp').toString();


//string to number
val = Number('5');
//booean to number
val = Number(true);
val = Number(false);
//null to number
val = Number(null);
   //if we try to parse null as a number, value will always be returned '0'
val = Number('hello');
val = Number([1,2,3]);

//parse method
val = parseInt('100.30');
val = parseFloat('100.329587239487294873');

//Output
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(5));
// console.log(val.length);

/*
Type Coersion - JavaScript will do for us
   -we take one type of data and change it to another
*/

const val1 = String(5);
const val2 = 6;
const sum = (val1 + val2);

// new output
console.log(sum)
console.log(typeof sum);