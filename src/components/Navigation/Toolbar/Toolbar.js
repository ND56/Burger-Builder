import React from 'react'

import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    {/* Note that these are all placeholders for now */}
    <div>MENU</div>
    <Logo />
    <nav>
      LINKS
    </nav>
  </header>
)

export default toolbar
