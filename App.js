import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
// import { TextInput } from "react-native-web";
// import RegistrationScreen from "./Screens/RegistrationScreen";
// import LoginScreen  from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.authBcg}
        source={require("./assets/images/authBcg.jpg")}
      >
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
            <TextInput style={styles.input} textAlign={"center"} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
            />
          </View>
          <Button title="SIGN IN" />
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

    color: "#fff",
    textAlign: "center",
  },

  form: {
    marginHorizontal: 16,
  },

  inputTitle: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 18,
  },
});
