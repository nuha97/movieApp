import './App.css';
import React, { useEffect } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import moviesData from './component/moviesData';
import {useState}  from 'react';
import AddMovie from './component/AddMovie';

function App() {

 // const [movieList, setMovieList] = useState(moviesData) 
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

export default App;
//react dev tool search={search}