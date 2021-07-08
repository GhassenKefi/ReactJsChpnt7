import React from 'react'
import MoviePage from './MoviePage';

export default function Movie({ match, data }) {
    var movie = data.find(m =>m.key == match.params.movieKey);
    var movieData;

    if (movie){
        movieData =<MoviePage movie={movie}/>
            }
    else
        movieData = <h2> Sorry. Product doesnt exist </h2>;

    return (
        <div>
            <div>
                {movieData}
            </div>
        </div>
    )
}
