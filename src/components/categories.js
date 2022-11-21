import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
// import { useSelector } from 'react-redux'

const Categories= ({store}) =>  {
  const dispatch = useDispatch()
  const [categoriesF, setCategoriesF] = useState({});
  const selRes=  useSelector((state) => state.items)

  useEffect(() => {
    // fetchCategories();
    // console.log(selRes)
    // // console.log("categoriesF", categories)
    // setCategoriesF(selRes)
    // this.props.store.dispatch(fetchCategories())
    setCategoriesF(dispatch(fetchCategories()));
    console.log(categoriesF)
    // console.log(props.store.dispatch(fetchCategories()))
  })

  // const postItems = store.items.map(cat => (
  //   <div key = {cat.id}> 
  //      <h3> {cat.title} </h3>
  //   </div>
  // ))

   return (
    <>
      {/* {postItems} */}
      <button onClick={() => dispatch({ type: 'FETCH_CATEGORIES' })}> fetch</button>
     { store.items.map((category, index) => (
        //  "hello"
          <p> {category.name}  </p>
        //  {category.name}
        // <Task key= {index}  task = {task}  onDelete={onDelete} onToggle= {onToggle} />
     ))}
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

