import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  return (
    <KeyboardAvoidingView style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.todoInput}
          placeholder="Add Todo"
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <Pressable
          style={({ pressed }) => [
            styles.todoButton,
            pressed && styles.todoButtonPressed,
          ]}
          onTouchEnd={() => {
            setTodo((todo) => [...todo, text]);
            setText("");
          }}
        >
          <Text style={styles.todoButtonText}>Add</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.todoList}
        style={styles.todoListContainer}
      >
        {todo.map((todo, index) => (
          <View key={index} style={styles.todoItem}>
            <Text style={styles.todoText}>{todo}</Text>
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
