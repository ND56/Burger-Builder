import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

class BurgerBuilder extends Component {

  /* --------------------------------------------------- */
	/*         Render - Lifecycle Hook Method
	/* --------------------------------------------------- */
  // of course need to implement at least one very important lifecycle hook
  // method, the render method
  render () {

    // Of course, we want our render method to return some JSX
    return (
      <Aux>
        <div>Burger Graphical Representation</div>
        <div>Build Controls - Adding & Removing Ingredients</div>
      </Aux>
    )
  }
}

export default BurgerBuilder
