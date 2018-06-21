import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

// we're not building state here; we know the controls we want and they don't
// need to be dynamically altered in terms of which controls appear; we're
// just structuing like this instead of hard-coding the JSX because we like
// the idea of iterating over an array to render to the DOM
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl key={control.label}
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disabled={props.disabled[control.type]} />
    ))}
    <button className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
  </div>
)

export default buildControls
