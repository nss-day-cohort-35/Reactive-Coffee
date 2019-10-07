import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CoffeeCard extends Component {
    render() {
        return (
            <Card body>
                <CardTitle>Mocha</CardTitle>
                <CardText>It's good</CardText>
                <Button color="primary">Details</Button>
                <Button color="danger">Delete</Button>
            </Card>
        )
    }
}

export default CoffeeCard