
import react,{useState,useEffect} from "react";
import './movie-block.css';

function MovieBlock({movie}){ 
  
    const [displayedMovie, setMovie] = useState(null)

    useEffect(() => {
        setMovie(movie)
    },[movie])
    
    return (
        !displayedMovie ? <div>Loading</div> : 
        <div className = "block-container">
            <div className = "title">{displayedMovie.fullName}</div>
            <div className = "row">{displayedMovie.budget}</div>
            <div className = "row reverse">{displayedMovie.cwg}</div>
            <div className = "row"><ReleaseDateBlockDisplay releaseDate = {displayedMovie.releaseDate}/></div>
            <div className = "row reverse">{displayedMovie.runtime}</div>
            <div className = "row"><DisplayGenres genres = {displayedMovie.genres}/></div>
            <div className = "row reverse"> {displayedMovie.rating}</div>
        </div>
    )      
}

const ReleaseDateBlockDisplay = ({releaseDate}) => <div>{`${releaseDate.month}, ${releaseDate.day} ${releaseDate.year}`}</div>;

const DisplayGenres = ({genres}) => {

    const [genresList, setGenresList] = useState([])

    useEffect(() => {
        setGenresList(genres.split(" "));
    },[genres])
    
    return (
        genresList.map(genre => genre)
    )}

export default MovieBlock;