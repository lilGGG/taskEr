import {FETCH_CATEGORIES, FETCH_CATEGORY} from '../actions/types'; 


export const  fetchCategories = () => dispatch => {
  return  fetch('https://api.thecatapi.com/v1/categories')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_CATEGORIES,
            payload:posts
        }) );
};

export  const  fetchCategory = (category_id) => dispatch => {
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${category_id}`)
         .then(res => res.json())
         .then(post => dispatch({
             type: FETCH_CATEGORY,
             payload:post
         }) );
 };
 