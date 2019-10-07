import React, { Component } from 'react'
import { Route } from "react-router-dom"
import CoffeeList from "./coffee/CoffeeList"



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/coffee" render={(props) => {
          return <CoffeeList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews