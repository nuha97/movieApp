import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movieList , search,rating}) =>{

    return (
        <div className="movieStyle">
            {
                movieList.map((movie,index)=>
                   movie.Rate >= rating &&
                    movie.Title.toUpperCase().startsWith(search)?
                    <MovieCard  movie={movie} key={index}/>
                    :<></>      
            )
            }
        </div>
    );
}

export default MovieList;

