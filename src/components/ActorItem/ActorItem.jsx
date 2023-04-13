import React from "react";
export const ActorItem = ({ actor }) => {
  return (
    <li className="movie-item ml-5 mr-3">
      <div className="movie-rating">
        <div className="movie-rating-circle">
          <span className="movie-rating-number">✰</span>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original${actor?.profile_path}`}
        width="300"
        height="430"
        alt="img"
      />
      <div className="text-zinc-100 text-xl text-center">{actor.name}</div>
    </li>
  );
};
