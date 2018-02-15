// var breakfast = {
//     name : "English breakfast", 
//     ingrediens : ["ham", "eggs", "bread", "cucumbers"], 
//     energy : 700,
//     method : "Stir until everything is mixed, ham is heated, and cheese is melted.",
//     ISJSCompilant : function  () {
//           if (breakfast.energy > 500 ) {
//               return true;
//           } else {
//               return false
//           }
//       }  


// }
// console.log(breakfast.ISJSCompilant());


var breakfast = {
    name: "McMenu",
    ingrediens: ["french fries", "hamburger ", "coke",],
    energy: 900,
    printInstructions: function () {
        console.log("Separate grills are used to cook the beef and chicken patties used in all our burgers and the Foldover.");
    },
    ISJSCompilant: function () {
        if (breakfast.energy > 500) {
            return true;
        } else {
            return false
        }
    }


}

console.log(breakfast.ISJSCompilant());