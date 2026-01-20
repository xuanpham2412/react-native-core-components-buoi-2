import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const PhoneLoginScreen = () => {
  const [phone, setPhone] = useState("");

  const isValidPhone = phone.length >= 9;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Đăng nhập</Text>

      <View style={styles.content}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isValidPhone ? "#2DB6A3" : "#E5E5E5" },
        ]}
        disabled={!isValidPhone}
      >
        <Text
          style={[
            styles.buttonText,
            { color: isValidPhone ? "#FFFFFF" : "#A0A0A0" },
          ]}
        >
          Tiếp tục
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default PhoneLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 30,
  },
  content: {
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: "#6F6F6F",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#CFCFCF",
    fontSize: 16,
    paddingVertical: 8,
  },
  button: {
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
