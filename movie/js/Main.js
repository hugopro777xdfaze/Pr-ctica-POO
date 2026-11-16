import Movie from "./Movie.js";

class Main {
    constructor() {
        this.movies = [];
        this.container = document.querySelector("#movies");
        this.loadMovies();
    }

    async loadMovies() {
        try {
            const response = await fetch("./data/movies.json");
            const data = await response.json();

            this.movies = data.map(movie =>
                new Movie(movie.title, movie.director, movie.year, movie.rating)
            );

            this.render();
        } catch (error) {
            this.container.textContent = "Could not load the movies.";
            console.error(error);
        }
    }

    render() {
        this.container.innerHTML = "";
        this.movies.forEach(movie => {
            this.container.appendChild(movie.render());
        });
    }
}

new Main();
