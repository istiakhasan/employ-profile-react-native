import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProfileInfo from "./ProfileInfo";
import InputForm from "./InputForm";

export default function Main() {
  return (
    <View>
      <ProfileInfo />
      <InputForm />
    </View>
  );
}
