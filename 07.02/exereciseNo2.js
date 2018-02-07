// function BlankOrNot (a){
//     var a;
//     if ( a == " ") {
//         return true;
//     } else {
//             return false;
//     }
// }

// var result = BlankOrNot (" ");
// console.log(result);


// function concatenates (a){
//     var i = 0;
//     var s = "Ha";
//     var kobasica = " ";
//     while (i < a) {
//         i++;
//         kobasica += s
//     } return kobasica;
 
// }

// var result = (concatenates (8));
// console.log(result);



// function countStrings (arr, letter) {
//     var counter = 0;
//     var i = 0;
//     var x = arr.length;

//     for (i = 0; i < x ; i++) {
//         if (arr[i] === letter) {
//             counter++
//         }
//     }
//     return counter;
// }
// var result = (countStrings("elements", "e"));
// console.log(result);
// var result = (countStrings("elements", "l"));
// console.log(result);



//abc ubf, b --> 2
//uftnjdgfdsgftgggtttttt , t -->  3
//abc, d --> -1

// function position (string,character) {
    
//     //index in the given string
//     var i = 0;

//     //position
//     var p = -1;

//     //final result
//     var result;

//     if (typeof string == "string" ) {
//           for (i = 0; i<string.length; i++) {
//               if(string [i] == character){
//                   p = i; 
//                   break; 
//               } 
//           }
//           if(p != -1 ){
//               result = p + 1; 
//           }
//           else{
//               result = -1;
//           }
//     }
//     else{
//         result =  -1;
//     }
//     return result;
// }
// console.log(position("abc ubf", "a"));

// function position (string,character) {
    
//     //index in the given string
//     var i = 0;

//     //position
//     var p = -1;

//     //final result
//     var result;

//     if (typeof string == "string" ) {
//           for (i = string.length-1; i>0 ; i--) {
//               if(string [i] == character){
//                   p = i; 
//                   break; 
//               } 
//           }
//           if(p != -1 ){
//               result = p + 1; 
//           }
//           else{
//               result = -1;
//           }
//     }
//     else{
//         result =  -1;
//     }
//     return result;
// }
// console.log(position("abc ubaf", "z"));
