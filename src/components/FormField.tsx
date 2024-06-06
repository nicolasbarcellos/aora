import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons, images } from "../constants";
import clsx from "clsx";

type FormFieldProps = TextInputProps & {
  label: string;
  iconLeft?: any;
  otherStyles?: string;
};

export const FormField = ({
  label,
  iconLeft = false,
  otherStyles,
  ...rest
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={otherStyles}>
      <Text className="text-base font-pregular text-gray-100 mb-2">
        {label}
      </Text>
      <View className="relative flex-row items-center justify-end">
        <TextInput
          className={clsx(
            "flex-1 rounded-lg bg-black-100  p-4 text-white font-psemibold text-base border-2 border-black-200 focus:border-secondary",
            iconLeft && "pr-16"
          )}
          {...rest}
          secureTextEntry={label === "Password" && !showPassword}
        />
        {iconLeft && (
          <TouchableOpacity
            className="absolute p-5"
            activeOpacity={0.7}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              className="h-6 w-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
