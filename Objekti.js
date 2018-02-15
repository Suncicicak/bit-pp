var user = {
     name : "Pera",
     username : "peragenije",
     password : "abcde",
     email : "pera.genije@gmail.com",
     age : 19,
     programmer : true,
     languages: ["JavaScript", "Python"],
    mode : {
        type : "admin",
        level : 3,
        },
        addDiscount: function () {
            return 10;
        }
    } ;

// console.log(user.mode.type);
// console.log(user.languages[0]);

user.ip = "145.25.356.45";
user.email = "pera.supergenije@gmail.com";

function newDiscount () {
    return 20;
}
user.addDiscount = newDiscount;

var discount = user.addDiscount ();
console.log(discount);



//prazan objekat
var unkownUSer = {};