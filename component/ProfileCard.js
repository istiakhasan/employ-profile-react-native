import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading/build/AppLoading";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function ProfileCard({ uri, headline, title }) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,

    Inter_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.cardWraper}>
      <Image style={styles.infoIcon} source={uri} />
      <View style={styles.descriptionWraper}>
        <Text style={styles.infoHeadline}>{headline}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWraper: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
  },
  infoIcon: {
    color: "323232",
    marginHorizontal: 18,
    height: 18,
    marginTop: 11,
    width: 20,
  },
  infoHeadline: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: "#344054",
  },
  title: {
    fontSize: 12,
    color: "#667085",
    fontWeight: "400",
    lineHeight: 18,
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
  },
  descriptionWraper: {
    marginTop: 8,
  },
});
