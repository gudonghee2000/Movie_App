import React from "react";
import Proptypes, { string } from "prop-types";

function Movie({id, title, year, genres, summary, img}){
    return (
        <div className="movie">
            <img className="movie__img" src={img} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

Movie.prototype = {
    id : Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    year : Proptypes.number.isRequired,
    genres : Proptypes.arrayOf(string).isRequired,
    summary : Proptypes.string.isRequired,
    img : Proptypes.string.isRequired
};

export default Movie;