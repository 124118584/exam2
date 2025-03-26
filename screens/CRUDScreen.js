import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { loadTasks, saveTasks } from '../utils/storage';

export default function CRUDScreen() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  const key = `${user?.username}-tasks`;

  useEffect(() => {
    const load = async () => {
      const saved = await loadTasks(key);
      setTasks(saved);
    };
    load();
  }, []);

  const handleAdd = async () => {
    if (input.trim()) {
      const newTasks = [...tasks, { id: Date.now().toString(), text: input }];
      setTasks(newTasks);
      setInput('');
      await saveTasks(key, newTasks);
    }
  };

  const handleDelete = async (id) => {
    const newTasks = tasks.filter(t => t.id !== id);
    setTasks(newTasks);
    await saveTasks(key, newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>任务管理</Text>
      <TextInput
        placeholder="新任务"
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <Button title="添加任务" onPress={handleAdd} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Text style={styles.item}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    padding: 10,
    backgroundColor: '#eee',
    marginTop: 8,
    borderRadius: 5,
  },
});
