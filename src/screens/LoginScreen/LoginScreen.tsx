import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './LoginScreen.style';
import Background from '../../components/Background';
import Header from '../../components/Header';
import PhoneNumer from '../../components/PhoneNumber/PhoneNumber';

export type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [password, setPassword] = useState('');
  const phoneRef = useRef(null);

  const handleForgotPassword = () => {
    // navigation.navigate()  
  };

  const handleLoginWithPhone = () => {
    // navigation.navigate()
  };

  const handleLogin = () => {
    // navigation.navigate()
  };

  return (
    <Background>
      <Header navigation={navigation} screenName="Login" />
      <View style={styles.Container}>
        <Text style={styles.LoginTitle}>Login</Text>
        <PhoneNumer
          phoneRef={phoneRef}
          onChange={text => {
            setPhoneNumber(text);
          }}
          setFormattedValue={text => {
            setFormattedValue(text);
          }}
        />
        <Text style={styles.PasswordLabel}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.PasswordInput}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Enter your password"
        />
        <TouchableOpacity onPress={() => handleForgotPassword}>
          <Text style={styles.ForgotPasswordButton}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLoginWithPhone}
          style={styles.LoginPhoneButton}
        >
          <Text style={styles.LoginWithPhoneButton}>
            Login with Phone Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLogin}
          style={styles.LoginButton}
        >
          <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default LoginScreen;
