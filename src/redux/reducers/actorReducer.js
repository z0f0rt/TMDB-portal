import {
  SET_ACTOR_DETAIL
} from '../actions';

const initialStateActor = {};

export const detailsActorReducer = (state = initialStateActor, action) => {
  switch (action.type) {
    case SET_ACTOR_DETAIL:
      return { ...action.payload };
    default:
      return state;
  }
};
