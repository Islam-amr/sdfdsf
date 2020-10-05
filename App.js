import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import Container from './Src/Controller/Navigator';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Src/Redux/Store/ConfigureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Loading } from './Src/Components/Loading';


const { persistor, store } = ConfigureStore();


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
          <PersistGate
            loading={<Loading Color={'blue'} />}
            persistor={persistor}
          >
            <Container />
          </PersistGate>
        </Provider>
      </>
    )
  }
}



const styles = StyleSheet.create({

});

export default App;
