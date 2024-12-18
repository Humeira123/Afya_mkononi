import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Onboard'); // Navigate to HomeScreen
      }, 3000); // 3-second delay
    }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../src/assets/health logo.jpg')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Welcome to AfyaMkononi</Text>
      <Text style={styles.subtitle}>How are you feeling today?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
  },
});

export default SplashScreen;
