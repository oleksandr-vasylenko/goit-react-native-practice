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
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: "",
  password: "",
  login: "",
};

export default function RegistrationScreen() {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);

  const [state, setstate] = useState(initialState);

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.authBcg}
          source={require("../../assets/images/authBcg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShownKeyboard ? 32 : 78,
              }}
            >
              <View style={styles.userpic}></View>

              <View style={styles.formHeader}>
                <Text style={styles.formTitle}>Реєстрація</Text>
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShownKeyboard(true)}
                  value={state.login}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, login: value }))
                  }
                  placeholder="Логін"
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShownKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, email: value }))
                  }
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => setIsShownKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, password: value }))
                  }
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={onSubmit}
              >
                <Text style={styles.btnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <Text style={styles.signinText}>Вже є аккаунт? Увійти</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  authBcg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  form: {
    position: "relative",
    paddingTop: 92,
    // paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },

  userpic: {
    position: "absolute",
    alignSelf: "center",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  formHeader: {
    alignItems: "center",
    marginBottom: 32,
  },

  formTitle: {
    fontSize: 30,
    fontWeight: 500,
    color: "#212121",
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    textAlign: "start", // need to investigate if it is possible (and if it is necessary to move to the left on ios)

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  btn: {
    borderWidth: 1,
    borderRadius: 100,
    marginTop: 44,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderWidth: 0,
  },

  btnTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: 400,

    color: "#ffffff",
    lineHeight: 19,
    textAlign: "center",
  },

  signinText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,

    color: "#1B4371",
    lineHeight: 19,
    textAlign: "center",
  },
});
