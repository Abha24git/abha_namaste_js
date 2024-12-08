// {}
//This is called block scope.
//This is used to combine multiple statement into a group statement.

// {
//     var a = 10;
//     let b = 100;
//     const c = 1000;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// /*
// 1. Block
//     b: 100
//     c: 1000
// 2. Global
//     a: 10
//  */

// var a = 1000;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// /*
// 1. Block
//     b: 20
//     c: 30
// 2. Global
//     a: 10

//     10
//     20
//     30

//     10//Since both are pointing to same memory location.
//  */

// let b = 1000;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(b);
// /*
// 1. Block
//     b: 20
//     c: 30
// 2. Global
//     a: 10

//     10
//     20
//     30

//     1000//Since both are pointing to same memory location and top b and block b has different Scope.
//     Top b in Script scope and 
//     another b in block scope.
//     b is not present in Global scope.

//     Here b is shadowing b.
//  */

// const c = 1000;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(b);
// /*
// 1. Block
//     b: 20
//     c: 30
// 2. Global
//     a: 10

//     10
//     20
//     30

//     1000//Since both are pointing to same memory location and top c and block c has different Scope.
//     Top c in Script scope and 
//     another c in block scope.
//     c is not present in Global scope.

//     Here c is shadowing c.
//  */

// let a = 1000;
// {
//     var a = 10;
// }

// console.log(a);
// //Identifier 'a' has already been declared
// /*
// This is illegal shadowing since a is already declared with let and again trying with var.
//Shadowing only applicable to let and const not with var.
//  */


var a = 1000;
{
    let a = 10;
}

console.log(a);
//1000
/*
This is also shadowing since a has Global scope and Script scope.
 */


