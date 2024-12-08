console.log(a);//
// undefined

if (a === undefined) {
    console.log("a is undefined.");
}
else {
    console.log("a is not undefined.");
}

//a is undefined.

var a = 7;

if (a === undefined) {
    console.log("a is undefined.");
}
else {
    console.log("a is not undefined.");
}

//a is not undefined.

//JS is loosly typed language since we can assign
//assign any value eg.: 
var b;
console.log(b);
b = "a";
console.log(b);
b = 97;
console.log(b);
b = true;
console.log(b);

console.log(x);
//x is not defined

var y = undefined;//This is not good pratice.


