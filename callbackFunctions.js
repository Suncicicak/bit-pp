


// function sqrCallback (n) {
//     return n*n;
// }

// function arraysqrCallback(a, f) {
//     var i = 0;
//     var b = [];
//     while (i < a.length) {
//         b[i] = f(a[i]);
//         i++;
//     } return b;
// }


// console.log(arraysqrCallback([2,3,-5,6], sqrCallback))

// function small () {
//     console.log("small");
    
// }

// function large () {
//     console.log("large");
    
// }

// function huge () {
//     console.log("huge");
    
// }



// function generetaNumber (x,f,g,h) {
//     if (x < 10) {
//         f();
//     } else if (x >10 && x < 1000) {
//         g();
//     } else {
//         h();
//     }
// }

// generetaNumber(15,small,large,huge)


// function sum(a,b) {
//     return a+b;
// }

// function sumOfArrays (a,b,f) {
//     var i = 0;
//     var c = [];
//     while (i < a.length) {
//         c[i] = f(a[i],b[i]);
//         i++;
//     } return c;
// }

// console.log(sumOfArrays([2,6,-5],[4,-15,4], sum))

// function f() {
//     function g() {
//         var x = 10;
//         function h() {
//             var x = 20;
//             console.log(x)
//         } 
//         console.log(x)
//     }
//     console.log(x)
// } 

// console.log(x)

// function f(name, surname) {
//     return function (mail) {
//         console.log(name + "." + surname + mail)
//     }
// }

// f("suncica","tomic") ("@hotmail.com")

(function (a) {
    var i = 0;
    b = [];
    var counter = 0;
    while (i < a.length) {
        if (a[i] == "a") {
            b[i] = "*";
            counter++;
            
        } else {
            b[i] = a[i];
        }
        i++;
    } return console.log(b,counter)
}


) ("andjelka")