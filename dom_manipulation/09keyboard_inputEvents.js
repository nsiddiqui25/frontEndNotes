const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// form.addEventListener('submit', runEvent);

//clear input
// taskInput.value = '';

//KEYBOARD EVENTS
   // //keydown
   // taskInput.addEventListener('keydown', runEvent);
   // //keyup
   // taskInput.addEventListener('keyup', runEvent);
   // keypress
   // taskInput.addEventListener('keypress', runEvent);

//OTHER INPUT EVENTS
//focus
   taskInput.addEventListener('focus', runEvent);
//blur
   taskInput.addEventListener('blur', runEvent);
//cut
   taskInput.addEventListener('cut', runEvent);
//paste
   taskInput.addEventListener('paste', runEvent);
//input
   taskInput.addEventListener('input', runEvent);
//change - used on a select tag/list
   select.addEventListener('change', runEvent);




//Event Handler
function runEvent(e){
   console.log(`EVENT TYPE: ${e.type}`);

   // console.log(taskInput.value);
   // heading.innerText = e.target.value;
   e.preventDefault();
}