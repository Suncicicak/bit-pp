// function sum(a, b) {

//     function inner() {
//         console.log(this);
//         console.log("Inner");

//     }
//     inner();
//     return a + b;

// }


// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;

//     this.print = function() {
//         console.log(this.name, this.surname);

//     }
// }
// var pera = new Person('pera', 'peric');
// pera.print();

// console.log(pera);

// pera.name = 'zika';

// pera.print();


//CLOSURES

// function myFunc(param) {
//     var myInner = function () {
//         return param;
//     };

//     param++;
//     return myInner;
// }

// var inner = myFunc(123);
// inner();




// function add (a) {
//     var b = 2;

//     return function () {
//         return a + b;
//     }
// }

// var f = add (5);
// var res = f();
// console.log(res);


/////

function selection(a, f) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (f(a[i])) {
            newArray.push(a[i]);
        }
    }
    return newArray
}

function lessThan(n) {
    return function (x) {
        return x < n;
    }
}
var numbers = [2, 6, 23, 11, 89, 4, 5];
var numbersFiltered = selection(numbers, lessThan(10));
console.log(numbersFiltered);


// pro, Pro, PRo
function startsWithPro(s) {
    if (s.toLowerCase().indexOf('pro') == 0) {
        return true
    }
    return false;
}

var strings = ['programming', 'Product', 'abc', 'prot']
var filteredStrings = selection(strings, startsWithPro);
console.log(filteredStrings);