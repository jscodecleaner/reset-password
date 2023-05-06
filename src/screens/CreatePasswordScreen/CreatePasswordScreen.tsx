import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './CreatePasswordScreen.style';
import Background from '../../components/Background';
import Header from '../../components/Header';

export type Props = {
  navigation: any;
};

const CreatePasswordScreen = ({ navigation }: Props) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleResetPassword = () => {
    navigation.navigate('LoginScreen');
  };

  const isPasswordStrong = (password: string): boolean => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
  
    return password.length >= minLength && hasUpperCase && hasNumber;
  };

  useEffect(() => {
    if(isPasswordStrong(password)) {
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
  }, [password]);

  return (
    <Background>
      <Header navigation={navigation} />
      <View style={styles.Container}>
        <Text style={styles.Title}>Create Password</Text>
        <Text style={styles.PasswordLabel}>Password</Text>
        <View style={styles.PasswordInputContainer}>
          <TextInput
            secureTextEntry={!isPasswordVisible}
            style={styles.PasswordInput}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Enter your password"
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <Image style={styles.EyeImage} source={require('../../assets/images/eye-hide.png')} /> : <Image style={styles.EyeImage} source={require('../../assets/images/eye.png')} />}
          </TouchableOpacity>
        </View>
        {!validPassword && (
          <View style={styles.PasswordFormatLabelContainer}>
            <Text style={styles.PasswordFormatLabel}>{'\u00B7'} Minimum 8 charaters</Text>
            <Text style={styles.PasswordFormatLabel}>{'\u00B7'} 1 upper case letter</Text>
            <Text style={styles.PasswordFormatLabel}>{'\u00B7'} 1 number</Text>
          </View>
        )}
        <TouchableOpacity
          onPress={handleResetPassword}
          style={styles.ResetButton}
          disabled={!validPassword}
        >
          <Text style={[styles.ResetButtonText, !validPassword && styles.disabledButton]}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default CreatePasswordScreen;
