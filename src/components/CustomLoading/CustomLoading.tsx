import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './CustomLoading.style';

const CustomLoading = () => {
  return <ActivityIndicator style={styles.Loading} size="large" />;
};

export default CustomLoading;
