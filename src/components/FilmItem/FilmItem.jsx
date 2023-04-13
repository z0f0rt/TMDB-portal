import React from "react";
export const FilmItem = ({ rating, film }) => {
  return (
    <li className="movie-item">
      <div className="movie-rating">
        <div className="movie-rating-circle">
          <span className="movie-rating-number">{rating}</span>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original${film?.poster_path}`}
        width="300"
        height="430"
        alt="img"
      />
      <div className="text-zinc-100 text-xl text-center">
        {film?.original_title}
      </div>
    </li>
  );
};
