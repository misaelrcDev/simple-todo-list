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

  const removeTask = (id: string) => {
    Alert.alert(
      'Remover Tarefa',
      'Tem certeza que deseja remover essa tarefa?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => {
            const newList = tasks.filter((item) => item.id !== id);
            setTasks(newList);
          },
        },
      ],
      { cancelable: true }
    )
  }

  const renderItem = ({ item }: {item: {id: string; text: string}}) => (
    <View style={styles.taskitem}>
        <Text style={styles.taskText}>{item.text}</Text>
        <TouchableOpacity 
          style={styles.removeButton}
          onPress={() => removeTask(item.id)}>
          <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            value={task}
            onChangeText={setTask}
            placeholder="Digite aqui uma tarefa"
        />
        <TouchableOpacity 
          style={styles.addButton}
          onPress={addTask}>
            <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        style={styles.taskList}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>Nenhuma tarifa adicionada ainda</Text>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskList: {
    flex: 1,
  },
  taskitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
    color: '#555',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  }
});
