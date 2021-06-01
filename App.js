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
   //firebase conexion goes down here
   let firebaseConfig = {
      apiKey: 'api key'
      authDomain: 'name project domain'
      databaseURL: 'database url'
      projectId: 'project id'
      storageBucket: 'storage bucket'
      messagingSenderId: 'id messager'
      appId: 'app id'
      measurementId: 'id meaurement'
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
