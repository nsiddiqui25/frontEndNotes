/*
DOM Selectors

- DOM methods allow us to pull things from the DOM and perform various actions with the elements or nodes
   - Single Element Selectors
      - will allow you to grab 'one' element by its class, id, or tag name
      - by default it'll grab the first one, if multiple classes or tags are present
      - querySelector() - newer and much more powerful
         - we can use using class, id, or tag names
   - Multiple Element Selectors
      - will allow you to grab all elements with the same class and return an HTML collection or a node-list, depending on which selector your use
      getElementsById()
      getElementsByClassName()
      getElementsByTagName()
         - returns an HTML Collection
         - needs to be converted into an Array, in order to perform array methods like forEach() or map()

      querySelectorAll()
         - returns node-list
*/

/* ********************************************************** */

// // document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello World';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

/* ********************************************************** */

// // document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// // console.log(lis);
// lis[0].style.color = 'blue';
// lis[2].textContent = 'Tag Name';

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li){
//    console.log(li.className);
// })
//    //we can also change the textContent of the lis
//    lis.forEach(function(li){
//       li.textContent = 'Hello';
//    })
//    //pass an index and set it to a template string
//    lis.forEach(function(li, index){
//       li.textContent = `${index}: Hello`;
//    })

// console.log(lis);

/* ********************************************************** */

// document.querySelectorAll
   //it returns a node-list, and there's a difference
      //a node-list, not only counts the elements, but also things like text-nodes
      //also allows for array methods without having to convert them

const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items)

items.forEach(function(item, index){
   item.textContent = `${index}: Hi there!`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
   //odds with a forEach
   liOdd.forEach(function(li){
      li.style.background = '#ccc';
   })
   //even with forLoop
   for(let i = 0; i < liEven.length; i++){
      liEven[i].style.background = 'yellow';
   }