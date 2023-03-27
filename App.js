import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
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

          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>SIGN IN</Text>
          </TouchableOpacity>
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
    justifyContent: "flex-end",
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

  btn: {
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 6,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 80,
  },

  btnTitle: {
    color: "tomato",
    fontSize: 18,
  },
});
