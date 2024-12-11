// function outer()
// {
//     var a=10;
//     function inner()
//     {
//         console.log(a);
//     }
//     return inner;
// }

// outer()();//This is calling first outer then its inner function
// var p = outer(); p(); //Both line 11 and 12 is same.
//10

// var b = 100;
// function outer(b)
// {
//     var a=10;
//     function inner()
//     {
//         console.log(a,b);
//     }
//     return inner;
// }

// outer(b)();//This is calling first outer then its inner function
// //10 100

// function outest(c) {
//     var b = 100;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c);
//         }
//         return inner;
//     }
//     let a = 10;
//     outer(b)();//This is calling first outer then its inner function
//     //10 100
// }

// outest(1000);
// //10 100 1000

// function outest(c) {
//     var b = 100;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c);
//         }
//         return inner;
//     }
//     outer(b)();//This is calling first outer then its inner function
// }

// let a = 1000;
// outest(1000);
// //1000 100 1000 //First its trying to get the value of a from its closure level outer if not then outest if not then it will try to get from global either not found then error. 
// // if its not there trying to get it from the global scope.

// //Data Hiding
// function counter()
// {
//     var count = 0;
//     function incrementCount()
//     {
//         count++;
//     }
// }
// console.log(count);//Error : CrazyJavascriptInterviewQuestion.js:70 Uncaught ReferenceError: count is not defined

// //Data Hiding
// function counter() {
//     var count = 0;
//     return function incrementCount() {
//         count++;
//         console.log(count);
//     }
// }
// // counter()();//1 Here count is hidden.
// // or
// var counter1 = counter();
// counter1();//1
// counter1();//2
// var counter2 = counter();
// counter2();//This is going to create new closure independently. //1

// //Data Hiding
// //Constructor function using to make the above code more scalable
// function Counter() {
//     var count = 0;
//     this.incrementCount = function () {
//         count++;
//         console.log(count);
//     }
//     this.decrementCount = function () {
//         count--;
//         console.log(count);
//     }
// }
// // var counter1 = Counter().incrementCount;
// // counter1();//Uncaught TypeError: Cannot read properties of undefined (reading 'incrementCount')
// // var counter2 = counter().decrementCount;
// // counter2();

// var counter1 = new Counter();//counter is constructor function hence need to use "new" keyword to create the object and further use.
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.decrementCount();

//Garbage collector with closure
var m = 1000;
function a() {
    var x = 10;
    var y = 100;//y is garbage collected smartly.
    return function b() {
        console.log(x);
        console.log(m);
    }
}

a()();
/*
Once b is going to execute it will form the closure on a and the x will be the part of it.
Once b will be executed the a will be garbage collected.
The y is garbage collcted once a is executed but x is not since its going to use further due to closure. 
 */