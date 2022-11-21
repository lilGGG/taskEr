import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchCategory } from '../actions/categoriesActions';
// import { useSelector } from 'react-redux'
import {store}  from "../store"
// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../index";

// import { actionCreators } from "../actions/categoriesActions";


const Categories= ({store}) =>  {

  const state = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const { fetchCategories, fetchCategory } = bindActionCreators(actionCreators, dispatch);
 
  const [categoriesF, setCategoriesF] = useState([]);
  // const selRes = useSelector((state) => state.items)
  const [cat, setCat] = useState({});

  useEffect(() => {
    console.log("state", state);
    fetchCategories();
    setCategoriesF(fetchCategories());
    console.log("categoriesF", categoriesF);
    // console.log(selRes, "selRes")
    // // console.log("categoriesF", categories)
    // setCategoriesF(selRes)
    // this.props.store.dispatch(fetchCategories())


    // const state = store.getState();
    // setCat(state.categories);
    // console.log("cat", cat)
    // setCategoriesF(dispatch(fetchCategories()));
    // console.log(categoriesF)


    // console.log(props.store.dispatch(fetchCategories()))
  },[])

  // const postItems = store.items.map(cat => (
  //   <div key = {cat.id}> 
  //      <h3> {cat.title} </h3>
  //   </div>
  // ))

   return (
    <>
      {/* {postItems} */}
      {/* <button onClick={() => fetchCategories()}>  fetch all </button> */}
      {/* <p> {state.items} </p> */}
      {/* <button onClick={() => dispatch({ type: 'FETCH_CATEGORIES' })}> fetch</button> */}
      {state.items.map((item)=> (
        <p> {item.name}  </p>
         
      ))}
     {/* {categoriesF[0].name} */}
     {/* { fetchCategories().map((category, index) => (        
          <p> {category.name}  </p>
     ))} */}
    </>
  )
}

Categories.propTypes = {
  fetchCategories: propTypes.func.isRequired,
  categories: propTypes.array.isRequired,
  category: propTypes.object,
  categ:  propTypes.func.isRequired,

};

const categor = () => ({ type: 'FETCH_CATEGORIES' })

const mapDispatchToProps = (state, dispatch) => {
  return {
    // dispatching actions returned by action creators
    categories: state.posts.items,
    category: state.posts.item,
    categ: () => dispatch(categor()),
  }
}

// const mapStateToProps = state => ({
//   categories: state.posts.items,
//   category: state.posts.item,
//   categ: () => dispatch({ type: 'FETCH_CATEGORIES' }),
// });

export default connect(mapDispatchToProps, {fetchCategories})(Categories);

