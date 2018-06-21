import React from 'react'

import classes from './BuildControl.css'

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    {/* Interesting; disabled is actually a default HTML element property that we can set */}
    <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
    <button className={classes.More} onClick={props.added}>More</button>
  </div>
)

export default buildControl
