import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ForgotPasswordCodeScreen.style';
import OTPTextInput from 'react-native-otp-textinput';
import Background from '../../components/Background';
import Header from '../../components/Header';

export type Props = {
  navigation: any;
};

const ForgotPasswordCodeScreen = ({ navigation }: Props) => {
  const [formattedValue, setFormattedValue] = useState('');
  const [code, setCode] = useState('');
  const [otpArray, setOtpArray] = useState('');
  const [countdown, setCountdown] = useState(20);
  const [isCountingDown, setIsCountingDown] = useState(false);

  const handleResetPassword = () => {
    navigation.navigate('CreatePasswordScreen');
  };

  const startCountdown = () => {
    setIsCountingDown(true);
    setCountdown(20);
  };

  useEffect(() => {
    startCountdown();
  }, []);

  useEffect(() => {
    if (isCountingDown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
  
      return () => {
        clearTimeout(timer);
      };
    }
  
    if (countdown === 0) {
      setIsCountingDown(false);
    }
  }, [countdown, isCountingDown]);

  return (
    <Background>
      <Header navigation={navigation} />
      <View style={styles.Container}>
        <Text style={styles.Title}>Forgot Password</Text>
        <Text style={styles.PasswordLabel}>
          Enter the 4-digit code sent to you at
        </Text>
        <Text style={styles.PhoneLabel}>+44 124 2412 23</Text>
        <View style={styles.inputView}>
          <OTPTextInput
            inputCount={4}
            keyboardType="numeric"
            // textInputStyle={(index) =>
            //   index < otpArray.length
            //     ? styles.otpInputActive
            //     : styles.otpInputInactive
            // }
            textInputStyle={styles.otpInputActive}
            handleTextChange={(code) => setOtpArray(code)}
          />
        </View>
        <Text style={styles.ResendCodeLabel}>
          Didn't get the code? We can{' '}
          {isCountingDown ? (
            <Text style={styles.ResendCodeRemainSeconds}>resend it in {countdown}s.</Text>
          ) : (
            <Text onPress={startCountdown} style={styles.ResendCodeButton}>
              resend it
            </Text>
          )}
        </Text>
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

export default ForgotPasswordCodeScreen;
