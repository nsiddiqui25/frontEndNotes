const x = 5;
const y = 9;

let val;

/*
COMPARISON OPERATORS

OPERATOR       NAME
====================
>              greater than
>=             greater than or equal to
<              less than
<=             less than or equal to
==             equal to
!=             not equal to
===            equal to in value AND type
!==            not equal to in value AND type
*/

/*
LOGICAL OPERATORS
OPERATOR       NAME
===================
&&             AND
||             OR
!              NOT
*/
val = (x < 10) && !(x !== 5);
val = (y < 9) || (x === 5);



//OUTPUT
console.log(val);