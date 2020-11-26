
import react, { useState } from "react";
import MovieBlock from "./components/movie-block/movie-block"
import './main_page.css';

function MainScreen({movies}){ 
   

    return (
        <div className = "main-page-container">
                {movies ? movies.map(movie => 
                    <MovieBlock movie = {movie}/>) : null}
        </div>   
 )
}


export default MainScreen;