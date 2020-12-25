import React from 'react';
import MovieCard from './MovieCard';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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

