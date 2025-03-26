import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.username}</Text>
      <View style={{ height: 10 }} />
      <Button title="进入计算器" onPress={() => navigation.navigate('Input')} />
      <View style={{ height: 10 }} />
      <Button title="进入任务管理" onPress={() => navigation.navigate('CRUD')} />
      <View style={{ height: 10 }} />
      <Button title="退出登录" onPress={logout} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
