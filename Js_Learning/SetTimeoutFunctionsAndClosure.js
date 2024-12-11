// function x() {
//     var i = 1;
//     setTimeout(
//         function () {
//             console.log(i);
//         }, 7000);
//         console.log("Namstey Javascript");
// }
// x();
// //It will print first 
// //Namstey Javascript
// //Then after 7 seconds
// //value of i e.g --> 1

// function x() {
//     var count = 1;
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(
//             function () {
//                 console.log(count);
//             }, i * 1000);
//             count++;
//     }
// }
// x();
// //5 Times print 6.

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(
//             function () {
//                 console.log(i);
//             }, i * 1000);
//     }
// }
// x();
// //5 Times print 6.

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(
//             function () {
//                 console.log(i);
//             }, i * 1000);
//     }
// }
// x();
// /*
// 1
// 2
// 3
// 4
// 5
//  */

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(p) {
            setTimeout(
                function () {
                    console.log(p);
                }, i * 1000);
        }
        close(i);
    }
}
x();
