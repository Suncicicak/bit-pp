var red = color[1]+color[2]
color='#F3A8II'
color: rgb(243,168,17); 

function colorReader(a) {
    var t = [a[1]+a[2]];
    var b = [a[3]+a[4]];
    var c = [a[5]+a[6]];
    d = parseInt(t,16);
    g = parseInt(b,16);
    e = parseInt(c,16);
   console.log(t);
   h = [d,g,e]
   
    return h;

}

console.log(colorReader("#F3A811"));
