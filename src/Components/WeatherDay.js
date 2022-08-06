import { Component } from "react";
import { Accordion } from 'react-bootstrap';

export default class WeatherDay extends Component { 
    render(){
        return (
            <Accordion.Body>{ this.props.dayData.description } : {this.props.dayData.date}</Accordion.Body>
        )
    }
}