import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.authBcg}
        source={require("./assets/images/authBcg.jpg")}
      >
        <View>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // color: "green",
    // fontSize: 30,
  },
  authBcg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 6,
    marginHorizontal: 16,
    color: "#fff",
    textAlign: "center",
  },
});
