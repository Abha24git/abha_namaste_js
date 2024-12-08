// console.log(a);
// //Gives RefernceError can not access 'a' before initialization.
// console.log(b);
// //undefined
// let a = 10;
// var b = 100;

// let a = 10;
// console.log(a);
// var b = 100;

// //For the let variables there will be separate reserve object as "Script"
// //Script
//     // a: 10
// //Global
// // b: 100    


// console.log("Do check");
// let a = 10;
// let a = 10;
// console.log(a);
// var b = 100;

// //Rejected upfront.It will not execute any line of code fromm this .js file if any duplicate let ddeclaration and initialization exists
// //Throw error and no an log in cosole window.

// console.log("It will not throw any error");
// var a = 10;
// var a = "10";
// console.log(a);
// var b = 100;

// //No any error, It will not throw any error

// console.log("It will throw error");
// let a;
// const b;
// b =1000;
// a = 10;
// console.log(a);
// //It will throw error no any single line execute, Missing initializer in const declaration.

console.log("It will throw error");
let a;
const b = 100;
b =1000;
a = 10;
console.log(a);
//It will throw error but execute the line before erroreos line, Assignment to constant variable

// The best way to avaoid these errors awlays declare these at top in the files before use