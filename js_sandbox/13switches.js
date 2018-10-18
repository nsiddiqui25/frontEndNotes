/*
SWTICHES - another way to validate conditions, works the same way as an if-statement
-use case for switches - in order to avoid repeating "else if" over and over again, when there are multiple cases
*/

//example 1
const color = 'red';
switch(color) {
   case 'red':
      console.log('color is red');
      break;
   case 'blue':
      console.log('color is blue');
      break;
   default:
      console.log('Color is not red or blue');
}

//example 2
let day;

switch(new Date().getDay()) {
   case 0:
      day = 'Sunday';
      break;
   case 1:
      day = 'Monday';
      break;
   case 2:
      day = 'Tuesday';
      break;
   case 3:
      day = 'Wednesday';
      break;
   case 4:
      day = 'Thursday';
      break;
   case 5:
      day = 'Friday';
      break;
   case 6:
      day = 'Saturday';
      break;
}
console.log(`Today is ${day}`);