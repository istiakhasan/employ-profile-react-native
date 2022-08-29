import { Text, View, StyleSheet, Image } from "react-native";
import ProfilePicture from "../assets/Rectangle356.png";
import React from "react";
import AppLoading from "expo-app-loading/build/AppLoading";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function ProfileHeader() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,

    Inter_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.profileWraper}>
      <View style={styles.profileLeft}>
        <Image style={styles.profileImage} source={ProfilePicture} />
        <View>
          <Text style={styles.profileName}>Darlene Robertson</Text>
          <Text style={styles.profileTitle}>Senior UX Designer</Text>
          <Text style={styles.profileTitle}>ID43178</Text>
        </View>
      </View>
      <View style={styles.statuswraper}>
        <Text style={styles.statusContainer}>
          <Text style={styles.status}>Active</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileWraper: {
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage: {
    height: 72,
    width: 72,
    marginHorizontal: 19,
  },
  profileLeft: {
    display: "flex",
    flexDirection: "row",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter_600SemiBold",
    lineHeight: 30,
    fontStyle: "normal",
    color: "#344054",
  },
  profileTitle: {
    color: "#344054",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",

    fontWeight: "400",
  },
  statuswraper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  status: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: "#299647",
    fontFamily: "Inter_600SemiBold",
  },
  statusContainer: {
    backgroundColor: "#E6F9E9",
    width: 53,
    height: 20,
    borderRadius: 99,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginRight: 16,
  },
});
