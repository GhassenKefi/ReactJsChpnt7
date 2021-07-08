import React from 'react'
import { useState } from 'react'
import MovieList from './MovieList'
import { MoviesList } from '../Data';
import AddMovie from './AddMovie';
import Header from './Header';

export default function Movies() {

    const [movies, setMovies] = useState(MoviesList);
    const [movieList, setMovieList] = useState([])



    const addNewMovie = (newMovie) => {
        setMovies([...movies, newMovie])
    }

    const handleFilteredList = (newMovies) => {
        setMovieList(newMovies)
    }

    return (
        <div className="App">
            <Header
                movies={movies}
                FilteredList={handleFilteredList}
            ></Header>
            <div className="MainContent">
                <MovieList
                    movie={movieList}
                ></MovieList>
                <AddMovie addMovieFn={addNewMovie} />
            </div>

        </div>

    )
}
