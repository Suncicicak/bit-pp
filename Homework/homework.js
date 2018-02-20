//exercise 4
    function minInArray(inputArray) {
        var min = inputArray[0];
        var i = 0;
        while (i < inputArray.length) {
            if (min >= inputArray[i]) {
                    min = inputArray[i]
                    var position = i;
                }
                i++;
        }
            return {min, position}
    }
    console.log(minInArray([1, 2, -3, 4]));

    //exercise 5-a
    function less (a,b) {
        var c = [];
        var j = 0;
        for (var i = 0; i < a.length; i++) {
          if (a[i] < b) {
            c[j] = a[i];
            j++;    
          }
        }
        return c;
      }
      console.log(less([10,8,7,6,55],10));
    
    
    // var months = ['Jan', 'March', 'April', 'June'];
    // months.splice(0, 2);
    // // inserts at 1st index position
    // console.log(months);
    
    // Exercise 5
    
    // function removeLess(inputArray, element) {
    //     var i = 0;
    //     while (i < inputArray.length) {
    //         if (inputArray[] >= element) {
    //             inputArray.splice(i,1)
    //         } i++;
    //     }
    //     return inputArray;
    // }
    
    // console.log(removeLess([3,4,-6,9,-7,10,22,-1], 3));
    // Exercise No. 5/a
    
    // function removeLess(inputArray, element) {
    // var finalArray = [];
    // var j = 0;
    //     for (var i = 0; i<inputArray.length; i++) {
    //         if (inputArray[i] < element ) {
    //             finalArray[j] = inputArray[i];
    //             j++;
    //         }
    
    //     }
    //     return finalArray;
    // }
    // console.log(removeLess([3,4,-6,9,-7,10,22,-1], 3));
    
    // Exercise No. 5/b
    
    
    // function iNeedPro(inputArray) {
    //     var finalArray = [];
    //     var i = 0;
    //     var j = 0;
    //     while (i < inputArray.length) {
    //         if (inputArray[i].substring(0,3) == "pro") {
    //             finalArray[j] = inputArray[i];
    //            j++;
    //        } i++;
    //    } 
    //     return finalArray;
    // }
    // console.log(iNeedPro(["profesor", "whatever", "protoype", "Biki"]));
    // var inputArray = ["profesor", "whatever", "protoype", "Biki"];
    // var c = inputArray.filter(a => a.substring(0,3) == "pro")
    // console.log(c);


