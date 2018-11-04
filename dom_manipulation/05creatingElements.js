/*
CREATING ELEMENTS
-create elements and add attributes classes/ids
-then insert them into the DOM

-we'll be adding an extra li at the bottom
*/

//create element
const li = document.createElement('li');

//add class
li.className = 'collection-item';

//add id
li.id = 'new-item'

//add attributes
li.setAttribute('title', 'New Item');
   //add an attribute of 'title' and giving it a value of 'new item'

// create a text node and append
   //we want to add something inside the li
   //the appendChild() method is used when we want to put something inside of something else
const textNode = document.createTextNode('Hello World!')
li.appendChild(textNode);

//append li as a child to the ul
// document.querySelector('ul.collection').appendChild(li);

//create new link element
const link = document.createElement('a');
   //add classes
   link.className = 'delete-item secondary-content';
   //add attribute
   link.setAttribute('href', '#')
   //add icon
   link.innerHTML = '<i class="fa fa-remove"></i>';

//append link to li
li.appendChild(link);

//append li as child to the ul
document.querySelector('ul.collection').appendChild(li);


//OUTPUT
console.log(li);
console.log(link);