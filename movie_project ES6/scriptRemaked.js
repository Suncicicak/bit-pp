class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    getData(title, length, genre){
        return `${this.title.charAt(0).toUpperCase() + this.title.slice(1)},${this.length}min,${genreCode(this.genre)} `
    }
}



