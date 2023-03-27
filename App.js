import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
// import { TextInput } from "react-native-web";
// import RegistrationScreen from "./Screens/RegistrationScreen";
// import LoginScreen  from "./Screens/LoginScreen";

export default function App() {
  console.log(Platform.OS);
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.authBcg}
        source={require("./assets/images/authBcg.jpg")}
      >
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShownKeyboard ? 20 : 100 }}
          >
            <View>
              <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                onFocus={() => setIsShownKeyboard(true)}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.inputTitle}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                secureTextEntry={true}
                onFocus={() => setIsShownKeyboard(true)}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={keyboardHide}
            >
              <Text style={styles.btnTitle}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    // justifyContent: "center",
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
    // marginBottom: 40,
  },

  inputTitle: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 18,
  },

  btn: {
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 80,

    ...Platform.select({
      ios: {
        backgroundColor: "#4169e1",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#ffb6c1",
        borderColor: "transparent",
      },
      web: {
        backgroundColor: "#ffb6c1",
        borderColor: "transparent",
      },
    }),

    // backgroundColor: Platform.OS === "ios" ? "#4169e1" : "#ffb6c1",
    // borderColor: Platform.OS === "ios" ? "#f0f8ff" : "transparent",
  },

  btnTitle: {
    color: Platform.OS === "ios" ? "#fff" : "#blue",
    // color: "tomato",
    fontSize: 18,
  },
});
