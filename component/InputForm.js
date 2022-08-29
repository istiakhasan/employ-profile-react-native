import {
  View,
  Text,
  StyleSheet,
  TextInput,

  Image,
  TouchableOpacity,
  PermissionsAndroid
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Calander from "../assets/calander.png";
import FileIcon from "../assets/file.png";
import AppLoading from "expo-app-loading/build/AppLoading";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import * as ImagePicker from 'expo-image-picker';

export default function InputForm() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,

    Inter_600SemiBold,
  });

  const [selectedLanguage, setSelectedLanguage] = useState(new Date());
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShow(true);
  };

  const showTimepicker = () => {
    showMode("time");
    setShow(true);
  };
  const openCamera=async()=>{
     // No permissions request is necessary for launching the image library
     let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
    

  }
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.inputFormContainer}>
      <Text style={styles.fromTitle}>Please input your information</Text>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.fromLabel}>Leave type</Text>
          <View style={styles.inputField}>
            <Picker
              style={{ marginTop: -18 }}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
        {/* picker end  */}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginVertical: 16,
          }}
        >
          <View style={[styles.inputWraper, { paddingRight: 17 }]}>
            <Text style={styles.fromLabel}>From Date</Text>
            <View style={styles.inputFieldWraper}>
              <TextInput />
              <TouchableOpacity onPress={showDatepicker}>
                <Image style={styles.calanderImage} source={Calander} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputField}></View>
          </View>
          <View style={[styles.inputWraper, { paddingLeft: 17 }]}>
            <Text style={styles.fromLabel}>To Date</Text>
            <View style={styles.inputFieldWraper}>
              <TextInput />
              <TouchableOpacity onPress={showDatepicker}>
                <Image style={styles.calanderImage} source={Calander} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputField}></View>
          </View>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={styles.fromLabel}>Location</Text>
          <View style={styles.inputFieldWraper}>
            <TextInput />
          </View>
          <View style={styles.inputField}></View>
        </View>
        <View>
          <Text style={styles.fromLabel}>Reason</Text>
          <View style={styles.inputFieldWraper}>
            <TextInput />
          </View>
          <View style={styles.inputField}></View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 35,
            justifyContent: "flex-start",
          }}
        >
          <Image style={{ marginRight: 13 }} source={FileIcon} />
          <Text onPress={openCamera} style={styles.fromLabel}>File Upload</Text>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Text  style={styles.button}>Apply</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputFormContainer: {
    padding: 16,
  },
  fromTitle: {
    color: "#344054",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 28,
    fontStyle: "normal",
    fontFamily: "Inter_600SemiBold",
  },
  formContainer: {
    height: 373,
    padding: 24,
    borderColor: "#F2F2F7",
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.25,

    elevation: 1,
  },
  fromLabel: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#299647",
  },
  inputField: {
    borderBottomColor: "#D0D5DD",
    borderBottomWidth: 1,
  },
  inputWraper: {
    flex: 1,
  },

  inputFieldWraper: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  calanderImage: {
    height: 18,
    width: 20,
    color: "#323232",
    marginBottom: 7,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 31,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#299647",
    color: "#FFFFFF",
    borderRadius: 100,
    width: 88,
    paddingHorizontal: 24,
    paddingVertical: 10,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Inter_600SemiBold",
  },
});
