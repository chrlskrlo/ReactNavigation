import { View, Text } from 'react-native'
import React from 'react'

export default function GameDetailsScreen({navigation,route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Game Details Screen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}