import React, { useEffect } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import moviesData from './moviesData';
import {useState}  from 'react';
import AddMovie from './AddMovie';



function Home() {
 
  const [movieList, setMovieList] = useState (moviesData);
  const [search,setSearchInput] = useState("");
  const [rating, setRatingFilter] = useState(0);
  const [newMovie, setNewMovie] = useState({});

  useEffect(()=>
  {
    setMovieList([...movieList,newMovie])
  },[newMovie])
  return (
    <div className="App">
      <header>
      <h1 >Movie Application</h1>
      </header>

      <main>
      <Filter  setSearchInput={setSearchInput} setRatingFilter={setRatingFilter}/>
      <MovieList movieList={movieList} search={search} rating={rating} />
      <AddMovie setNewMovie={setNewMovie}  />      
      </main>
    
    </div>
 
  );
}

export default Home;
