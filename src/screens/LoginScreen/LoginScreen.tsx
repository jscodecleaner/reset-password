import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './LoginScreen.style';
import Background from '../../components/Background';

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
      <View style={styles.Container}>
        <Text style={styles.LoginTitle}>Login</Text>
        <View style={styles.PhoneInputWrapper}>
          <PhoneInput
            containerStyle={styles.PhoneInput}
            textContainerStyle={styles.PhoneTextInput}
            textInputStyle={styles.PhonetextInputStyle}
            ref={phoneRef}
            defaultValue={''}
            defaultCode="US"
            layout="first"
            onChangeText={text => {
              setPhoneNumber(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme
          />
        </View>
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
