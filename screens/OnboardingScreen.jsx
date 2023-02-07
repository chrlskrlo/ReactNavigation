import React from "react";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import GamingImg from '../assets/gaming.svg'

const OnboardingScreen = ({navigation}) => {
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
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textButton}>Let's Begin</Text>
          <Icons name="arrow-right" size={18} color="white" />
        </TouchableOpacity>
      </View>
    );
  };
  export default OnboardingScreen;

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