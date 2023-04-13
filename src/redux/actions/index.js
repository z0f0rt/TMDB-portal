export const SET_ACTOR_DETAIL = 'SET_ACTOR_DETAIL';
export const SET_FILM_DETAIL = 'SET_FILM_DETAIL';

export const setActorsExatsActionCreator = actor => ({type: SET_ACTOR_DETAIL, payload: actor});
export const setFilmsExactActionCreator = film => ({type: SET_FILM_DETAIL, payload: film});

