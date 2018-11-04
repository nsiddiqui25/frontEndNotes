/*
Mouse Events 
*/

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Mouse Events

//click
// clearBtn.addEventListener('click', runEvent);
//doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
//mousedown
// clearBtn.addEventListener('mousedown', runEvent);
//mouseup
// clearBtn.addEventListener('mouseup', runEvent);

//mouseenter
// card.addEventListener('mouseenter', runEvent);
//mouseleave
// card.addEventListener('mouseleave', runEvent);

//mouseover
// card.addEventListener('mouseover', runEvent);
//mouseout
// card.addEventListener('mouseout', runEvent);

//mousemove
card.addEventListener('mousemove', runEvent);

//Event Handler
function runEvent(e){
   console.log(`EVENT TYPE: ${e.type}`);
   e.preventDefault();

   // Exercise 1 - heading to display mouse coordinates, using offsetY and offsetX properties
   heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

   // Exercise 2 - display background RGB color using offset properties from our Event Object as parameters
   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},100)`;

}