import {FETCH_CATEGORIES, FETCH_CATEGORY} from '../actions/types';

const initialState = {
  items: [],
  item: { }
}

export default function(state = initialState, action){
  switch (action.type){
    case FETCH_CATEGORIES:
     return {
      ...state,
      items: action.payload
     };
     case FETCH_CATEGORY:
       return {
        ...state,
        item: action.payload
       }
        default:
           return state; 
  }
}

