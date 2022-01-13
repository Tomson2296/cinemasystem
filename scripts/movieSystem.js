class MovieSystem{
    constructor(movies){
        this.movies = movies
        this.dataUrl = "https://tomson2296.github.io/cinemasystem/database/movies.json"
    }

    addMovie = (id, title, movieType, director, date, length) =>{ // dodawanie filmów do pamięci
        const newMovie = new Movie(id, title, movieType, director, date, length)
        this.movies.push(newMovie)
    }

    fetchMovies = () => { // pobieranie danych o filmach
        fetch(this.dataUrl).then((response) =>{
            return response.json();
        }).then((data) =>{
            //console.log(data.length)
            for(let i = 0; i<data.length;i++){
                const film = data[i]
                //console.log(film)
                this.addMovie(film.id,film.title, film.movieType, film.director, film.date, film.length)
            }
            //console.log(movieSystem)
            UI.generateFilmList()
            for(let i = 1;i<=movieSystem.movies.length;i++){
                document.getElementById("buy-ticket-"+i).addEventListener("click", function(){
                    loggedUser.buyTicket(i)
                    UI.updateCart()
                })
            }
        }).catch(function(err) {
            console.log(err);
        });
    }
}
const movieSystem = new MovieSystem([])