import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  todoInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderRadius: 5,
  },
  todoButton: {
    backgroundColor: "#00aeef",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    width: "80%",
  },
  todoButtonPressed: {
    backgroundColor: "#007bbf",
  },
  todoButtonText: {
    color: "white",
    textAlign: "center",
  },
  todoListContainer: {
    marginTop: 10,
  },
  todoList: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  todoItem: {
    backgroundColor: "#00aeef",
    padding: 10,
    borderRadius: 5,
    width: "80%",
  },
  todoText: {
    color: "white",
  },
});
