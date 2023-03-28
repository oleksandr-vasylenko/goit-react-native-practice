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

export default function LoginScreen() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [state, setstate] = useState(initialState);

  const keyboardHide = () => {
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
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
                paddingBottom: isEmailFocused || isPasswordFocused ? 32 : 144,
              }}
            >
              <View style={styles.formHeader}>
                <Text style={styles.formTitle}>Увійти</Text>
              </View>

              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={[
                    styles.input,
                    isEmailFocused && {
                      borderColor: "#FF6C00",
                      backgroundColor: "#FFFFFF",
                    },
                  ]}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
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
                  style={[
                    styles.input,
                    isPasswordFocused && {
                      borderColor: "#FF6C00",
                      backgroundColor: "#FFFFFF",
                    },
                  ]}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  secureTextEntry={true}
                  value={state.password}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, password: value }))
                  }
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                />
                {/* <View>
                  <Text style={styles.toggleText}>Показати</Text>
                </View> */}
              </View>

              {!(isEmailFocused || isPasswordFocused) && (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={onSubmit}
                  >
                    <Text style={styles.btnTitle}>Увійти</Text>
                  </TouchableOpacity>
                  <Text style={styles.signinText}>
                    Немає акаунту? Зареєструватися
                  </Text>
                </View>
              )}
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
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
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
    position: "relative",

    borderWidth: 1,
    borderColor: "black",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    paddingHorizontal: 16,

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
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: 400,

    color: "#ffffff",
    lineHeight: 19,
    textAlign: "center",
  },

  signinText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,

    color: "#1B4371",
    lineHeight: 19,
    textAlign: "center",
  },
});
