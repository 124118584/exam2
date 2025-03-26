import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { result } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.result}>计算结果：{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  result: { fontSize: 20, fontWeight: 'bold' },
});
