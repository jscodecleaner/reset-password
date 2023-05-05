import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
  Container: ViewStyle;
  LoginTitle: TextStyle;
  ValidationText: TextStyle;
  PasswordLabel: TextStyle;
  PasswordInput: TextStyle;
  ForgotPasswordButton: TextStyle;
  LoginPhoneButton: ViewStyle;
  LoginWithPhoneButton: TextStyle;
  LoginButton: ViewStyle;
  LoginButtonText: TextStyle;
}

export default StyleSheet.create<Style>({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  LoginTitle: {
    fontSize: 42,
    fontWeight: '700',
    color: '#18181F',
    textAlign: 'left',
    width: '100%',
  },
  PasswordLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#444',
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  PasswordInput: {
    width: '100%',
    height: 50,
    borderBottomColor: 'rgba(31, 31, 51, 0.2)',
    borderBottomWidth: 0.5,
    fontSize: 20,
    paddingLeft: 0,
  },
  ForgotPasswordButton: {
    fontSize: 17,
    fontWeight: '700',
    color: '#5B41EB',
    marginTop: 50,
  },
  LoginWithPhoneButton: {
    fontSize: 17,
    color: '#393940',
    fontWeight: '700',
    backgroundColor: '#EDEDEF',
    width: '100%',
    paddingVertical: 16,
    textAlign: 'center',
    borderRadius: 15,
  },
  LoginPhoneButton: {
    width: '100%',
    marginTop: 170,
  },
  LoginButton: {
    width: '100%',
    marginTop: 20,
  },
  LoginButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
    backgroundColor: '#5B41EB',
    width: '100%',
    paddingVertical: 16,
    textAlign: 'center',
    borderRadius: 15,
  },
});
