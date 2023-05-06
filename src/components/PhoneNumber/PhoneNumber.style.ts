import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
  PhoneInputWrapper: ViewStyle;
  PhoneInput: TextStyle;
  PhoneTextInput: TextStyle;
  PhonetextInputStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  PhoneInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(31, 31, 51, 0.1)',
    padding: 0,
    marginTop: 50,
  },
  PhoneInput: {
    width: '100%',
    height: '100%',
  },
  PhoneTextInput: {
    backgroundColor: 'white',
    paddingLeft: 0,
  },
  PhonetextInputStyle: {
    fontSize: 20,
  },
});
