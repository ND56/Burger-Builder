import React from 'react'

import classes from './Backdrop.css'

// really simple; basically, we want the backdrop to appear if the modal is
// showing; otherwise we want this component to do nothing, so we have it render
// null; one thing I'm consued about is I feel like we normally needed to wrap
// JS in single brackets when including JS syntax in our JSX return statement
// so I'm confused about that here.
const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop}
                    onClick={props.clicked}></div> : null
)

export default backdrop
