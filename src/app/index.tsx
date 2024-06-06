import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { images } from "../constants";
import { Button } from "../components/Button";
import "react-native-url-polyfill/auto";
import { useGlobalCtx } from "../hooks/useGlobalContext";

export default function App() {
  const { loading, isLoggedIn } = useGlobalCtx();

  if (!loading && isLoggedIn) {
    return <Redirect href="/home" />;
  }

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, paddingBottom: 20 }}
      className="bg-primary px-6"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 items-center justify-center">
        <Image className="w-32 h-9" source={images.logo} resizeMode="contain" />
        <Image
          className="max-w-[380px] w-full h-[298px] mt-7 mb-4"
          source={images.cards}
          resizeMode="contain"
        />
        <Text className="font-psemibold text-white text-3xl">
          Discover Endless
        </Text>
        <View className="relative">
          <Text className="font-psemibold text-white text-3xl">
            Possibilities with <Text className="text-secondary-200">Aora</Text>
          </Text>
          <Image
            className="w-[136px] h-[15px] absolute -right-8 -bottom-[2px]"
            source={images.path}
            resizeMode="contain"
          />
        </View>

        <Text className="font-pregular text-sm text-gray-100 text-center mt-5 mb-8">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
        <Button
          title="Continue with Email"
          type="secondary"
          activeOpacity={0.7}
          onPress={() => router.push("/sign-in")}
        />
      </View>
      <StatusBar backgroundColor="transparent" translucent style="light" />
    </ScrollView>
  );
}
