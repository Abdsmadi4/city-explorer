import './App.css';
import axios from 'axios';
import { Component } from 'react';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import LocationData from './Components/LocationData';
import ErrorPage from './Components/ErrorPage';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      map: {},
      allCity: {},
      display_name: '',
      latitude: '',
      longitude: '',
      src: '',
      errorMessage: '', 
      error: false
    }
  }



  getCityName = async (e) => {
    e.preventDefault();

    try {

      const cityData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${e.target.userCityInput.value}&format=json`)

      this.setState({
        userInput: e.target.userCityInput.value,
        allCity: cityData.data[0],
        display_name: cityData.data[0].display_name,
        latitude: cityData.data[0].lat,
        longitude: cityData.data[0].lon,
        error: false
      });
    } catch (e) {

      this.setState({
        error: true,
        errorMessage: e.response.status + ' : '+ e.response.data.error,
        display_name:''
      });
    }

  }
  handleClose = () =>{
    this.setState({
      error: true,
    });
  }

  render() {
    return (

      <div className="App">
        <Header title={process.env.REACT_APP_TITLE} />
        <SearchForm submitHandler={this.getCityName} />
        {this.state.display_name &&
          <LocationData
            city={this.state.display_name}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
        }

        {
          this.state.error &&
          <ErrorPage errorMessage={this.state.errorMessage} handleClose={this.handleClose} />
        }
      </div>
    );
  }

}

export default App;
