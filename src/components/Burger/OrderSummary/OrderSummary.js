import React, { Component } from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  // This could be a functional component; doesn't need to be class-based;
  // converted to class to see when it was updating; added update-blocking logic
  // to its wrapping component, the modal, however, so this can still be a
  // functional component
  componentWillUpdate() {
    console.log('[Order Summary] WillUpdate')
  }

  /* --------------------------------------------------- */
	/*         Render - Lifecycle Hook Method
	/* --------------------------------------------------- */
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map(ingredient => {
      return <li key={ingredient}><span style={{ textTransform: 'capitalize' }}>{ingredient}</span>: {this.props.ingredients[ingredient]}</li>
    })

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger"
                clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success"
                clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    )
  }
}

export default OrderSummary
