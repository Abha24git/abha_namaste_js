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
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
    return y;
}
var z = x();
z();//This is known their the lexical scope and where its defined .
//7