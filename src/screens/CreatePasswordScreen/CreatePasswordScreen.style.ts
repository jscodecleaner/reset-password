import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
  Container: ViewStyle;
  Title: TextStyle;
  PasswordLabel: TextStyle;
  PasswordInput: TextStyle;
  ResetButton: ViewStyle;
  ResetButtonText: TextStyle;
  PasswordInputContainer: ViewStyle;
  PasswordVisibilityToggle: ViewStyle;
  EyeImage: ViewStyle;
  PasswordFormatLabelContainer: ViewStyle;
  PasswordFormatLabel: TextStyle;
  disabledButton: boolean;
}

export default StyleSheet.create<Style>({
  Container: {
    paddingHorizontal: 25,
  },
  Title: {
    fontSize: 42,
    fontWeight: '700',
    color: '#18181F',
    textAlign: 'left',
    width: '100%',
  },
  PasswordLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(24, 24, 31, 1)',
    marginTop: 170,
    alignSelf: 'flex-start',
  },
  PasswordInput: {
    flex: 1,
    width: '100%',
    height: 50,
    borderBottomColor: 'rgba(31, 31, 51, 0.2)',
    borderBottomWidth: 0.5,
    fontSize: 20,
    paddingLeft: 0,
  },
  ResetButton: {
    width: '100%',
    marginTop: 210,
  },
  ResetButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
    backgroundColor: '#5B41EB',
    width: '100%',
    paddingVertical: 16,
    textAlign: 'center',
    borderRadius: 15,
  },
  PasswordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(31, 31, 51, 0.2)', // You can change this color as needed
    marginBottom: 20,
  },
  EyeImage: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  PasswordFormatLabelContainer: {
    width: '100%',
  },
  PasswordFormatLabel: {
    color: 'rgba(24, 24, 31, 1)',
    fontSize: 17,
  },
  disabledButton: {
    backgroundColor: '#EDEDEF',
    color: '#393940',
  },
});
