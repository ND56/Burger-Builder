import React from 'react'

// This makes webpack aware that we're using an image; we can't just write the
// file path in our code below because of the webpack build methodologies
// so, when we dynamically render this below, it will actually refer to the
// location where webpack stored the image.
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
)

export default logo
