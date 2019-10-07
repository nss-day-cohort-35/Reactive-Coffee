import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, CardText, CardHeader, Button, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class CoffeeCard extends Component {

    render() {
        return (
            <Card className="coffee-card">
                <CardHeader>
                    {this.props.coffee.name}
                </CardHeader>
                <CardText>{this.props.coffee.description}</CardText>
                <CardSubtitle>{this.props.coffee.price}</CardSubtitle>
                <Link to={`/coffee/${this.props.coffee.id}`}><Button color="primary">Details</Button></Link>
                <Button color="danger"onClick={() => this.props.deleteCoffee(this.props.coffee.id)}>Delete</Button>
            </Card>
        )
    }
}

export default CoffeeCard