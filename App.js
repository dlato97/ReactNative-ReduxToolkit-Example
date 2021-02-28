/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {Provider} from 'react-redux';
import store from './store/store';

import HomeScreen from './Pages/home/HomeScreen';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
