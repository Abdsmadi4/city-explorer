import './App.css';
import axios from 'axios';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data : [],
    }
  }

  getData = async(e) =>{
    e.preventDefault();
    const api = process.env.REACT_APP_API ;
    const apiData = await axios.get(api);
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.getData}>
          <Button variant="dark" type="submit">
            Explore!
          </Button>

        </Form>
      </div>
    );
  }

}

export default App;
