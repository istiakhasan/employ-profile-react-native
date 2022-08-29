import React from "react";
import ProfileHeader from "./ProfileHeader";
import { View, StyleSheet } from "react-native";
import ProfileCard from "./ProfileCard";
import HumanIcon from "../assets/human-icon.png";
import BirthIcon from "../assets/birth-icon.png";
import GenderCard from "./GenderCard";
import EmployApplications from "./EmployApplications";

export default function ProfileInfo() {
  return (
    <>
      <View>
        <ProfileHeader />
        <View style={styles.devider}></View>
        <ProfileCard
          uri={HumanIcon}
          headline={"Human Resource"}
          title={"Department"}
        />
        <View style={styles.devidertwo}></View>
        <ProfileCard
          uri={BirthIcon}
          headline={"28 September,1990"}
          title={"Date of Birth"}
        />
        <View style={styles.devidertwo}></View>
        <GenderCard />
        <View style={styles.deviderthree}></View>
        <EmployApplications />
        <View style={styles.deviderthree}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  devider: {
    height: 1,
    backgroundColor: "#F2F2F7",
    marginTop: 19,
  },
  devidertwo: {
    height: 1,
    backgroundColor: "#F2F2F7",
  },
  deviderthree: {
    height: 8,
    backgroundColor: "#F2F2F7",
  },
});
