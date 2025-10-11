let watchlist = {
    movies: [],

    //Method to add a movie to the watchlist
    addMovie(movie) {
        this.movies.push(movie);
    },

    displayMovies() {
        let moviesList = document.getElementById("movie-list");
        moviesList.innerHTML = "";

        this.movies.forEach((movie, index) => {
            let movieElement = document.createElement("li");
            movieElement.className = "collection-item";

            movieElement.innerHTML = `Movie: ${movie.name}
            <button onclick=watchlist.removeMovie(${index}) id="remove-movie-btn" class="remove-btn" type="button">
            Mark As Watched</button>`;
            moviesList.appendChild(movieElement);
        });
    },


    //Method to remove a movie from the watchlist
    removeMovie(index) {
        this.movies.splice(index, 1);
        this.displayMovies();
    },
};

document.getElementById("add-movie-btn").addEventListener("click", function () {
    let movieName = document.getElementById("movie-name").value;

    if (movieName) {
        let newMovie = {
            name: movieName,
        };

        watchlist.addMovie(newMovie);

        watchlist.displayMovies();

        document.getElementById("movie-name").value = "";
    } else {
        alert("Please enter valid information");
    }
});