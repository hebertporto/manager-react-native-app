import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

compomentWillMount() {
    const config = {
      apiKey: 'AIzaSyBSFNS0Z0WWniw0BywFJ-0DlGXe_gxbGxs',
      authDomain: 'manager-8f225.firebaseapp.com',
      databaseURL: 'https://manager-8f225.firebaseio.com',
      storageBucket: 'manager-8f225.appspot.com',
      messagingSenderId: '535727167319'
    };
    firebase.initializeApp(config);
}

   render() {
     return (
        <Provider store={createStore(reducers)}>
          <LoginForm />
        </Provider>
     );
   }
}

export default App;
