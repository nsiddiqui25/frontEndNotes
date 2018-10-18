const name = 'Nabeel';
const age = 32;
const job = 'Developer';
const city = 'Chicago';

// Template literals - including HTML inside our JS

html = '<ul><li>Name: ' + name + '</li></ul>';
html = '<ul>' +
         '<li>Age: '+age+'</li>'+
         '<li>Job: '+job+'</li>'+
         '<li>City: '+city+'</li>'+
      '</ul>';


// with template strings using ES6
   //using backticks `` and $
   //much cleaner and easy to write

   function hello(){
      return 'hello';
   }

   html = `
      <ul>
         <li>Name: ${name}</li>
         <li>Age: ${age}</li>
         <li>City: ${city}</li>
         <li>Job: ${job}</li>
         <li>${4+4}</li>
         <li>${hello()}</li>
         <li>${age>30 ? "Over 30" : "Under 30"}</li>
      </ul>
   `

//OUTPUT IN HTML
document.body.innerHTML = html;