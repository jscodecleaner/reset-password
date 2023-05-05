import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
  Container: ViewStyle;
  LoginTitle: TextStyle;
  ValidationText: TextStyle;
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
});
