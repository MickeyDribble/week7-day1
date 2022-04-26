//Empty Array to store Data
const movieArr = [];
//Create Movie class for title and actor object
//'this' refers to the object it belongs to
class Movie {
    constructor(title, actor, genre, year = "Not specified") {
        this.title = title;
        this.actor = actor;
        this.genre = genre;
        this.year = year;
        
    }
    //small function to add cli input to movieArr
    add() {
        movieArr.push(this)
    }
   
};

//export objects to use elsewhere in app
module.exports = {
    movieArr,
    Movie,
};