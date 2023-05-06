import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';

export type Props = {
  children: React.ReactNode;
};

export default function Background({ children }: Props) {
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  ) : (
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    width: '100%',
    backgroundColor: 'white',
  },
});
