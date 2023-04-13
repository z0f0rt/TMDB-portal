import { Pagination } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./filmsPage.style.css";
import { SelectFilters } from "../../components/SelectFilters/SelectFilters";
import { Link } from "react-router-dom";
import { FilmItem } from "../../components/FilmItem/FilmItem";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const FilmsPage = () => {
  const [films, setFilms] = useState([]);
  const [totalPages, setTotalPages] = useState(300);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("popular");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filter}?page=${currentPage}&api_key=cf73e32110905ebc4658441b6662b269`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results);
        setTotalPages(300);
      });
  }, [currentPage, filter]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [films]);

  const onChangeSearchValue = (inputValue) => {
    if (inputValue === searchValue) return;
    setSearchValue(inputValue);
    if (inputValue === "") {
      fetch(
        `https://api.themoviedb.org/3/movie/${filter}?page=${currentPage}&api_key=cf73e32110905ebc4658441b6662b269`
      )
        .then((res) => res.json())
        .then((data) => {
          setFilms(data.results);
          setTotalPages(300);
        });
    } else {
      fetch(
        ` https://api.themoviedb.org/3/search/movie?api_key=cf73e32110905ebc4658441b6662b269&language=en-US&query=${inputValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFilms(data.results);
          setTotalPages(1);
        });
    }
  };

  const onClickChanged = (value) => {
    console.log("type changed");
    setFilter(value);
  };

  const getNewPage = (num) => {
    fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=cf73e32110905ebc4658441b6662b269&language=en-US&query=${searchValue}&page=${num}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setFilms(data.results);
        setTotalPages(data.total_pages);
      });
    setCurrentPage(num);
  };

  return (
    <div className="background">
      <div className="flex flex-col mb-3 w-52 params">
        <SearchBar
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
        />
        <SelectFilters filter={filter} onClickChanged={onClickChanged} />
      </div>
      <div className="bg-black mr-9 ml-9 rounded">
        <div className="grid gap-4 grid-cols-5 grid-rows-4 ">
          {films?.map((film, index) => {
            const average = film.vote_average;
            const rating = Math.round(average * 10) / 10;
            return (
              <Link
                to={`/actors/${film.id}`}
                key={index}
                className="pr-7 pl-7 pb-10"
              >
                <FilmItem rating={rating} film={film} />
              </Link>
            );
          })}
        </div>
        {totalPages <= 1 ? (
          <div></div>
        ) : (
          <div className="flex justify-center mt-5 text-cyan-500  border border-indigo-600 bg-neutral-300 pagination-films">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(_, num) => {
                getNewPage(num);
              }}
              variant="outlined"
              color="primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};
