import React, { Component } from 'react'
import { Route } from "react-router-dom"
import CoffeeList from "./coffee/CoffeeList"
import CoffeeDetails from "./coffee/CoffeeDetails"
import AddCoffeeForm from "./coffee/AddCoffeeForm"



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/coffee" render={(props) => {
          return <CoffeeList {...props} />
        }} />

        <Route exact path="/coffee/:coffeeId(\d+)" render={(props) => {
          return <CoffeeDetails coffeeId={parseInt(props.match.params.coffeeId)}{...props} />
        }} />

        <Route exact path="/coffee/new" render={(props) => {
          return <AddCoffeeForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews