const firstName = 'William';
const lastName = 'Johnson';
const age = 48;

const str = 'Hello there Im a dev'
const tags = 'web-design,development,programming,sports'

let val;

//concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;

val = 'Hello, my name is ' + firstName + '. And Im ' + age + ' years old.';

//append - adding onto a variable without completely replacing it
val = 'Nabeel';
val += ' Siddiqui';

//escaping 
val = 'That\'s awesome, I can\'t wait';
// val = "That's awesome, I can't wait";

//length property
val = firstName.length;

//concat() method
val = firstName.concat(' ', lastName);

//change cases
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//treating strings like read-only arrays
   //finding specific characters/values using the index
val = firstName[5];

//indexOf() - to find the index of a value/char
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt() - the opposite of indexOf()
val = firstName.charAt('2');
val = firstName.charAt(firstName.length -1);

//substring() - pulling a substring from a string
val = firstName.substring(0,4);

// slice() - mostly use with Arrays to pull things out of them, but we can also use with Strings
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split() - splits a string into an array based on a seperator
val = str.split(' ');
val = tags.split(',');

//replace() 
val = str.replace('dev', 'Developer');

//includes() - gives a true/false value based on if something's in the string
val = str.includes('Hello');
val = str.includes('foo');

// OUTPUT
console.log(val);