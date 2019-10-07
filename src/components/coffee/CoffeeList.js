import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard';
import APIManager from '../../modules/APIManager';

class CoffeeList extends Component {
    state = {
        allCoffee: []
    }

    componentDidMount(){
        APIManager.getAll("coffees").then((allCoffee) => {
            this.setState({
                allCoffee: allCoffee
            })
        })
    }

    render(){
        console.log("pls render coffee")
        return (
            <>
            <h1>COFFEE LIST</h1>
            {
                this.state.allCoffee.map(coffee =>
                    <CoffeeCard key={coffee.id} coffee={coffee}/>
                )
            }
            </>
        )
    }
}

export default CoffeeList;