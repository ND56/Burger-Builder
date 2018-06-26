import React, { Component } from 'react'

import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

// typically name constants you want to use as global constants in all caps
// this is so we can keep track of the cost of our burger
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  /* --------------------------------------------------- */
  /*         BurgerBuilder Component State
  /* --------------------------------------------------- */
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4, // base price for burger
    purchaseable: false, // need at least 1 ingredient; used for order button
    purchasing: false // dictate whether modal is showing
  }

  /* --------------------------------------------------- */
  /*         Event Handlers
  /* --------------------------------------------------- */
  updatePurchaseState = (updatedIngredients) => {
    const sum = Object.keys(updatedIngredients).map(ingredient => {
      return updatedIngredients[ingredient]
    }).reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)

    this.setState({ purchaseable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    // NOTE: really interesting; we countered a synchronicity issue like this;
    // even though we call updatePurchaseState after this setState, the below
    // is executed first, so the shallow copy used to check in the update
    // purchaseable method is out of date; we got around this by passing
    // the updatePurchaseState method our updated ingredients from this method
    // to check against
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    this.updatePurchaseState(updatedIngredients)
  }

  // The render-style syntax of declaring methods will not work correctly if we
  // use the "this" keyword if the method is triggered by an event.
  // So, we use the arrow syntax so as to not alter the context of the "this"
  // When we wrote this method using the render-style syntax,
  // we got an error that "undefined" does not have a setState property
  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    alert('You continue!')
  }

  /* --------------------------------------------------- */
	/*         Render - Lifecycle Hook Method
	/* --------------------------------------------------- */
  render () {
    // we decided that in addition to making it so the less button doesn't work
    // if there are 0 or fewer ingredients, we decided we actually want to
    // go ahead and disable the button altogether; here we're setting up a
    // shallow copy of our ingredients object
    const disabledInfo = {
      ...this.state.ingredients
    }
    // now we're replacing the quantity of the ingredients with just a boolean
    // that will dictate whether the button should be disabled; we're going to
    // pass the disabled info to the BuildControls component
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
          <OrderSummary ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler}
                       ingredientRemoved={this.removeIngredientHandler}
                       disabled={disabledInfo}
                       purchaseable={this.state.purchaseable}
                       price={this.state.totalPrice}
                       ordered={this.purchaseHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder
