import React, { useState, useEffect } from "react";
import "./actorsPage.style.css";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ActorItem } from "../../components/ActorItem/ActorItem";

export const ActorsPage = () => {
  const [popularPersons, setPopularPersons] = useState([]);
  const [totalPages, setTotalPages] = useState(300);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?page=${currentPage}&api_key=cf73e32110905ebc4658441b6662b269`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(data.total_pages);
        setPopularPersons(data.results);
      });
  }, [currentPage]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [popularPersons]);

  const onChangeSearchValue = (inputValue) => {
    console.log(inputValue);
    if (inputValue === searchValue) return;
    if (inputValue === "") {
      fetch(
        `https://api.themoviedb.org/3/person/popular?page=${currentPage}&api_key=cf73e32110905ebc4658441b6662b269`
      )
        .then((res) => res.json())
        .then((data) => {
          setTotalPages(data.total_pages);
          setPopularPersons(data.results);
          setSearchValue("");
        });
    } else {
      setSearchValue(inputValue);
      fetch(
        ` https://api.themoviedb.org/3/search/person?api_key=cf73e32110905ebc4658441b6662b269&language=en-US&query=${inputValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPopularPersons(data.results);
          setTotalPages(1);
        });
    }
  };

  const getNewPage = (num) => {
    fetch(
      ` https://api.themoviedb.org/3/search/person?api_key=cf73e32110905ebc4658441b6662b269&language=en-US&query=${searchValue}&page=${num}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularPersons(data.results);
        setTotalPages(data.total_pages);
      });
    setCurrentPage(num);
    setSearchValue("");
  };
  return (
    <div className="list-actors-page">
      <div className="flex flex-col mb-3 w-52 params-actors">
        <SearchBar
          className="ml-300"
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
        />
      </div>
      <div className="bg-black mr-9 ml-9 rounded">
        <div className="grid gap-4 grid-cols-5 grid-rows-4 mt-3">
          {popularPersons?.map((person, index) => {
            return (
              <Link to={`/films/${person.id}`} key={index}>
                <ActorItem actor={person} />
              </Link>
            );
          })}
        </div>
      </div>
      {totalPages <= 1 ? (
        <div></div>
      ) : (
        <div className="flex justify-center mt-5 text-cyan-500 border border-indigo-600 bg-white pagination-actors">
          <Pagination
            className="pagination"
            count={totalPages}
            page={currentPage}
            onChange={(_, num) => getNewPage(num)}
            variant="outlined"
            color="secondary"
          />
        </div>
      )}
    </div>
  );
};
