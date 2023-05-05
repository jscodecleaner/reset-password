import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './LoginScreen.style';
import Background from '../../components/Background';

export type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }) => {
  return (
    <Background>
      <View style={styles.Container}>
        <Text style={styles.LoginTitle}>Login</Text>
      </View>
    </Background>
  );
};

export default LoginScreen;
