import React, { forwardRef, RefObject, useImperativeHandle } from 'react';
import { View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './PhoneNumber.style';

type Props = {
  onChange: (text: string) => void;
  setFormattedValue: (text: string) => void;
};

const PhoneNumer: React.FC<Props> = forwardRef(
  (props: Props, ref: RefObject<PhoneInput>) => {
    const getCountryCodeAndPhoneNumber = (formattedText: string) => {
      const wholePhonenumber = formattedText.split(' ')[0];
      return { wholePhonenumber };
    };
  
    useImperativeHandle(ref, () => ({
      getCountryCodeAndPhoneNumber,
    }));

    return (
      <View style={styles.PhoneInputWrapper}>
        <PhoneInput
          containerStyle={styles.PhoneInput}
          textContainerStyle={styles.PhoneTextInput}
          textInputStyle={styles.PhonetextInputStyle}
          ref={ref}
          defaultValue={''}
          defaultCode="US"
          layout="first"
          onChangeText={text => {
            props.onChange(text);
          }}
          onChangeFormattedText={text => {
            props.setFormattedValue(text);
            getCountryCodeAndPhoneNumber(text);
          }}
          withDarkTheme
        />
      </View>
    );
  }
);

export default PhoneNumer;
