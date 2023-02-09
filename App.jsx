// In App.js in a new project

import * as React from 'react';



import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/*<AppStack />*/}
      <AuthStack />
    </NavigationContainer>
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


