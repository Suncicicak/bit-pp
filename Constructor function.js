function makeIt(name, ingredients) {
    var ourBreakfast = {};

    ourBreakfast.name = name;
    ourBreakfast.ingidients = ingredients;

    return ourBreakfast;
}
function MakeIt(name, ingredients) {
    //var this = {}
   

    this.name = name;
    this.ingidients = ingredients;

    //return this
}
   // var b1 = makeIt

   var b1 = new MakeIt ("french tost", ["eggs", "milk", "bread"]);

   console.log(b1);
   
   console.log(this);
   