import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Tasks() {
  const router = useRouter();
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{id: string; text: string}[]>([]);

  const addTask = () => {
    if(task.trim() === '') {
        Alert.alert('por favor digite uma tarefa');
        return;
    }
    const newTask = {id: Math.random().toString(), text: task};
    const updateTasks = [...tasks, newTask];
    setTasks(updateTasks);
    setTask('');
  }

  const renderItem = ({ item }: {item: {id: string; text: string}}) => (
    <View>
        <Text>{item.text}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text>Minhas Tarefas</Text>
      <View>
        <TextInput 
            value={task}
            onChangeText={setTask}
            placeholder="Digite aqui uma tarefa"
        />
        <TouchableOpacity onPress={addTask}>
            <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
            <Text>Nenhuma tarifa adicionada ainda</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
