import { StyleSheet, ViewStyle, Dimensions } from 'react-native';

interface Style {
  Loading: ViewStyle;
}

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create<Style>({
  Loading: {
    justifyContent: 'center',
    bottom: deviceHeight / 2 - 50,
  },
});
