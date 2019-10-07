import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class AddCoffeeForm extends Component {
    state = {
        coffeelName: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, 
    create coffee object, 
    invoke the APIManager post method, 
    and redirect to the full coffee list
    */

    constructNewCoffee = evt => {
        evt.preventDefault();
        if (this.state.coffeeName === "") {
            window.alert("Please input a coffee name");
        } else {
            this.setState({ loadingStatus: true });
            const coffee = {
                name: this.state.coffeeName
            };

            // Create the coffee and redirect user to coffee list
            APIManager.post(coffee)
                .then(() => this.props.history.push("/coffee"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="coffeeName"
                                placeholder="Coffee name"
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewCoffee}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AddCoffeeForm