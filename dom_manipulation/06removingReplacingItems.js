/*
Removing and Replacing Items - Classes & Attributes
*/

// //Replace Items
//    //create element
//    const newHeading = document.createElement('h2');
//    //add id
//    newHeading.id = 'task-title';
//    //new text node
//    newHeading.appendChild(document.createTextNode('New Heading'));

//    //grab old heading we want to replace
//    const oldHeading = document.getElementById('task-title');
//    //get parent and store it in a variable
//    const cardAction = document.querySelector('.card-action');

//    //replace
//    cardAction.replaceChild(newHeading, oldHeading);
// console.log(newHeading);



// //Removing Elements

// //create variable for list items
// const lis = document.querySelectorAll('li');
// //create variable for ul
// const list = document.querySelector('ul');

// //remove using the remove() method
// lis[0].remove();

// //remove child element
// list.removeChild(lis[3]);




//CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
// console.log(firstLi.children[0]);
const link = firstLi.children[0];
// console.log(link);

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList.add('test');
val = link.classList.remove('test');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'www.yahoo.com');
val = link.hasAttribute('href');
val = link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link.removeAttribute('title');




console.log(val);



















