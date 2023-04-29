import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import HomeComponent from "@components/example";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Index</Text>
      <HomeComponent />
    </View>
  );
}
