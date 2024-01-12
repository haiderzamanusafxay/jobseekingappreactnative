import {StyleSheet} from 'react-native';

const HomeScreen = StyleSheet.create({
  main: {
    backgroundColor: '#1C58F2',
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  HomeScreenimg: {
    width: 170,
    height: 170,
  },
  header: {
    fontFamily: 'Poppins',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: 240,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    color: "#1C58F2",
    fontWeight: "bold"
  }
});

export default HomeScreen;
