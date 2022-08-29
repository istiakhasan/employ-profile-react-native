import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import GenderIcon from "../assets/gender-icon.png";
import AppLoading from "expo-app-loading/build/AppLoading";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function GenderCard() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,

    Inter_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.genderContainer}>
      <Image style={styles.genderIcon} source={GenderIcon} />
      <View style={styles.infoWraper}>
        <Text style={styles.headline}>Female</Text>
        <Text style={styles.title}>Gender</Text>
      </View>
      <View style={styles.varticalDevider}></View>
      <View style={styles.infoWraper}>
        <Text style={styles.headline}>Islam</Text>
        <Text style={styles.title}>Religion</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  genderContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 16,
  },
  genderIcon: {
    height: 16,
    width: 15,
    marginTop: 5,
    color: "#323232",
    marginHorizontal: 20,
  },
  infoWraper: {
    marginTop: 1,
  },
  headline: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontStyle: "normal",
    fontFamily: "Inter_600SemiBold",
    color: "#344054",
  },
  title: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    color: "#667085",
  },
  varticalDevider: {
    height: 48,
    backgroundColor: "#F5F5F5",
    width: 1,
    marginHorizontal: 24,
  },
});
