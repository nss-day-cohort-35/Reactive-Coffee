import React, { Component } from 'react';
import { Card, CardText, Button, CardSubtitle, CardHeader } from 'reactstrap';
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
                <Button className="coffee-btns" color="primary">Details</Button>
                <Button className="coffee-btns" color="danger">Delete</Button>
            </Card>
        )
    }
}

export default CoffeeCard