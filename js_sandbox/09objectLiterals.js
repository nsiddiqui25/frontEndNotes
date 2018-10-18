const person = {
   firstName: 'Nabeel',
   lastName: 'Haduken',
   age: 13,
   email: 'cuteguy@aol.com',
   hobbies: ['coding', 'family time', 'sleeping'],
   address: {
      city: 'chicago',
      state: 'il'
   },
   BirthYear: () => {
      return 1986
   }
}
   //curly braces define this variable as an Object Literal
   //inside the curly braces we put 'KEY: VALUE' pairs that are seperated by commas,
   //functions stored inside objects are called methods

let val;
val = person;

//get specific value
val = person.firstName;
   //another way of doing the same thing, but not recommend
   val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
   //another way of dong this, but not recommended
   val = person.address['city'];
val = person.BirthYear();

//in object literals, we can access other properties
   // THIS keyword
   const person2 = {
      age: 32,
      getBirthYear: function(){
         return 2018 - this.age
      }
   }
   val = person2.getBirthYear();

//ARRAYS MADE MADE OF OBJECTS
const people = [
   {name: 'Bob', age: 54},
   {name: 'Tim', age: 14},
   {name: 'Wes', age: 23},
   {name: 'Ray', age: 56},
   {name: 'Jim', age: 67},
   {name: 'Messi', age: 34}
]
   for (let i=0; i < people.length; i++){
      console.log(people[i]);
   }



//OUTPUT
console.log(val);