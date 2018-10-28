//Traversing the DOM - moving up and down the DOM; we're dealing with parents and children of specific nodes or whatever we select

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

//Get Child nodes
val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;
   /*
   1 - Element
   2 - Attribute
   3 - Text node
   8 - Comment
   9 - Document, itself
   10 - Doctype
   */

//Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello World';


//get children of children
val = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';


//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

// get parent
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;

//get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// OUTPUT
console.log(val);