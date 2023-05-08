import React, {
  forwardRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
  MutableRefObject,
} from "react";
import { View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import styles from "./PhoneNumber.style";

export type PhoneNumberProps = {
  onChange: (text: string) => void;
  setFormattedValue: (text: string) => void;
};

const PhoneNumer: ForwardRefRenderFunction<PhoneInput, PhoneNumberProps> = (
  props,
  ref
) => {
  const getCountryCodeAndPhoneNumber = (formattedText: string) => {
    const wholePhonenumber = formattedText.split(" ")[0];
    return { wholePhonenumber };
  };

  useImperativeHandle(ref as MutableRefObject<PhoneInput>, () => ({
    getCountryCodeAndPhoneNumber,
  }));

  return (
    <View style={styles.PhoneInputWrapper}>
      <PhoneInput
        containerStyle={styles.PhoneInput}
        textContainerStyle={styles.PhoneTextInput}
        textInputStyle={styles.PhonetextInputStyle}
        ref={ref as MutableRefObject<PhoneInput>}
        defaultValue={""}
        defaultCode="US"
        layout="first"
        onChangeText={(text) => {
          props.onChange(text);
        }}
        onChangeFormattedText={(text) => {
          props.setFormattedValue(text);
          getCountryCodeAndPhoneNumber(text);
        }}
        withDarkTheme
      />
    </View>
  );
};

export default forwardRef(PhoneNumer);
