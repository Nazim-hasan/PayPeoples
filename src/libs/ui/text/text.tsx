import { Text as RNText, TextProps, TextStyle } from "react-native";
import React , { ReactNode } from "react";
import { presets } from "./Text.preset";
import { StyleSheet } from "react-native";
import { colors } from "../colors";

interface RNTextProps extends TextProps {
  children: ReactNode;
  customStyles?: TextStyle;
  preset?: keyof typeof presets;
  centered?: boolean;
}

export default function Text({
  children,
  customStyles,
  preset = "body",
  centered,
  ...props
}: RNTextProps) {
  const textStyle = presets[preset];
  return (
    <RNText
      style={[textStyle, styles.text, centered && styles.textCentered, customStyles]}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.light,
  },
  textCentered: {
    textAlign: "center",
  },
});
