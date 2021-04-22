import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas{"\n"}
        de forma fácil
      </Text>

      <Image
        source={wateringImg}
        style={styles.image}
        resizeMode="contain"
      ></Image>

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        {"\n"}Nós cuidamos de lebrar você sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonIcon}>
          {" "}
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          ></Feather>{" "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginBottom: 20,
    marginTop: 35,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 30,
    color: colors.heading,
  },

  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    marginTop: 35,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24,
  },
});
