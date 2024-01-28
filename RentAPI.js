class Movie {
    constructor(title, genre, availableMovies) {
        this.title = title;
        this.genre = genre;
        this.availableMovies = availableMovies;
    }

    rentMovie() {
        if (this.availableMovies > 0) {
            this.availableMovies--;
            return true;
        } else {
            console.log(`Sorry, ${this.title} is currently out of stock.`);
            return false;
        }
    }

    returnMovie() {
        this.availableMovies++;
        console.log(`Thank you for returning ${this.title}.`);
    }
}

class RentalService {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    rentMovie(title) {
        const movie = this.findMovie(title);

        if (movie) {
            const success = movie.rentMovie();
            if (success) {
                console.log(`Enjoy watching ${title}!`);
            } else {
                console.log(`Sorry, ${title} is currently out of stock.`);
            }
        } else {
            console.log(`${title} not found in the rental service.`);
        }
    }

    returnMovie(title) {
        const movie = this.findMovie(title);

        if (movie) {
            movie.returnMovie();
        } else {
            console.log(`${title} not found in the rental service.`);
        }
    }

    findMovie(title) {
        return this.movies.find((movie) => movie.title === title);
    }
}

const movie1 = new Movie("The Dragon Fight", "Drama", 5);
const movie2 = new Movie("Inception", "Sci-Fi", 3);
const movie3 = new Movie("The Dark Knight", "Action", 2); // Added "The Dark Knight"

const rentalService = new RentalService();
rentalService.addMovie(movie1);
rentalService.addMovie(movie2);
rentalService.addMovie(movie3); // Added "The Dark Knight"

rentalService.rentMovie("Inception");
rentalService.rentMovie("The Dragon Fight");
rentalService.rentMovie("The Dark Knight");

rentalService.returnMovie("Inception");
rentalService.returnMovie("The Dark Knight");