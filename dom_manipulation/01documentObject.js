/*
properties are attributes of the DOM
selectors are the methods of the DOM

*/

let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

//Selecting stuff in our DOM without Selectors, not recommended but possible
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
// val = document.scripts[2].getAttribute('src');


//If we want to turn HTML Collections into arrays, to use forEach() method
let scripts = document.scripts;

// scripts.forEach(function(script){
//    console.log(script);
// })
   // error, because forEach is an array method
   // to convert use Array.from() method

let scriptsArray = Array.from(scripts)

scriptsArray.forEach(function(script){
   console.log(script);
   console.log(script.getAttribute('src'));
})

//OUTPUT 
console.log(val);