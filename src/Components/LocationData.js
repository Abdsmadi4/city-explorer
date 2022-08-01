import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class LocationData extends Component {
    display_name = this.props.display_name;
    render() {
        return (
            <Card style={{ width: '30%' }}>
                <Card.Img
                    src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.props.latitude},${this.props.longitude}&zoom=1-18`}
                    alt={this.props.display_name}
                />
                <Card.Body>
                    <Card.Title>{this.props.display_name}</Card.Title>
                    <Card.Text>
                        Latitude: {this.props.latitude}
                    </Card.Text>
                    <Card.Text>
                        Longitude: {this.props.longitude}
                    </Card.Text>
                </Card.Body>
            </Card>


        )
    }
}

export default LocationData;
