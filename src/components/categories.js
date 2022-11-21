import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchCategory } from '../actions/categoriesActions';
import {store}  from "../store"
import { bindActionCreators } from 'redux';
import { actionCreators } from "../index";


const Categories= ({store}) =>  {

  const state = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const { fetchCategories, fetchCategory } = bindActionCreators(actionCreators, dispatch);
  

  useEffect(() => {
    fetchCategories();
  },[])


   return (
    <>
      {/* <button onClick={() => dispatch({ type: 'FETCH_CATEGORIES' })}> fetch</button> */}
      {state.items.map((item)=> (
        <p key={item.id}> {item.name}  </p>
      ))}
    </>
  )
}

Categories.propTypes = {
  fetchCategories: propTypes.func.isRequired,
  categories: propTypes.array.isRequired,
  category: propTypes.object,
  // categ:  propTypes.func.isRequired,

};

const mapDispatchToProps = (state, dispatch) => {
  return {
    // dispatching actions returned by action creators
    categories: state.posts.items,
    category: state.posts.item,
    // categ: () => dispatch(categor()),
  }
}


export default connect(mapDispatchToProps, {fetchCategories})(Categories);

