import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading/build/AppLoading";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function Application({ application }) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,

    Inter_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.applicationWraper}>
      <View
        style={{
          backgroundColor: `${application.color}`,
          height: 48,
          width: 48,
          borderRadius: 99,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image style={styles.applicationImage} source={application.image} />
      </View>
      <Text style={styles.applicationName}>{application.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  applicationImage: {
    width: 18.67,
    height: 26.67,
  },
  applicationWraper: {
    height: 98,
    width: 86,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  applicationName: {
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    fontStyle: "normal",
    color: "#1D2939",
    fontFamily: "Inter_400Regular",
  },
});
