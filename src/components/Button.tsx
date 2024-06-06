import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type: "primary" | "secondary";
};

export const Button = ({ title, type = "secondary", ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`w-full rounded-lg p-3 items-center justify-center bg-${type}`}
      {...rest}
    >
      <Text className={`font-psemibold text-lg text-primary`}>{title}</Text>
    </TouchableOpacity>
  );
};
