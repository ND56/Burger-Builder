// layout component will be a wrapper implementing the toolbar and the
// burger builder; once we add routing and pages, we’ll take advantage of the
// layout where toolbar always there but we will switch the page rendered in
// the content area of layout

// as can be seen below, we'll wrap the core content we want to render to the
// screen with this layout component

import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
  <Aux>
    <Toolbar />

    <main className={classes.Content}>
      {/* Here we want to output the component we wrap with this layout
        so, hence what we render below */}
      {props.children}
    </main>
  </Aux>
)

export default layout
