import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export class SearchForm extends Component {

  render() {
    return (
      <Form onSubmit={this.props.submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>City Name</Form.Label>
          <Form.Control type="text" placeholder="Enter city" id="userCityInput"  />
          <Form.Text className="text-muted">
            by entering city name data will be rendered.
          </Form.Text>
        </Form.Group>
        <Button variant="secondary" type="submit" >
          Explore!
        </Button>
      </Form>
    )
  }
}

export default SearchForm;