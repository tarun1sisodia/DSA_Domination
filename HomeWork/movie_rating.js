const readline = require("readline");

const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sc.question('Enter Your Movie Name:', (movieName) => {
    sc.question('Enter Movie Rating..', (movieRating) => {
        rateMovie(movieName, movieRating);
        sc.close();
    });
});

function rateMovie(movieName, movieRating) {
    if (movieRating >= 0 && movieRating <= 2.0) {
        console.log(`${movieName} is a Flop Movie`);
    }
    else if (movieRating > 2.0 && movieRating <= 3.4) {
        console.log(`${movieName} is a Semi-Hit`);
    }
    else if (movieRating > 3.5 && movieRating <= 4.5) {
        console.log(`${movieName} is a Hit movie.`);
    }
    else if (movieRating > 4.5 && movieRating <= 8.0) {
        console.log(`${movieName} is Super Hit.`);
    }
    else if (movieRating > 8.0) {
        console.log(`${movieName} is A blockbuster..`);
    }
    else
        console.log(`${movieName} & ${movieRating} has some issue.`);
}