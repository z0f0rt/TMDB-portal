import { combineReducers, createStore, applyMiddleware } from "redux";
import  { detailsFilmReducer } from "./reducers/movieReducer";
import { detailsActorReducer } from "./reducers/actorReducer";




export const rootReducer = combineReducers({
  detailsFilm: detailsFilmReducer,
  detailsActor: detailsActorReducer,
});

export const store = createStore(rootReducer, applyMiddleware());
