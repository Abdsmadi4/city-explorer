import { Component } from 'react'
import { Accordion } from 'react-bootstrap';

export class Weather extends Component {
  render() {
    return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
          <Accordion.Header>
            Press for Details about weather 
          </Accordion.Header>
          {this.props.weatherInfo.map(value => <Accordion.Body>{ value.description } : {value.date}</Accordion.Body>)}
          
      </Accordion.Item>
    </Accordion>
    )
  }
}

export default Weather;
