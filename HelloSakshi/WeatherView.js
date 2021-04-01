import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { wetherStyleSheet } from './WetherStyleSheet';

const WeatherView = ({ weatherdata, temperature }) => {
  if (weatherdata != null) {
    return (
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor: wetherStyleSheet[weatherdata].color }
        ]}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{wetherStyleSheet[weatherdata].title}</Text>
          <Text style={styles.subtitle}>
            {wetherStyleSheet[weatherdata].subtitle}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.headerContainer}>
        <Text>Oh no, something went wrong</Text>
      </View>
    )
  };
};

WeatherView.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherdata: PropTypes.string
};

const styles = StyleSheet.create({

  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default WeatherView;
