import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';

export class ErrorPage extends Component {

  render() {
    return (
      
      <Alert variant="danger" onClose={this.props.handleClose}>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {this.props.errorMessage}
        </p>
      </Alert>
    )
  }
}

export default ErrorPage;
