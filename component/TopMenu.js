import { StyleSheet, Text, View, Image } from "react-native";

import BloothIcon from "../assets/blooth.png";
import NetworkIcon from "../assets/network.png";
import BattaryIcon from "../assets/battary.png";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function TopMenu() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,

    Inter_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.topMenu}>
      <Text style={styles.oparatortitle}>Grameenphone</Text>
      <Text style={styles.oparatortitle}>10:54 AM</Text>
      <View style={styles.iconWraper}>
        <Image style={styles.topBannerIcon} source={BloothIcon} />
        <Image style={styles.topBannerIcon} source={NetworkIcon} />
        <Image style={styles.topBannerIcon} source={BattaryIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topMenu: {
    height: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#096529",
    paddingHorizontal: 16,
  },
  oparatortitle: {
    fontWeight: "500",
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
  },
  topBannerIcon: {
    width: 6.67,
    height: 13.33,
    color: "#FFFFFF",
    marginRight: 11.53,
  },
  iconWraper: {
    display: "flex",
    flexDirection: "row",
  },
});
