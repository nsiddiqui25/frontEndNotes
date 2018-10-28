//GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

//FUNCTION SCOPE
function test(){
   var a = 4;
   let b = 5;
   const c = 6;
   console.log('Function Scope: ', a, b, c);
}
test();

//BLOCK LEVEL SCOPE - for if-statements, loops, and anything wrapped inside curly-braces
   //IF STATEMENTS
   if(true){
      var a = 7;
      let b = 8;
      const c = 9;
      console.log('Block Scope: ', a, b, c);
   }
   //FOR LOOP
   for (let a=0; a<10; a++){
      console.log(`Block-level scope for-loop with let: ${a}`);
   }
   for (var a=0; a<10; a++){
      console.log(`Block-level scope for-loop with let: ${a}`);
   }

//GLOBAL SCOPE OUTPUT
console.log('Global Scope: ', a, b, c,);

//var declared inside a block-level scope alters var in the global scope
//let/const have a block-level scope and var has a function scope