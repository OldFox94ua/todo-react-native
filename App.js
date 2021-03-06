
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';



export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title: title
    }])
  }

  return (
    <View >
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} />}
        />
      </View>
    </View>
  );
}




//styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
