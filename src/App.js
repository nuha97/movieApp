import './App.css';
import React, { useEffect } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import moviesData from './component/moviesData';
import {useState}  from 'react';
import AddMovie from './component/AddMovie';
import Home from './component/Home'
import MovieDetail from './component/MovieDetail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     
      <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/MovieDetail/:title"  component={MovieDetail}/>
         </Switch>
    </div>
    </Router>
  );
}

export default App;

