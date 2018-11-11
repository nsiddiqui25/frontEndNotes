
//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

//function to load all event listeners
function loadEventListeners(){
   //add task event
   form.addEventListener('submit', addTask);

   //remove task event
   taskList.addEventListener('click', removeTask);

   //clear task event
   clearBtn.addEventListener('click', clearTasks);

   //filter task event
   filter.addEventListener('keyup', filterTasks);

}

//Add Task
function addTask(e){
   if(taskInput.value === ''){
      alert('Add a task');
   }

   //Create li element
   const li = document.createElement('li');
   li.className = 'collection-item';
   li.appendChild(document.createTextNode(taskInput.value));

   //Create new link tag (a-tag)
   const link = document.createElement('a');
   link.className = 'delete-item secondary-content';
   link.innerHTML = '<i class="fa fa-remove"></i>';

   //append link to li
   li.appendChild(link);

   //append li to ul
   taskList.appendChild(li);

   //clear input
   taskInput.value = '';

   e.preventDefault();
}

//remove Task
function removeTask(e){
   // if (e.target.parentElement.classList.contains('delete-item')){
   //    e.target.parentElement.parentElement.remove()
   // }
   if (e.target.parentElement.classList.contains('delete-item')){
      if(confirm('Are you sure?')) {
         e.target.parentElement.parentElement.remove()
      }
   }
}


//Clear Tasks
function clearTasks(){
   // taskList.innerHTML = '';
   while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild)
   }
}

function filterTasks(e) {
   const text = e.target.value.toLowerCase();
   document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
         task.style.display = 'block';
      } else {
         task.style.display = 'none';
      }
   });
}