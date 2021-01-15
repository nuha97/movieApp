import React, { useEffect, useState } from 'react';
import moviesData from './moviesData';
import {Link} from 'react-router-dom';

//const [movie,setMovie]=useState(moviesData);

const MovieDeatail =({match})=>{

  //  const fetchMovie = () =>{
    let movieDet = {};
    let f = 1;
    moviesData.map((movie,index)=>
    (movie.Title === match.params.title?
        movieDet = movie
     :f=0 ))
 
   // }
   console.log(movieDet)
    const style = {
        color:'white'
    }
  
    return (
       
        <div className="movieDetail">
        
        <h1 style={style}>{movieDet.Title}</h1>
        <p style={style}>{movieDet.Description}</p>
        <h3 style={style}>Movie official Trailer:</h3>
        <iframe width="960" height="506" src={movieDet.Trailer}
        frameborder="0" a></iframe><br/><br/>

        <Link className="back" to ="/"> Back To Home </Link>
      
        </div>
    )
}

export default MovieDeatail;


