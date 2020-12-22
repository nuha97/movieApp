import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Card,  Button
} from 'react-bootstrap';



const MovieCard = ({movie}) =>{    
    return (
        <div className="movie">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.PosterUrl}/>
        <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
        {movie.Description}
        </Card.Text>
        <span className="rateStars">{('⭐').repeat(movie.Rate)}</span>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
      );
}

export default MovieCard ;
