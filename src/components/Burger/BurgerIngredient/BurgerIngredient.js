import React, { Component } from 'react'
import classes from './BurgerIngredient.css'
// ran npm install prop-types; adding props validations to ensure
// our burgerIngredient component receives a props object that
// contains the property "type"
import PropTypes from 'prop-types'

// at first, we had this as a functional component; we decided to
// convert to a class-based component so we could implement some
// props validation; however, we're still going to consider it a
// "component" and not a "container" because we don't plan on
// managing state from this component and will still have it remain
// stateless
class BurgerIngredient extends Component {
  render () {
    let ingredient = null

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>
        break
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>
        break
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>
        break
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>
        break
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>
        break
      default:
        ingredient = null
    }

    return ingredient
  }
}

// add a validation to ensure that our burgerIngredient component
// in fact receives props with a type property
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient
