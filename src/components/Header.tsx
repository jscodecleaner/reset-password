import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  navigation: any;
};

const Header = ({ navigation }: Props) => {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={require('../assets/images/Left.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
