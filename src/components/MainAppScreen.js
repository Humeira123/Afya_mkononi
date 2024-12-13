import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MainAppScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to AfyaMkononi!</Text>
          <Text style={styles.tagline}>Your health, your way.</Text>
        </View>

        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>Main Features</Text>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation.navigate('HealthTracker')}
          >
            <Text style={styles.featureTitle}>Health Tracker</Text>
            <Text style={styles.featureDescription}>Monitor your health metrics and progress.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation.navigate('ExpertConnect')}
          >
            <Text style={styles.featureTitle}>Expert Connect</Text>
            <Text style={styles.featureDescription}>
              Chat with health professionals anytime.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Chatbot')}>
          <Icon name="chatbubbles" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Chatbot</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Appointments')}
        >
          <Icon name="calendar" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('EmergencyServices')}
        >
          <Icon name="call" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Emergency</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HealthTips')}>
          <Icon name="heart" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Health Tips</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 10,
  },
  navButton: {
    alignItems: 'center',
    flex: 1,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  tagline: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  featuresContainer: {
    padding: 20,
    marginBottom: 60,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default MainAppScreen;
