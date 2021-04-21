import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas{"\n"}
        de forma fácil
      </Text>

      {visible && <Image source={wateringImg} style={styles.image}></Image>}
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lebrar você
        sempre que precisar
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> ^^ </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginBottom: 20,
    marginTop: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 30,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    marginTop: 50,
    height: 56,
    width: 56,
  },
  image: {
    width: 240,
    height: 240,
  },
  buttonText: {
    color: colors.white,
  },
});
