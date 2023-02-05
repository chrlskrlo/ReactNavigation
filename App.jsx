// In App.js in a new project

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GamingImg from './assets/gaming.svg';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Main}
          name="Main"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 30}}>
        <Text style={styles.mainText}>GAMEON</Text>
      </View>
      <View style={styles.svgContainer}>
        <GamingImg
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButton}>Let's Begin</Text>
        <Icons name="arrow-right" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

// const Home = () => {
//   return (
//     <View style={styles.homeContainer}>
//       <Text>HOME SCREEN</Text>
//     </View>
//   );
// };

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f',
  },
  button: {
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Roboto-MediumItalic',
  },
  svgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
