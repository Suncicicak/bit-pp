// function merge (a, b) {
// var i;
// var j;
// var k;
// var c = [];
// for (i = 0, j = 0, k = 0; i < a.length && j < b.length; k++) {
// if (a[i] < b[j]) {
//     c[k] = a[i];
//     i++;
   
// } else {
//     c[k] = b[j];
//     j++;
 
// } 
// }

// if ( i == a.length) {
//     for ( ; j < b.length; j++) {
//         c[k] = b[j];
//         k++;
//     } 
// }else {
//         for( ; i < a.length; i++) {
//             c[k] = a[i];
//             k++;
//         }
//     }

//  return c
// }
// var a = [4,6,11,18,32];
// var b = [-1,7,13,15];
// console.log(merge(a,b))

// function merge(a,b) {
//     var i;
//     var j;
//     var k;
//     var c=[];
//    for(i=0,j=0,k=0; i< a.length || j < b.length; k++){
//        if (i < a.length) {
//            c[k] = a[i];
//            i++;
//        } else  {
//            c[k] = b[j];
//            j++;
//        } 
       
//    } return c
// }
// a = [1,2]
// b = [5,4]
// console.log(merge(a,b));

function merge(a,b) {
    var i;
    var j;
    var k;
    var c = [];
    for (i = 0, j = 0, k = 0; k< (a.length + b.length); k++) {
        if (i%2==0 && i<a.length) {
            
            c[k]=a[i];
           
            i++;}
            // console.log(c);
            
        // }else if(i%2!==0){
        //     c[k]=a[i];
        // }
        
        
        else  {
            c[k]=b[j];
            k++;
            c[k]=a[i];
            j++;
            i++;
            // console.log(c);
            
        } 

        
    } return c
}
a = [1,2,3]
b = [5,4,6]
console.log(merge(a,b));