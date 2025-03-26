import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

export default function InputScreen({ navigation }) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  useEffect(() => {
    console.log('输入 A:', a);
  }, [a]);

  useEffect(() => {
    console.log('输入 B:', b);
  }, [b]);

  const handleCalculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB)) {
      const result = numA + numB;
      navigation.navigate('Result', { result });
    } else {
      alert('请输入有效数字');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="输入 A"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
        style={styles.input}
      />
      <TextInput
        placeholder="输入 B"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
        style={styles.input}
      />
      <Button title="计算 A + B" onPress={handleCalculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
