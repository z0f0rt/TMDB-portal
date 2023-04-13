import { SET_FILM_DETAIL } from "../actions";

const initialStateFilm = {};

export const detailsFilmReducer = (state = initialStateFilm, action) => {
  switch (action.type) {
    case SET_FILM_DETAIL:
      return { ...action.payload };
    default:
      return state;
  }
};
