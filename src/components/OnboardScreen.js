import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// Onboarding screen component
const OnboardScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate('LoginScreen')} // Navigate to Home screen after onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../src/assets/Welcome to AfyaMkononi.jpg')} style={styles.image} />,
          title: 'Welcome to AfyaMkononi',
          subtitle: 'Your health is just a tap away.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../src/assets/Track Your Health.jpg')} style={styles.image} />,
          title: 'Track Your Health',
          subtitle: 'Keep track of your medical data with ease.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../src/assets/Get Health Insights.jpg')} style={styles.image} />,
          title: 'Get Health Insights',
          subtitle: 'Personalized health tips and insights based on your data.',
        },
      ]}
    />
  );
};

// Styles for the onboarding images
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default OnboardScreen;
