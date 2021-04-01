/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react'
import {StyleSheet,Text,View,Animated,} from 'react-native'
import { API_KEY } from './APIKey';
import WeatherView from './WeatherView'
import Geolocation from '@react-native-community/geolocation';

class App extends Component {

  state = {
    isloading: false,
    temperature: 0,
    weatherdata: null,
    error: null
  }

  componentDidMount() {
    console.log('Started component');

    this.fetchDataFromServer(55.6761, 12.5683);

    
  /*  Geolocation.getCurrentPosition(
      position => {
        this.fetchDataFromServer(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting data'
        });
      }
    );*/
  }

  fetchDataFromServer(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
         console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherdata: json.weather[0].main,
          isLoading: false
        });
      });
  }

 render() {
      const { isLoading, weatherdata, temperature } = this.state;
      return (
        <View style={styles.container}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Fetching The Data from server</Text>
            </View>
          ) : (
            <WeatherView weatherdata={weatherdata} temperature={temperature} />
          )}
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});


export default App;