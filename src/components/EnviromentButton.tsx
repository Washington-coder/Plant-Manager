import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from "../styles/colors";

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({
  title,
  active = false,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <RectButton style={} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </RectButton>
  );
}
const styles = StyleSheet.create({});
