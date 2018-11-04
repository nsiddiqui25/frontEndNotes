/*
EVENT LISTENERS AND THE EVENT OBJECT

How to add an event-listener to the clear-task btn
*/
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//    console.log('Hello World');
//    e.preventDefault();
// })


//in addition to putting anonymous function as a second parameter, we can use named function
document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
   // console.log('clicked');
   let val;

   val = e;

   //EVENT TARGET ELEMENT
   val = e.target;
   val = e.target.id;
   val = e.target.className;
   val = e.target.classList;
   e.target.innerHTML = 'Hello';

   //EVENT TYPE
   val = e.type;

   //TIMESTAP
   val = e.timeStamp;

   //coordinate events relative to the window
   val = e.clientY;
   val = e.clientX;

   //coordinate events relative to the element
   val = e.offsetY;
   val = e.offsetX;

   console.log(val);
   e.preventDefault();
}