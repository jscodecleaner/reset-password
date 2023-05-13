import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./ForgotPasswordPhoneScreen.style";
import Background from "../../components/Background";
import Header from "../../components/Header";
import PhoneNumer from "../../components/PhoneNumber/PhoneNumber";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
import { PhoneInput } from "react-native-phone-number-input";

// Define the list of screens in the stack navigator
type RootStackParamList = {
  ForgotPasswordCodeScreen: { countryCode: string; wholePhonenumber: string };
};

// Define the navigation prop type
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPasswordCodeScreen"
>;

export type Props = {
  navigation: NavigationProp;
};

const ForgotPasswordPhoneScreen = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef<PhoneInput>(null);

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      const { wholePhonenumber } =
        phoneRef.current.getCountryCodeAndPhoneNumber(formattedValue) || "";
      const countryCodeVal = wholePhonenumber.split(phoneNumber).join("");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigation.navigate("ForgotPasswordCodeScreen", {
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
        <Text testID="title" style={styles.Title}>
          Forgot Password
        </Text>
        <Text testID="passwordLabel" style={styles.PasswordLabel}>
          Please enter your registered phone number to reset your password
        </Text>
        <PhoneNumer
          ref={phoneRef}
          onChange={(text) => {
            setPhoneNumber(text);
          }}
          setFormattedValue={(text) => {
            setFormattedValue(text);
          }}
        />
        <TouchableOpacity
          testID="resetPasswordButton"
          onPress={handleResetPassword}
          style={styles.ResetButton}
          disabled={!phoneNumber}
        >
          {loading ? (
            <CustomLoading />
          ) : (
            <Text
              testID="resetPasswordButtonText"
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
