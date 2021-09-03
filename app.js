const a= 5; //const : constant -> cant update Variable Data.

let myName = "WJ"; // let : can update Variable Data.

var b = 5; //var : variable : past Variable type, can Update Data, but not protect Data. So recommand use const, let.

console.log( a + 1);
console.log(b+2);
console.log("My name is " + myName);

myName = "WooJin";
console.log("My name is " + myName);
b = 2;
console.log(b+2);

