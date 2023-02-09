// In App.js in a new project

import * as React from 'react';


import { AuthProvider } from './context/AuthContext';
import AppNav from './navigation/AppNav';


const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
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


