// // function vowelCount(inputString) {
// //     var vowelList = 'aeiouAEIOU';
// //     var vowelCount = 0;

// //     for (var x = 0; x < inputString.length; x++) {
// //         if (vowelList.indexOf(inputString[x]) !== -1) {
// //             vowelCount += 1;
// //         }

// //     }
// //     return vowelCount;
// // }

// // console.log(vowelCount("The black and white bear"));

// //drugi zadatak

// function combine(arr1, arr2) {
//     var i = 0;
//     var j = 0;
//     var k;
//     var finalArr = [];

//     for (k = 0; k < (arr1.length + arr2.length); k++) {
//         // gledamo da li je mesto parno ili neparno (u petlju gde cemo sve to staviti)
//         if (k % 2 == 0) {
//             finalArr[k] = arr1[i];
//             i++;
//         } else {
//             finalArr[k] = arr2[j];
//             j++;
//         }

//     }
    
//     return finalArr;
// }

// var result = combine(['a', 'b', 'c'], [1, 2, 3]);
// console.log(result);

// function rotate(arr, k) {
//     var result = [];

    
//     for(var i = k; i < arr.length; i++){
//         result[i-k] = arr[i];
//     }

//     for(var j = 0; j<k; j++){
//         result[i-k] = arr[j];
//         i++;
//     }

//     return result;
// }


// console.log(rotate([1, 2, 3, 4, 5, 6], 2));

function aray(a) {
var a;
var arr = [];
for (var i=0; i<a.length; i++) {
arr = a[i];
}
// var s = ""
//     if (typeof a == "number") {
//         b = "" + a 

//     }
//     console.log(b);
    

return arr;
}
var result = aray(26);
console.log(result);
