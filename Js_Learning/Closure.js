// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();
// //7
// //function inside function is called closure.
// //MDN web doc.


// function x() {
//     var a = 7;
//     var y = function () {
//         console.log(a);
//     }
//     y();
// }
// x();
// //7


// //Function can be provdied as input parameter to function.
// function x() {
//     var a = 7;
//     // y();
// }
// x(function y() {
//     console.log(a);
// });
// x();
// //

//Function can be return from function.
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
//     return y;
// }
// var z = x();
// z();//This is known their the lexical scope and where its defined .
//7

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     y();
//     return y;
// }
// var z = x();
// z();
// //100

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        a = 100;
        y();
        return y;
    }
    x();
    return x;
}
var p = z();
console.log(p);

//100 900

//Closure are used in
/*
Module Design Pattern
Currying
Data Hiding
Functions like once
Memoize
Maintaining state in asynch world
Settimeouts
Iterators
and many more........

Disadvantage:
Overconsumption of memory.
The close variable can not be garbage collected till the execution completed.
 */
