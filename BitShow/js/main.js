//ovde napravi IIF
$(document).ready(function(){
    const request = $.ajax({
        url: "http://api.tvmaze.com/shows",
        method: "GET"
    });
    request.done(function(msg){
        console.log(msg.slice(0,50));
        
    })
});
