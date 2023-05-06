import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ForgotPasswordPhoneScreen.style';
import Background from '../../components/Background';
import Header from '../../components/Header';
import PhoneNumer from '../../components/PhoneNumber/PhoneNumber';
import CustomLoading from '../../components/CustomLoading/CustomLoading';

export type Props = {
  navigation: any;
};

const ForgotPasswordPhoneScreen = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef(null);

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      const { wholePhonenumber } =
        phoneRef.current.getCountryCodeAndPhoneNumber(formattedValue);
      const countryCodeVal = wholePhonenumber.split(phoneNumber).join('');

      // Replace this with your actual password reset function
      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigation.navigate('ForgotPasswordCodeScreen', {
        countryCode: countryCodeVal,
        wholePhonenumber: wholePhonenumber,
      });
    } catch (error) {
      // Handle any errors here
      console.error(error);
    } finally {
      setLoading(false);
    }
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
          ref={phoneRef}
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
          disabled={!phoneNumber}
        >
          {loading ? (
            <CustomLoading />
          ) : (
            <Text
              style={[
                styles.ResetButtonText,
                (!phoneNumber || loading) && styles.disabledButton,
              ]}
            >
              Reset Password
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default ForgotPasswordPhoneScreen;
