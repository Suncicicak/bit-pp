// input: 2  numbers
// oputput: sum
// name: addition

function /* bez ovog ne mozes funkcija na nivou JS*/ addition /* ime, mi smo dali, obratiti paznju na rezervisane reci... */ (a, b /*inputovi*/){
    /* logika funkcije */
    var sum;
    sum = a + b;
return /* rezervisana funkcija, vraca var sum (u ovom slucaju)  Ako ne navedemo rec "return" to znaci da ipak postoji return i da je undefined*/ sum;
} 
/* od function do ovde deklarisemo funkcije */

/* navedemo njihovo ime, uvedemo varijablu s */
 var s = addition (3, 4)
 console.log(s);
 
 /* ili console.log(addition (3,4)); */