import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  // transform ingredients object into an array to map convert
  let ingredientsArr = Object.keys(props.ingredients).map(ingredient => {
    // transform each ingredient into a new array that contains
    // the correct number of that specific ingredient

    // this will create an array where the length is equal to the key
    // of the object yielded by accessing the ingredient property
    // of the object
    // this replaces our ingredients array with an array of arrays
    // where each sub-array has a defined length of empty spaces
    // return [...Array(props.ingredients[ingredient])]

    // further fix this by chaining another .map on each sub-array
    // so we ultiately have an array of arrays that each contain
    // JSX
    return [...Array(props.ingredients[ingredient])].map((ingredientSpace, index) => {
      // In the end, we need to return an array of JSX for our component
      // to render to the DOM
      // keep in mind need to assign a key since we're returning and
      // rendering an array of JSX elements
      return <BurgerIngredient key={ingredient + index}
                        type={ingredient} />
    })
    // flatten array to check for length so we can include a message
    // if there are no ingredients on the burger
    // we're providing an initial value for the accumulator, an
    // empty array
    // so we're producing a new array and adding each element of
    // our sub-arrays to it; so now if we have no ingredients,
    // instead of an array of 4 empty sub-arrays, we just have one
    // empty array; NOTE: couldn't we have just used .flat here?
  }).reduce((accumulator, currentValue) => {
    // The concat() method is used to merge two or more arrays.
    // This method does not change the existing arrays, but
    // instead returns a new array
    return accumulator.concat(currentValue)
  }, [])

  if (ingredientsArr.length === 0) {
    ingredientsArr = <p>Please start adding ingredients!</p>
  }

  return (
    // use burger ingredient component
    // burger component is a wrapper around Ingredients
    // give wrapper styling to define width and height of our
    // burger
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsArr}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger
