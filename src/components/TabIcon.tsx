import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import clsx from "clsx";

type TabIconProps = {
  name: string;
  color: string;
  focused: boolean;
  icon: ImageSourcePropType;
};

export const TabIcon = ({ name, color, focused, icon }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={clsx(`font-pregular text-xs`, focused && "font-psemibold")}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
