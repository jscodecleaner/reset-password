import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

type Props = {
  navigation: any;
};

const Header = ({ navigation }: Props) => {
  const handlePress = () => {
    navigation.goBack();
  };

  const backIcon: ImageSourcePropType = require('../assets/images/Left.png');

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={backIcon} />
    </TouchableOpacity>
  );
};

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: '#E5E5E5',
    borderRadius: 25,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginVertical: 12,
  },
});

export default Header;
