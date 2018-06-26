// layout component will be a wrapper implementing the toolbar and the
// burger builder; once we add routing and pages, we’ll take advantage of the
// layout where toolbar always there but we will switch the page rendered in
// the content area of layout

// as can be seen below, we'll wrap the core content we want to render to the
// screen with this layout component

import React, { Component } from 'react'
import Aux from '../Aux/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  /* --------------------------------------------------- */
  /*         Layout Component State
  /* --------------------------------------------------- */
  state = {
    showSideDrawer: false
  }

  /* --------------------------------------------------- */
  /*         Event Handlers
  /* --------------------------------------------------- */
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  /* --------------------------------------------------- */
  /*         Render - Lifecycle Hook Method
  /* --------------------------------------------------- */
  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>

        <main className={classes.Content}>
          {/* Here we want to output the component we wrap with this layout
            so, hence what we render below */}
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout
