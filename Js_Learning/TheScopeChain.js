//Lexicle environment
// function a()
// {
//     console.log(b);
// }

// var b = 10;
// a();
// // 10

// function a()
// {
//     c();
//     function c(){
//     console.log(b);
//     }
// }
// var b = 10;
// a();

// //10

// function a()
// {
//     var b = 10;
//     c();
//     function c(){
//     console.log(b);
//     }
// }
// a();
// //10

function a()
{
    //Lexicle envoronment for a is this
    //1. Local
    //2. Global
    //
    var b = 10;
    c();
    //Lexicle envoronment for c is this
    //1. Local
    //     this: Window
    //2. Closure (a)
    //3. Global
    //
    function c(){
    console.log(b);
    }
}
a();
console.log(b);
//b is not defined