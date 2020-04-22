import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import Profile from './components/profiles';
import Resume from './components/resume';


export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      {/* <Profile/>
     <Resume /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
