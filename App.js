import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import Container from './Src/Controller/Navigator';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Src/Redux/Store/ConfigureStore';

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <Provider store={store}>
          <Container />
        </Provider>
      </>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
