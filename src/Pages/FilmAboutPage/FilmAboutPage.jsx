import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./filmsAboutPage.style.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilmsExactActionCreator } from "../../redux/actions";

export const FilmAboutPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const currentMovieDetail = useSelector((state) => state.detailsFilm);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cf73e32110905ebc4658441b6662b269&language=en-US`
    )
      .then((result) => result.json())
      .then((film) => dispatch(setFilmsExactActionCreator(film)));
  };

  return (
    <div className="background-films">
    <div className="flex justify-center p-12 bg-black mt-3 mr-3 ml-3 mb-10">
      <div className="flex mt-10 justify-center ">
        <div className="rounded">
          <div className="rounded rounded-lg ">
            <img
              className="rounded-lg pl-3 pt-2 "
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              width="630"
              height="850"
              alt="poster"
            />
          </div>
        </div>
        <div className="movie-detailRight ml-10 ">
          <div className="movie-detailRightTop text-center pl-0">
            <div className="movie-name text-cyan-500 text-3xl">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie-tagline text-slate-100">
              {currentMovieDetail.tagline ? currentMovieDetail.tagline : ""}
            </div>
            <br></br>
            <br></br>
            <div className="movie-runtime text-slate-100">
              {currentMovieDetail
                ? "Общая продолжительность:" +
                  currentMovieDetail.runtime +
                  " минут"
                : "НЕИЗВЕСТНО"}
            </div>
            <div className="movie-releaseDate text-slate-100">
              {currentMovieDetail
                ? "Дата выхода: " + currentMovieDetail.release_date
                : ""}
            </div>
          </div>
        </div>
        <div className="movie-detail-right-bottom text-center">
          <div className="synopsis-text text-cyan-500 mt-16 text-3xl">Описание</div>
          <div className="text text-slate-100">
            {currentMovieDetail.overview ? currentMovieDetail.overview : "ОТСУТСТВУЕТ"}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
