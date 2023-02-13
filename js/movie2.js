"use strict";

(async () => {












// Default Variables:

    // Movie data into a variable
    const movieData = await getMovies();
    console.log(movieData)

    let movieList = await movieData;

    const movieTitles = movieData.map((movie) => {
        return movie.title;
    })
    console.log(movieTitles)



    // Function to sort data by name in ascending order
    function sortTitleAsc() {
        movieList.sort(function(a, b){
            return a.title - b.title;
        });
        console.log(movieList);
    }

    // Function to sort data by year in ascending order
    function sortYearAsc() {
        movieList.sort(function(a, b){
            return a.year - b.year;
        });
        console.log(movieList);
    }

    // Function to sort data by rating in descending order
    function sortRate() {
        movieList.sort(function(a, b){
            return b.rating - a.rating;
        });
        console.log(movieList);
    }

    // Event listener to run sorting functions based on selector option
    $("#movieSortSelector").change(async function(){
        let sortOption = $("#movieSortSelector").val();
        console.log(sortOption)
        switch(sortOption) {
            case "1":
                sortTitleAsc();
                showMovies();
                break;
            case "2":
                sortRate();
                showMovies();
                break;
            case "3":
                sortYearAsc()
                showMovies();
                break;
            default:
                showMovies()
        }
    });







//  Default Function & API:

//  Movie Data API
    const movieDBApi = async (movie_title) =>{
        try{
            let api_key = keys.theMovieDb
            let apiCall = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie_title}`)
            let data = await apiCall.json();
            return data;
        }catch (error){
            console.log(error)
        }
    }

//  Load movie into screen
    async function showMovies() {

        let moviesSavedList = '';
        for (let i = 0; i < movieList.length; i++) {
            const addMovieName = await movieDBApi(movieList[i].title);
            let imagePoster = `https://image.tmdb.org/t/p/w500${addMovieName.results[0].poster_path}`
            let cardFormat = `<div class="movieCard card mb-1">
                                <img src="${imagePoster}" class="card-img-top" id="movieImage" alt="...">
                                <div class="movieInfoGrp card-body bg-black text-light" id="${movieList[i]}">
                                    <div class="card-text mb-2 text-center" id="title"><span class="title">${movieList[i].title}</span> <span class="card-text" id="year"> (${movieList[i].year}) </span> </div>
                                    <div class="card-text mb-2 text-center" id="rating"><span class="stars">${movieList[i].rating}</span> </div>
                                    <div class="card-text mb-4 text-center" id="genre">${movieList[i].genre} </div>
                                    <div class="card-text" id="director"><span class="text-secondary-emphasis"> Director:</span> ${movieList[i].director} </div>
                                    <div class="card-text" id="runtime"><span class="text-secondary-emphasis"> Runtime:</span> ${movieList[i].runtime} mins </div>
                                    <div class="card-text" id="actors"><span class="text-secondary-emphasis"> Actors:</span> ${movieList[i].actors} </div>
                                </div>
                                <div class="buttonGrp mt-1 ">
                                <button id="updateBtn"  data-id="${movieList[i].id}" type="button" class="update-btn hidden-btn btn btn-primary">Update</button>
                                <button id="deleteBtn"  data-id="${movieList[i].id}" type="button" class="delete-btn hidden-btn btn btn-danger">Delete</button>
                                </div>
                            </div>` // data format
            moviesSavedList += cardFormat;
        }
        $('#movieList').append(moviesSavedList)
    }

//  Prevent scrolling the Entire page while scrolling the movieList
    $('.movie-list').css({
        'overflow-x': 'scroll',
        'width': '100%'
    })
        .on('scroll', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });





// Search Functions:

// Load Movie from TMDB API on Click or Enter
    let getPosterFromSearch = async function (e) {
        e.preventDefault()
        const searchValue = $('#search-input').val();
        if (searchValue === '') {
            $('.text-main').html('<div class="text-main"><strong>Oops!</strong> Try adding something into the search field.</div>');
        } else {
            $('.text-main').html('<div class="alert"><strong>Loading...</strong></div>');
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keys.theMovieDb}&query=${searchValue}`)
                .then(response => response.json())
                .then(data => {
                    const posterURL = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
                    $('.box').css({
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url(${posterURL})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        marginTop: "70px"
                    })
                    $('.text-main').html(`<div class="text-main"><strong>${data.results[0].title}</strong> <br> ${data.results[0].release_date.slice(0, 4)} <br><button id="addToListBtn" type="button" class="btn btn-sm btn-dark mt-2">+</button></div> `)
                    $('#addToListBtn').on('click', async (e) => {
                        const movie_id = data.results[0].id; // Replace with the ID of the movie you want to retrieve information for
                        const api_key = keys.theMovieDb; // Replace with your actual API key
                        const moviePromise = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`)
                            .then(response => response.json());
                        const creditsPromise = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}`)
                            .then(response => response.json());

                        Promise.all([moviePromise, creditsPromise])
                            .then(results => {
                                const movie = results[0];
                                const credits = results[1];
                                // RUNTIME
                                console.log(movie.runtime); // get the runtime of the movie
                                console.log(credits.cast); // get the list of actors in the movie

                                // ACTORS
                                let movieActors = '';
                                for (let i = 0; i < credits.cast.length; i++) {
                                    // console.log(credits.cast[i].name + " as " + credits.cast[i].character)
                                    if (i === credits.cast.length - 1) {
                                        movieActors += `${credits.cast[i].name}`;
                                    } else {
                                        movieActors += `${credits.cast[i].name}, `;
                                    }
                                }
                                const actorsFiltered =  movieActors.split(', ').slice(0, 3).join(', ')
                                console.log(actorsFiltered)

                                // DIRECTOR
                                const director = credits.crew.find(member => member.job === "Director").name
                                console.log(director)

                                // GENRES
                                let genresAll = ''
                                for (let i = 0; i < movie.genres.length; i++) {
                                    // console.log(movie.genres[i].name + " as " + movie.genres[i].character)
                                    if (i === movie.genres.length - 1) {
                                        genresAll += `${movie.genres[i].name}`;
                                    } else {
                                        genresAll += `${movie.genres[i].name}, `;
                                    }
                                }
                                console.log(genresAll);

                                // IMAGE PATH
                                console.log(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`);

                                console.log('add button clicked') // data from API
                                const newMovie = {
                                    title: `${data.results[0].title}`,
                                    year: `${data.results[0].release_date.slice(0, 4)}`,
                                    director: `${director}`,
                                    rating: `${data.results[0].vote_average}`,
                                    runtime: `${movie.runtime}`,
                                    genre: `${genresAll}`,
                                    actors: `${actorsFiltered}`
                                } // data format

                                addMovie(newMovie).then(() => {
                                    location.reload()
                                });
                            })
                    })
                });
        }
    }
    $('#search-btn').click(getPosterFromSearch);
    $('#search-input').on('keyup',function (event) {
        if (event.keyCode == 13) {
            getPosterFromSearch();
        }
    });


//  Search from Firebase on Click or Enter
    let getSavedMovies = async function(){

        const searchValue = $('#savedMovieSearchInput').val();

        const addMovieName = await movieDBApi(searchValue);
        let imagePoster = `https://image.tmdb.org/t/p/w500${addMovieName.results[0].poster_path}`

        let moviesNewList = '';
        for (let i = 0; i < movieList.length; i++) {
            if (movieList[i].title.toLowerCase().includes(searchValue)) {
                moviesNewList += (`
                    <div class="movieCard card mb-1">
                                    <img src="${imagePoster}" class="card-img-top" id="movieImage" alt="...">
                    
                                    <div class="movieInfoGrp card-body bg-black text-light" id="${movieList[i]}">
                    
                                        <div class="card-text mb-2 text-center" id="title"><span class="title">${movieList[i].title}</span> <span class="card-text" id="year"> (${movieList[i].year}) </span> </div>
                                        <div class="card-text mb-2 text-center" id="rating"><span class="stars">${movieList[i].rating}</span> </div>
                                        <div class="card-text mb-4 text-center" id="genre">${movieList[i].genre} </div>
                                        <div class="card-text" id="director"><span class="text-secondary-emphasis"> Director:</span> ${movieList[i].director} </div>
                                        <div class="card-text" id="runtime"><span class="text-secondary-emphasis"> Runtime:</span> ${movieList[i].runtime} mins </div>
                                        <div class="card-text" id="actors"><span class="text-secondary-emphasis"> Actors:</span> ${movieList[i].actors} </div>
                                    </div>
                                    <div class="buttonGrp mt-1 ">
                                    <button id="updateBtn"  data-id="${movieList[i].id}" type="button" class="update-btn hidden-btn btn btn-primary">Update</button>
                                    <button id="deleteBtn"  data-id="${movieList[i].id}" type="button" class="delete-btn hidden-btn btn btn-danger">Delete</button>
                                    </div>
                                </div>
            `)  // data format
            }
        }
        $('#movieList').html(moviesNewList)
    }
    $('#savedMovieSearchBtn').on('click', function () {
        getSavedMovies();
    })
    $('#savedMovieSearchInput').on('keyup', function (event){
        if(event.keyCode == 13){
            getSavedMovies()
        }
    })








// Modal functions

    const modalA = document.querySelector(".modalAdd"),
        modalContentA = document.querySelector(".modalA-content");

//  OPEN MODAL Add function
    function openModalAdd(e) {
        // e.preventDefault();
        $('#modal-add').css({
            display: "block"
        })
    }

//  CLOSE MODAL function
    function closeModalAdd() {
        modalContentA.classList.add("slide-up");
        setTimeout(() => {
            modalA.style.display = "none";
            modalContentA.classList.remove("slide-up");
        }, 500)
    }
//  Close MODAL on click of close icon for Add
    $('#closeBtn-add').on('click', function (e) {
        closeModalAdd()
    })


//  Open MODAL on click for Add
    $('#addButton').on('click', function () {
        openModalAdd();
    })






// Click Functions:

// Reload screen on click Logo
    $('#logo').on('click',function (){
        location.reload()
    })

// Reload screen on click Logo in Offcanvas
    $('#offcanvasNavbarLabel').on('click',function (){
        location.reload()
    })

// Toggle Edit Mode on click
    $('.dropEdit').on('click',function(e){
        e.preventDefault()
        $('.hidden-btn').toggleClass('hidden-btn');
        $('html, body').animate({
            scrollTop: $("#updateBtn").offset().top
        }, 500);
    })

// Click to scroll to the top of the page
    $("#search-btn", "#savedMovieSearchBtn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

//  Update input on Click
    $('#movieList').on('click', '.update-btn', function (e) {
        e.preventDefault();
        $('.update-btn').toggle('hidden-btn');
        $('.delete-btn').toggle('hidden-btn');

        const thisID = $(this).data("id");
        console.log('update button clicked')
        console.log(thisID)

        let movieInfo = ''
        movieList.forEach((movie) => {
            if (movie.id === thisID)
                movieInfo += `
                <div class=" card-text" id="title"> title: <input class="input-update form-control-sm" id="title-input" value=" ${movie.title} "></div>
                <div class=" card-text" id="year">year: <input class="input-update form-control-sm" id="year-input" value=" ${movie.year} "></div>
                <div class=" card-text" id="director">director: <input class="input-update form-control-sm" id="director-input" value=" ${movie.director} "></div>
                <div class=" card-text" id="rating">rating: <input class="input-update form-control-sm " id="rating-input" value=" ${movie.rating} "></div>
                <div class=" card-text" id="runtime">runtime: <input class="input-update form-control-sm" id="runtime-input" value=" ${movie.runtime} "></div>
                <div class=" card-text" id="genre">genre: <input class="input-update form-control-sm" id="genre-input" value=" ${movie.genre} "></div>
                <div class=" card-text" id="actors">actors: <input class="input-update form-control-sm" id="actors-input" value=" ${movie.actors} "></div>
                <button id="updateConfirmBtn"  data-id="${movie.id}" type="button" class="update-confirm-btn btn btn-primary mt-1">Update</button>
        `  // data format
        })
        $(this).parent().parent().children('.movieInfoGrp').html(movieInfo);
    })

//  Confirm Update on Click
    $('#movieList').on('click', '.update-confirm-btn', function (e) {
        e.preventDefault()
        console.log('confirm update button clicked');

        // console.log($(this).data("id"))
        movieList.forEach((movie) => {
            if (movie.id === $(this).data("id")) {
                console.log(movie.id)
                console.log($(this).data("id"))

                const newMovie = {
                    id: $(this).data("id"),
                    title: $('#title-input').val(),
                    year: $('#year-input').val(),
                    director: $('#director-input').val(),
                    rating: $('#rating-input').val(),
                    runtime: $('#runtime-input').val(),
                    genre: $('#genre-input').val(),
                    actors: $('#actors-input').val(),
                } // data format
                updateMovie(newMovie).then(() => {
                    return getMovies()
                }).then(() => {
                    location.reload()
                });
            }
        })
    })

//  Add Movie on Click
    $('#addMovieSubmitBtn').on('click', function (e) {
        e.preventDefault()
        console.log('button clicked')
        const newMovie = {
            title: $('#titleA').val(),
            year: $('#yearA').val(),
            director: $('#directorA').val(),
            rating: $('#ratingA').val(),
            runtime: $('#runtimeA').val(),
            genre: $('#genreA').val(),
            actors: $('#actorsA').val(),
        } // data format

        addMovie(newMovie).then(() => {
            return getMovies()
        }).then(movies => {
            console.log(movies)
        }).then(closeModalAdd)
            .then(() => {
                location.reload()
            });
    })

//  Delete movie on Click
    $('#movieList').on('click', '.delete-btn', function (e) {
        e.preventDefault()
        console.log('clicked')

        const thisID = $(this).data("id");
        console.log('clicked')
        console.log(thisID)
        deleteMovie({
            id: `${thisID}`
        }).then(() => {
            return getMovies()
        }).then(() => {
            location.reload()
        });
    })




})();