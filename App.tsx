import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Alert } from "react-native";


const App = () => {
  return (
    <View style={styles.container}>
      <Text>Toto</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;