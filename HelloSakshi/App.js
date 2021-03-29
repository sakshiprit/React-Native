/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {


  tetss = 1

  state = {
    count: 0
  }

  onPress = () => {
    this.tetss = this.tetss + 1
    console.log("print " + this.tetss)
    this.setState({
      count: this.state.count + 1
    })
  }
  

 render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
       style={styles.button}
       onPress={this.onPress}
      >
       <Text>Click me on this to increase counter</Text>
      </TouchableOpacity>

      <View>
        <Text>
          You clicked { this.tetss } times
        </Text>
      </View>
    </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;