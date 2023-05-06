import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
  Container: ViewStyle;
  Title: TextStyle;
  PasswordLabel: TextStyle;
  PasswordInput: TextStyle;
  ResetButton: ViewStyle;
  ResetButtonText: TextStyle;
  disabledButton: ViewStyle;
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
    fontSize: 17,
    fontWeight: '700',
    color: 'rgba(24, 24, 31, 0.45)',
    marginTop: 20,
    marginBottom: 50,
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
  ResetButton: {
    width: '100%',
    marginTop: 293,
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
  disabledButton: {
    backgroundColor: '#EDEDEF',
    color: '#393940',
  },
});
