import { View, Text, StyleSheet, Image } from "react-native";
import BarIcon from "../assets/Vector.png";
import React from "react";

export default function Menubar() {
  return (
    <View style={styles.container}>
      <Image style={styles.menuicon} source={BarIcon} />
      <Text style={styles.menuTitle}>Employee Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#299647",
    height: 56,

    width: 411,
    marginHorizontal: "auto",
  },
  menuicon: {
    width: 18,
    height: 12,
    color: "#FFFFFF",
    marginLeft: 19,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 19,
    color: "#FFFFFF",
  },
});
