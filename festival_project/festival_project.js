'use strict';

(function () {

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var formattedString;
            formattedString = this.name[0] + this.name[this.name.length - 1];

            return formattedString.toUpperCase();
        }
    }

    function Movie(nameOfMovie, genre, length) {
        this.title = nameOfMovie;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            return '' + nameOfMovie + ', ' + length + ', ' + genre.getData() + '';
        }
    }

    function Program(date, movies, totalNumOfMovies) {
        this.date = new Date(date);
        this.list = movies;
        this.totalNumOfMovies = 0;
        this.addMovie = function (titleOfTheMovie) {
            this.list.push(titleOfTheMovie);
            this.totalNumberOfMovies = this.list.length;
        }
        this.getData = function () {
            var moviesLength = 0,
                moviesList = '';

            for (var i in movies) {
                moviesLength += movies[i].length;
                moviesList += movies[i].getData() + ', \n';
            }

            return this.date + ', ' + moviesLength + ', \n' + moviesList;
        }
    }

    function Festival(name, list, numbers) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfAllMovies = function () {
            var counter = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                console.log(this.listOfPrograms);
                counter = counter + this.listOfPrograms[i].totalNumOfMovies;
            }
            return counter; ;
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
        this.getData = function () {}
    }
    }

    function createMovie(title, length, genre) {
        return new Movie(title, genre, length);
    }

    function createProgram(date) {
        return new Program(date);
    }

    var fantasy = new Genre("fantasy");

    var JusticeLeague = new Movie("Justice League", fantasy, 120);
    var Deadpool = new Movie("Deadpool", fantasy, 110);
    var program = new Program();
    program.addMovie(JusticeLeague);
    program.addMovie(Deadpool);


    var program2 = new Program();
    program2.addMovie(JusticeLeague);
    program2.addMovie(Deadpool);
    var sarajevskiFestival = new Festival("Sarajevski Festival");
    sarajevskiFestival.addProgram(program);
    sarajevskiFestival.addProgram(program2);
    var program3 = createProgram("19 February 2019");

    console.log(program3.getData());
    
})();