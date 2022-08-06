import { Component } from 'react'
import { Accordion } from 'react-bootstrap';
import WeatherDay from './WeatherDay';
 class Weather extends Component {
  render() {
    return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
          <Accordion.Header>
            Press for Details about weather 
          </Accordion.Header>
          {this.props.weatherInfo.map(value => <WeatherDay dayData={value}/>)}
          
      </Accordion.Item>
    </Accordion>
    )
  }
}

export default Weather;
