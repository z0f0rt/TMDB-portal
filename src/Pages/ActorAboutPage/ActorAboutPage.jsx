import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActorsExatsActionCreator } from "../../redux/actions";
import "./actors.style.css";
export const ActorAboutPage = () => {
  const [image, setImage] = useState("");
  const { id } = useParams();

  const dispatch = useDispatch();

  const currentPerson = useSelector((state) => state.detailsActor);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = () => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=5058efa201f4ad4fba59a8deb39502b3`
    )
      .then((result) => result.json())
      .then((actor) => dispatch(setActorsExatsActionCreator(actor)));

    fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=5058efa201f4ad4fba59a8deb39502b3`
    )
      .then((res) => res.json())
      .then((data) => setImage(data.profiles[0]?.file_path));
  };
  console.log(currentPerson);
  return (
    <div className="background-actors">
      <div className="bg-black pb-2 mt-3 h-full mr-6 ml-6">
        <div className="flex justify-center">
          <img
            className="rounded-lg pl-3 pt-2"
            src={`https://image.tmdb.org/t/p/original${image}`}
            width="230"
            height="450"
            alt="somting went wrong"
          />
          <div className="text-slate-100 pt-10 pl-5">
            <div className=" text-3xl text-cyan-500">
              {currentPerson ? currentPerson.name : ""}
            </div>
            <div className="text-slate-100">
              {currentPerson.birthday !== null
                ? "День рождения: " + currentPerson?.birthday
                : "НЕИЗВЕСТНО"}
            </div>
            <div className="text-slate-100">
              {currentPerson.place_of_birth !== null
                ? "Место рождения: " + currentPerson?.place_of_birth
                : "НЕИЗВЕСТНО"}
            </div>
            <div className="text-slate-100">
              {currentPerson
                ? "Рейтинг популярности: " + currentPerson.popularity
                : ""}
            </div>
          </div>
        </div>
        <div className="text-3xl mt-5 text-center text-cyan-500">
          Биография:{" "}
        </div>
        <div className="text-slate-100  mt-5 mr-10 ml-10 text-center">
          {currentPerson.biography !== "" ? currentPerson.biography : "ОТСУТСТВУЕТ"}
        </div>
      </div>
    </div>
  );
};
