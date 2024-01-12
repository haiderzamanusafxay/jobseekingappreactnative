import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HomeScreen from '../../assests/css/HomeScreen';

const Home = () => {
  return (
    <>
      <View style={HomeScreen.main}>
        <Image
          style={HomeScreen.HomeScreenimg}
          source={require('../../assests/images/homescreenimg.png')}
        />
        <Text style={HomeScreen.header}>Climb higher with JobSeek app</Text>
        <TouchableOpacity style={HomeScreen.button}>
          <Text style={HomeScreen.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
