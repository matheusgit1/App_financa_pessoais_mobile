import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes/index';

export default function App() {
   let firebaseConfig = {
      apiKey: "AIzaSyA9jLjJf9tjT3wVTcoXkDzRAupD0hHz8iI",
      authDomain: "cidadenoticia-d2c48.firebaseapp.com",
      databaseURL: "https://cidadenoticia-d2c48-default-rtdb.firebaseio.com",
      projectId: "cidadenoticia-d2c48",
      storageBucket: "cidadenoticia-d2c48.appspot.com",
      messagingSenderId: "25935586481",
      appId: "1:25935586481:web:ed6fc8deff96b147fb2e90",
      measurementId: "G-7B6L6C05EW"
    };
    // Initialize Firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
      //firebase.analytics();
    }
    
 return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}