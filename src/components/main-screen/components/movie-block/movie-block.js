
import react,{useState} from "react";
import './movie-block.css';

function MovieBlock({data}){ 
    const 
        {
        fullName,
        genres,
        budget,
        cwg,
        releaseDate,
        rating,
        runtime} = data
    
    return (
        <div className = "to-die">
            <div className = "block-container">
                <div className = "title">{fullName}</div>
                <div className = "row">{budget}</div>
                <div className = "row reverse">{cwg}</div>
                <div className = "row"><ReleaseDateBlockDisplay data = {releaseDate}/></div>
                <div className = "row reverse">{runtime}</div>
                <div className = "row"><DisplayGenres data = {genres}/></div>
                <div className = "row reverse"> {rating}</div>
            </div>
        </div>   
 )      
}

const ReleaseDateBlockDisplay = ({data}) => <div>{`${data.month}, ${data.day} ${data.year}`}</div>;

const DisplayGenres = ({data}) => {
    return (
    <div>
        {data.map(genre => <span> {genre}</span>)}
    </div>
    )}

export default MovieBlock;