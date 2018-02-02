var a = 5;
var b = 7;
var c = 1;
var prvomesto;
var drugomesto;
var trecemesto;
var niz
// if ( a < b){
//     prvomesto = a;
//     if ( b < c) {
//         drugomesto = b
//     } else {
//         drugomesto = b
//         trecemesto = c 
//     }
// } 

// if (b < c) {
    
// }

// if ( a<b && b<c && a<c) {
// niz=;
// }

var a = 15;
var b = 7;
var c = 111;
var prvomesto;
var drugomesto;
var trecemesto;

// if ( a > b) {
//     prvomesto = a;
//     if ( b > c) {
//         drugomesto = b;
//         trecemesto = c;
//     }
// } else if ( b > a) {
//     prvomesto = b;
//     if ( a > c) {
//         drugomesto = a;
//         trecemesto = c;
//     }
// } else if ( c > a ) {
//     prvomesto = c
//     if ( a > c) {
//         drugomesto = a;
//         trecemesto = b;
//     }
// } console.log(prvomesto, drugomesto, trecemesto);

if (a<b && a<c){
    if(b<c) {
        console.log(a,b,c);
    } else {
        console.log(a,c,b);
    }
} else if (b<a && b<c) {
    if (a<c) {
        console.log(b,a,c);
    } else {
        console.log(b,c,a);
    }
} else if (c<a && c<b) {
    if(a<b) {
        console.log(c,a,b);
    } else {
        console.log(c,b,a);
    }
}

var number = "sunce";
var prvacifra;
var drugacifra;

if ( number < 10 || number > 100) {
    console.log("mistake")
}
else if (typeof number !== "number") {
    console.log("mistake")
}else {
prvacifra = (number - (number%10))/ 10;
drugacifra = number % 10;
console.log(drugacifra, prvacifra)
}
