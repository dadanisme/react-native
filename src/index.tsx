import { StatusBar } from "expo-status-bar";
import TodoApp from "@components/todo";

export default function Index() {
  return (
    <>
      <StatusBar style="auto" />
      <TodoApp />
    </>
  );
}
