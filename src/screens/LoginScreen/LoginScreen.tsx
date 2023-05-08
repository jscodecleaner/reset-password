import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './LoginScreen.style';
import Background from '../../components/Background';
import PhoneNumer from '../../components/PhoneNumber/PhoneNumber';

export type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [password, setPassword] = useState('');
  const phoneRef = useRef<React.ElementRef<typeof PhoneNumer>>(null);

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordPhoneScreen');
  };

  const handleLoginWithPhone = () => {
    console.log('phoneNumber ', phoneNumber);
  };

  const handleLogin = () => {
    console.log('formattedValue ', formattedValue);
  };

  return (
    <Background>
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
          testID="passwordInput"
          secureTextEntry
          style={styles.PasswordInput}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Enter your password"
        />
        <TouchableOpacity testID="forgotPasswordButton" onPress={handleForgotPassword}>
          <Text style={styles.ForgotPasswordButton}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="loginWithPhoneButton"
          onPress={handleLoginWithPhone}
          style={styles.LoginPhoneButton}
        >
          <Text style={styles.LoginWithPhoneButton}>
            Login with Phone Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity testID="loginButton" onPress={handleLogin} style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default LoginScreen;
