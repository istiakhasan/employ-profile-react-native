import React from "react";
import { ScrollView } from "react-native";
import Main from "./component/Main";
import Menubar from "./component/Menubar";
import TopMenu from "./component/TopMenu";

export default function App() {
  return (
    <ScrollView>
      <TopMenu />
      <Menubar />
      <Main />
    </ScrollView>
  );
}
