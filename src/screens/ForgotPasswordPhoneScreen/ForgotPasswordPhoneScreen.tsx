import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ForgotPasswordPhoneScreen.style';
import Background from '../../components/Background';
import Header from '../../components/Header';
import PhoneNumer from '../../components/PhoneNumber/PhoneNumber';

export type Props = {
  navigation: any;
};

const ForgotPasswordPhoneScreen = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneRef = useRef(null);

  const handleResetPassword = () => {
    navigation.navigate('ForgotPasswordCodeScreen');
  };

  return (
    <Background>
      <Header navigation={navigation} />
      <View style={styles.Container}>
        <Text style={styles.Title}>Forgot Password</Text>
        <Text style={styles.PasswordLabel}>
          Please enter your registered phone number to reset your password
        </Text>
        <PhoneNumer
          phoneRef={phoneRef}
          onChange={text => {
            setPhoneNumber(text);
          }}
          setFormattedValue={text => {
            setFormattedValue(text);
          }}
        />
        <TouchableOpacity
          onPress={handleResetPassword}
          style={styles.ResetButton}
        >
          <Text style={styles.ResetButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default ForgotPasswordPhoneScreen;
