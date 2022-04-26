const yargs = require("yargs");

const { Movie, movieArr } = require("./utils")

// console.log(yargs.argv);

const app = (yargsObj) => {
    if(yargsObj.add) {
    const movie1 = new Movie(yargsObj.title1,yargsObj.actor1,yargsObj.genre1, yargsObj.year1)
    const movie2 = new Movie(yargsObj.title2,yargsObj.actor2,yargsObj.genre2, yargsObj.year2)
    movie1.add();
    movie2.add();
    console.log(movieArr);

    } else {
        console.log("Incorrect Command")
    }
        
    
};

app(yargs.argv);
