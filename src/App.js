import './App.css';
import { Component } from 'react';
import axios from "axios";
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import LocationData from './Components/LocationData';
import ErrorPage from './Components/ErrorPage';
import Weather from './Components/weather';
import Movie from './Components/Movie';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      latitude: '',
      longitude: '',
      displayInfo: false,
      errorMessage: '',
      displayError: false,
      weather: [],
      isWeather: false,
      movies: [],
      isMovie: false,
    }
  }



  getCityName = async (e) => {
    e.preventDefault();
    const userCityInput = e.target.userCityInput.value;
    try {
      const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${userCityInput}&format=json`;

      const cityData = await axios.get(url);

      this.setState({
        display_name: cityData.data[0].display_name,
        latitude: cityData.data[0].lat,
        longitude: cityData.data[0].lon,
        displayInfo: true,
        displayError: false
      });
      this.displayWeather(userCityInput, cityData.data[0].lat, cityData.data[0].lon);
      this.displayMovies(userCityInput);
    }
    catch (e) {

      this.setState({
        displayInfo: false,
        errorMessage: e.response.status + ' : ' + e.response.data.error,
        display_name: '',
        displayError: true
      });
    }

  }

  handleClose = () => {
    this.setState({
      displayInfo: false,
    });
  }

  displayWeather = async (searchQuery, lat, lon) => {
    const url = `http://localhost:8080/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`;
    try {
      const weatherData = await axios.get(url);
      this.setState({
        isWeather: true,
        weather: weatherData.data,
      });

    } catch (e) {
      this.setState({
        errorMessage: e.response.status + ' : ' + e.response.data.error,
        displayError: true,
        isWeather: false,
        displayInfo: false,
      });
    }

  }

  displayMovies = async (searchQuery) => {
    const url = `http://localhost:8080/movies?searchQuery=${searchQuery}`;

    const movieData = await axios.get(url);

    try {
      this.setState({
        isMovie: true,
        movies: movieData.data,
      })
    }
    catch (e) {
      this.setState({
        isMovie: false,
      })
    }

  }

  render() {
    console.log(this.state.isMovie)
    return (

      <div className="App">
        <Header title={process.env.REACT_APP_TITLE} />
        <SearchForm submitHandler={this.getCityName} />
        {this.state.displayInfo &&
          <LocationData
            city={this.state.display_name}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
        }


        {this.state.isWeather &&
          <Weather weatherInfo={this.state.weather} />
        }

        {this.state.isMovie &&
          <Movie movieInfo={this.state.movies} />
        }



        {
          this.state.displayError &&
          <ErrorPage errorMessage={this.state.errorMessage} handleClose={this.handleClose} />
        }
      </div>
    );
  }

}

export default App;
