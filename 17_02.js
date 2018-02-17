//Branko je uradio 3. zadatak od juce
// function alphabeticalOrder(str) {
//     var arr = str,
//         newArr = [];
    
//     for (var i = 0; i < arr.length; i++) {
//         if (arr.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//             newArr.push(arr[i]);
//         }

//     }

//     return newArr.sort().join('');
// }

// console.log(alphabeticalOrder('branko.+ ,AJ %&& 46novak'));

// functions-practical-2
//exercise 1
// function checking (a) {
//     if (typeof a == 'string') {
//         return true
//     } else return false
// }
// console.log(checking('lol'));

//exercise 2
// function checking (a) {
//     if (typeof a == 'string' && a == '') {
//         return true;
//     } else return false ;
// } 
// console.log(checking(''));

//exercise 3
// function concatenates 👎 {
//     var i = 0;
//     var x = 'Ha';
//     var y = '';
//     while (i < n) {
//         y += x; 
//         i++;
//     } return y;
// }

// console.log(concatenates(5));
 
//exercise 4
// function count (str,n) {
//     var i;
//     var counter = 0;
//     for (i = 0; i < str.length; i++) {
//         if (str[i] == n) {
//             counter++;
//         }
//     } return counter;
// }
// console.log(count('hhhhahaahahahahah','a'));

//exercise 5
//  function firstOccurance (str, n) {
//      var i = 0;
//      var counter = 0;
//      var pos = 1; 
//    while (i < str.length) {
//        if (str[i] == n) {
//         pos += counter;
//         break;
//        } else {
//            counter++
//        }
//        i++;
//     }
//     return pos;
// }
//    console.log(firstOccurance('jiadhaousdhaid','h'));


//    function lastocccurane (str, n) {
//        var i = 0
//        while ()
//    }

//    function lastOcccurane (str, n) {
//        pos = 1;
//        var i = 0;
//     if (str[i] === n) {
//       pos =  str.lastIndexOf(n) + 1;
//     } else return -1
//     return pos;
//    }
//    console.log(lastOcccurane('adaoisdhuashd','d'));
   //nemas pojma nista da uradis

//exercise 5 - > best solution!!!!!!!!!!!!
// function firstOccurance (str,n) {
//     if (str.indexOf(n) !== -1) {
//     return str.indexOf(n)+1;
// }
// return -1;
// }
// console.log(firstOccurance('sjfosdugfaiydgbah','f'));

//exercise 6 !
// function lastOcccurane (str,n) {
//     if (str.lastIndexOf(n) !== -1) {
//         return str.lastIndexOf(n)+1;
//     }
//     return -1;
// }
// console.log(lastOcccurane('sjfosdugfaiydgbah','f'));


//exercise 7
//    function convert (str) {  
//         var i;
//         var arr = str.split(''); 
//        for ( i = 0; i < str.length; i++) {
//         if (arr[i] == ' ') {
//             arr[i] = null;
//         }
//        }
//         return arr;
//    }
//    console.log(convert('dkdkdkdkdkdk    dk'));

   //exercise 8
//    function test_prime(n)
//    {
   
//      if (n===1)
//      {
//        return false;
//      }
//      else if(n === 2)
//      {
//        return true;
//      }else
//      {
//        for(var i = 2; i < n; i++)
//        {
//          if(n % i === 0)
//          {
//            return false;
//          }
//        }
//        return true;  
//      }
//    }
   
//    console.log(test_prime(7));