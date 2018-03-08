let sum = function (a, b) {
    return a + b;
}

let sumStrange = (a, b) =>  {return a+b}
    var res = sumStrange(5, 6);

console.log(res);

// ||

let sum = function (a, b) {
    return a + b;
}

let sumStrange = (a, b) => a+b;
    var res = sumStrange(5, 6);

console.log(res);

//

function TestArray() {
    this.name = 'a';
    this.values = [2,4,7,1,78];

    this.print = function() {
        this.values.forEach(function(e, i){
            console.log(i, e);
        })
    }
}

let ta = new TestArray();
ta.print();

//


function TestArray() {
    this.name = 'a';
    this.values = [2,4,7,1,78];

    this.print = function() {
        this.values.forEach(function(e, i){
            console.log(this.name,i, e);
        }, this);
    }
}

let ta = new TestArray();
ta.print();

//

function TestArray() {
    this.name = 'a';
    this.values = [2,4,7,1,78];

    this.print = function() {
        this.values.forEach( (e, i) => {

            console.log(this.name,i, e);
        });
    }
}

let ta = new TestArray();
ta.print();

//
( () => {
//telo
})();



//klase
class Point {
    //x,y

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    print(){
        console.log(`(${this.x},${this.y})`);
        
    }
    describe(){
        console.log('I\' am point');
        
    }
}

let p = new Point (4,5);
p.print();

class ColorPoint extends Point{

    constructor(x,y,color){
        super(x,y);
        this.color = color;
    }

    print(){
        console.log("Color point");
        
        super.print();
        console.log(this.color);
        
    }
}

let cp = new ColorPoint(4,3, "orange");
cp.print();
cp.describe();

console.log(cp instanceof ColorPoint);
console.log(cp instanceof Point);

