import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTasks = async (key) => {
  try {
    const json = await AsyncStorage.getItem(key);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('加载任务失败', e);
    return [];
  }
};

export const saveTasks = async (key, tasks) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(tasks));
  } catch (e) {
    console.error('保存任务失败', e);
  }
};
