import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchCategory } from '../actions/categoriesActions';
import {store}  from "../store"
import { bindActionCreators } from 'redux';
import { actionCreators } from "../index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


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
      <nav>
        <ul> 
        {state.items.map((itm)=> (
          <> 
            <button onClick={() => fetchCategory(itm.id)} key={itm.id}>
               {itm.name}  
            </button>
            <div> 
              <img src={state.item[0].url}/>  
              <img src={state.item[1].url}/>  
            </div>
          </>
          // <li>
          //   <Link key={item.id} to="/">{item.name} </Link>
          // </li>
        ))}

         

       </ul>
      </nav> 

      {/* <img src={state.item.url}/> */}

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
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

