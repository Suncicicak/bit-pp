const mainModule = (function (uim, dataModule) {
    var listOfShow = [];
    let seasoNs = [];
    let caSt = [];
    function ready() {

        $(document).ready(function () {
            const request = $.ajax({
                url: "http://api.tvmaze.com/shows",
                method: "GET"
            });
            request.done(function (msg) {
                const response = msg.slice(0, 49);



                response.forEach(element => {
                    const show = dataModule.createFirstPageShow(element.name, element.image.original);

                    uim.first50(show);

                    

                });
            });
        });
    }

    function search() {
        $(".form-control").on("keyup", function () {

            let input = $('.form-control').val();
            // setInterval(function() {
            const req = $.ajax({
                url: "http://api.tvmaze.com/shows",
                method: "GET"
            });
            req.done(function (msg) {
                const answer = msg;



                answer.forEach(element => {
                    const sel = $("#select")
                    let input = $('.form-control').val();
                    let el = element.name;
                    if (el.toUpperCase().includes(input.toUpperCase()) == true) {
                        if ($('.form-control').val() == "") {
                            uim.showSearch();
                        } else {
                            uim.searchShow(element.name)
                        }
                    }


                })
                $(".form-control").on("keydown", function () {
                    uim.showSearch();
                })
            })
        })
    };


    function showSingleShow() {
        $('body').on("click", '.card', function (event) {
            localStorage.setItem("id", event.currentTarget.id)
        });
    }


    const singleShowPresented = function () {
        
        $('document').ready(function () {


            let requestSeasons = $.ajax({
                url: "http://api.tvmaze.com/shows/" + localStorage.getItem('id') + '/seasons',
                method: "GET"
            })
            requestSeasons.done(function (response) {

                response.forEach(element => {
                    let seas = dataModule.createSeason(element.premiereDate, element.endDate);
                    seasoNs.push(seas);

                })
            })

            let requestCast = $.ajax({
                url: "http://api.tvmaze.com/shows/" + localStorage.getItem('id') + '/cast',
                method: "GET"
            })
            requestCast.done(function (response) {


                response.forEach(element => {
                    let cast = dataModule.createCast(element.person.name);
                    caSt.push(cast);
                })
            })
            let requestShow = $.ajax({
                url: "http://api.tvmaze.com/shows/" + localStorage.getItem('id'),
                method: "GET"
            });
            requestShow.done(function (response) {

                const shows = dataModule.createShow(response.name, response.image.original, response.id, response.summary)
              

                
                seasoNs.forEach(element => {
                    shows.addSeason(element);
                })
                caSt.forEach(element => {
                    shows.addCast(element.name);
                })
                
                listOfShow[0] = shows
                
                
              
                
                
            })  
            })  
            
        };

        function ja () {
           console.log(listOfShow[0]);
           
            
        }

    return {
        ready,
        search,
        showSingleShow,
        singleShowPresented,
        ja
        // bla
        
    }

})(UIModule, dataModule);