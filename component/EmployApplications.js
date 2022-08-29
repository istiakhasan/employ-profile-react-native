import { View, Text, StyleSheet, Image, Form } from "react-native";
import React from "react";
import Application1 from "../assets/applications/application-1.png";
import Application2 from "../assets/applications/application-2.png";
import Application3 from "../assets/applications/application-3.png";
import Application4 from "../assets/applications/application-4.png";
import Application5 from "../assets/applications/application-5.png";
import Application6 from "../assets/applications/application-6.png";
import Application from "./Application";
import AppLoading from "expo-app-loading/build/AppLoading";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function EmployApplications() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,

    Inter_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const data = [
    {
      id: 1,
      image: Application1,
      name: "Leave",
      color: "#D444F1",
    },
    {
      id: 2,
      image: Application2,
      name: "Movement",
      color: "#2E90FA",
    },
    {
      id: 3,
      image: Application3,
      name: "Remote Attendance",
      color: "#F63D68",
    },
    {
      id: 4,
      image: Application4,
      name: "IOU",
      color: "#F79009",
    },
    {
      id: 5,
      image: Application5,
      name: "Loan",
      color: "#669F2A",
    },
    {
      id: 6,
      image: Application6,
      name: "Overtime",
      color: "#875BF7",
    },
  ];
  return (
    <View>
      <Text style={styles.title}>Employee Application</Text>

      <View style={styles.applicationContainer}>
        {data.map((application) => (
          <>
            <Application key={application.id} application={application} />
          </>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 28,
    fontStyle: "normal",
    color: "#344054",
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 16,
    fontFamily: "Inter_600SemiBold",
  },
  applicationContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
});
