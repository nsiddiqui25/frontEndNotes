/*
DOM Selectors

- DOM methods allow us to pull things from the DOM and perform various actions with the elements or nodes
   - Single Element Selectors
      - will allow you to grab 'one' element by its class, id, or tag name
      - by default it'll grab the first one, if multiple classes or tags are present
      - querySelector() - newer and much more powerful
         - we can use using class, id, or tag names
   - Multiple Element Selectors
*/

/*************************************************** */
// document.getElementById()

console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Changing Styles
// document.getElementById('task-title').style.background = 'yellow';
// document.getElementById('task-title').style.color = 'purple';
// document.getElementById('task-title').style.padding = '5px';

//DRY - don't repeat yourself
const taskTitle = document.getElementById('task-title');

//changing style
taskTitle.style.background = 'yellow';
taskTitle.style.color = 'purple';
taskTitle.style.padding = '5px';

//changing content
taskTitle.textContent = 'Task Lists';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<h2>H2 Tasks</h2>';

//getElementByClass
//getElementByTagName

/*************************************************** */

//document.querySelector()

//get element by id
console.log(document.querySelector('#task-title'));
//get element by className
console.log(document.querySelector('.card-title'));
//get element by tag
console.log(document.querySelector('h5'));


//working with list items using querySelector()
document.querySelector('li').style.color = 'red';
   //working with nested elements
   document.querySelector('ul li').style.color = 'blue';

//to select the last li
document.querySelector('li:last-child').style.background = 'cyan';

//select the 3rd li
document.querySelector('li:nth-child(3)').style.background = 'orange';
//select the 4th and change textContent to 'Hello World'
document.querySelector('li:nth-child(4)').text = 'Hello World';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';