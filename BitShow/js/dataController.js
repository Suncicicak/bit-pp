const dataModule = (function (){
class Show  {
    constructor (name,imageUrl,ID,detalis){
        this.name = name,
        this.imageUrl = imageUrl,
        this.ID = ID,
        this.seasons = [],
        this.casts = [],
        this.detalis = detalis
    }
    addSeason(season){
        this.seasons.push(season);
    }
    addCast(actor){
        this.casts.push(actor);
    }
}

class TVShows {
    constructor (show,limitNumber) {
        super(show),
        this.limitNumber = limitNumber
    }
}

class Cast {
    constructor (name) {
        this.name = name
    }
}

class Season {
    constructor (startDate,endDate) {
        this.startDate = startDate,
        this.endDate = endDate
    }
}
return {
    createShow: function(name,imageUrl,ID,seasons,casts,detalis){
        return new Show(name,imageUrl,ID,seasons,casts,detalis);
    },
    createTVShows: function(show,limitNumber){
        return new TVShows(show,limitNumber)
    },
    createCast: function(name){
        return new Cast(name);
    },
    createSeason: function(startDate,endDate){
        return new Season(startDate,endDate);
    }
}
})();