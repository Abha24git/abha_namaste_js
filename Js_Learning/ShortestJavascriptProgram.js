//Only empty file is called the Shortest Javascript Program.


//This below code to understand window and this

//window
//global execution context created
//this
//global execution context created

//  this === window   
//true

//anything which is not inside the function 
// is global space except local space

var a = 10;

console.log(a);
b();

function b() {
    var x = 1;
    console.log(x);
}

console.log(window.a);
//10

console.log(this.a)
//10

console.log(window.b);
// //ƒ b() {
//     var x = 1;
//     console.log(x);
// }

console.log(this.b);
// //ƒ b() {
//     var x = 1;
//     console.log(x);
// }

console.log(window.b());
//1

console.log(this.b());
//1