getName();
console.log(x);
console.log(getName);

getNameVaribleFunction();//Hoisting.js:5 Uncaught TypeError: getNameVaribleFunction is not a functionat Hoisting.js:5:1
getNameArrowFunction();//Hoisting.js:5 Uncaught TypeError: getNameVaribleFunction is not a functionat Hoisting.js:5:1

// shift+alt+f
function getName() {
    console.log("Namste Javascript");
    // alert('Hi');
}

var getNameVaribleFunction = function() {
    console.log("Namste Javascript");
    // alert('Hi');
}

//Arrow function
var getNameArrowFunction =()=> {
    console.log("Namste Javascript");
    // alert('Hi');
}


var x = 97;