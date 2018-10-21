/*
GENERAL LOOPS AND ITERATION

LOOPS
-an instruction that repeats until a specific conditon is reached/met
-used to run the same block of code using different values each time
-the most popular types of general loops
   1) for loops
      -takes in 3 paramaters, seperated by semi-colons
         1- the declaration of the variable
         2- condition
         3- increment (i++ is the same as i = i + 1)
   2) while loops
      - we set the variables outside the loop
      - while(condition){}
   3) do while loops
      - it's always going to run at least once, no matter what

-Looping through Arrays
   - forEach() takes in a callback function(anonymous), it can accept upto three parameters
      1. iterator - naming convention is similar to the name/syntax of the array
      2. index
      3. the actual entire array
   - map() - used to return something different, or a different array
-Looping through Objcts
   - for in - used to loop/iterate through objects we can get key-value pairs
*/

//FOR LOOPS
// for (let i = 0; i < 10; i++){
//    console.log(i);
// }
   //OTHER THINGS WE CAN DO
      //CONCAT
      // for (let i = 0; i < 10; i++){
      //    console.log('Number ' + i);
      // }
      //SKIP AN INTERATION/BREAK OUT OF LOOP
      for (let i = 0; i < 10; i++){
         //skip iteration
         if(i===5){
            // console.log(`${i} is my favorite number`);
            continue;
         }
         //break out of loop
         if(i===8){
            console.log('break out of loop');
            break;
         }
         console.log('number ' + i);
      }


//WHILE LOOPS
let i = 0;
while(i<10){
   console.log('while loop' + i);
   i++;
}



//DO WHILE LOOPS
let e = 0;
do {
   console.log('do while loop' + e);
   e++;
}
while(e<10);
   // example2
   let f = 100;
   do {
      console.log('do while example2 ' + f);
      f++
   }
   while (f < 10)


//ITERATING/LOOPING THROUGH ARRAY
const cars = ['Ford', 'Nissan', 'Honda', 'Toyota'];
for (let i=0; i<cars.length; i++){
   console.log(cars[i]);
}
//forEach() Method
   cars.forEach(function(car, index, theEntireGoshDarnArray){
      // console.log('forEach ' + car);
      console.log(`with index ${index}: ${car}`);
      // console.log(theEntireGoshDarnArray);
   })

//map() method
const users = [
   {id:12434523, name:'Rik'},
   {id:2342345432, name:'Sik'},
   {id:37846745, name:'Tik'},
   {id:423624562, name:'Bik'},
   {id:523634563, name:'Pik'},
   {id:62352352, name:'Nik'}
]
// create another variable called ids, and take the users array and create an array of the id's for the users
const ids = users.map(function(user){
   return user.id;
})
console.log(ids);


//Iterating through Objects using 'for in loop'
const user = {
   firstName: 'Champa',
   lastName: 'Chameli',
   age: 89,
   decentHumanBeing: false
}
for(let x in user){
   // console.log(x);
   // console.log(user[x]);
   console.log(`${x} : ${user[x]}`);
}