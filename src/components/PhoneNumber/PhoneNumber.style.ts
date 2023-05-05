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
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(31, 31, 51, 0.1)',
    paddingVertical: 0,
    marginTop: 50,
  },
  PhoneInput: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 0,
  },
  PhoneTextInput: {
    backgroundColor: 'white',
    paddingLeft: 0,
  },
  PhonetextInputStyle: {
    fontSize: 20,
  },
});
