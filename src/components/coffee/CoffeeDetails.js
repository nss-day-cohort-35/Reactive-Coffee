import React, { Component } from 'react';
import APIManager from '../../modules/APIManager'
import CardHeader from 'reactstrap/lib/CardHeader';

class CoffeeDetail extends Component {

    state = {
      name: "",
      loadingStatus: true
    }
  
    handleDelete = () => {
      //invoke the delete function in APIManger and re-direct to the coffee list.
      this.setState({ loadingStatus: true })
      APIManager.delete(this.props.coffeeId)
        .then(() => this.props.history.push("/coffee"))
    }
    componentDidMount() {
      console.log("CoffeeDetail: ComponentDidMount");
      //get(id) from APIManager and hang on to that data; put it into state
      APIManager.get(this.props.coffeeId)
        .then((coffee) => {
          this.setState({
            name: coffee.name,
            loadingStatus: false
          });
        });
    }
 
    render() {
      if(this.state.loadingStatus) { 
        return <p>Loading...</p>
      }
  
      return (
        <div className="card">
          <div className="card-content">
            <h3><span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      );
    }
  }
  
  export default CoffeeDetail;