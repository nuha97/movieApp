import React from  'react';
import ReactStars from "react-rating-stars-component";

function Filter (props){

    const handleInput =(e)=> {   
        props.setSearchInput(e.target.value)
      }
    const handleRating = (searchRating) => {
        props.setRatingFilter(searchRating)
      };
     
    return (
        <section className="searchbox-wrap">
            <input
             type="text" 
            //  value={searchValue}
             placeholder="search for a movie ..."
             className="searchbox" 
             onChange={handleInput}
            />
            <ReactStars
            count ={5}
            onChange = {handleRating}
            size = {24}
            activeColor = "#ffd700"
            />
            
        </section>
    );
}

export default Filter ;
