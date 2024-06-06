import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { images } from "../../constants";
import { FormField } from "../../components/FormField";
import { Button } from "../../components/Button";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/createUser";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    setIsSubmitting(true);
    try {
      const user = await createUser({
        username: form.username,
        email: form.email,
        password: form.password,
      });

      router.replace("/home");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView className="bg-primary px-6" contentContainerStyle={{ flex: 1 }}>
      <View className="flex-1 justify-center min-h-[85vh]">
        <Image className="w-32 h-9" source={images.logo} resizeMode="contain" />
        <Text className="font-psemibold text-2xl text-white mb-8 mt-14">
          Sign up
        </Text>

        <View className="mb-12">
          <FormField
            label="Username"
            keyboardType="email-address"
            placeholder="Your unique username"
            placeholderTextColor="#7B7B8B"
            multiline={false}
            returnKeyType="go"
            value={form.username}
            onChangeText={(value) => setForm({ ...form, username: value })}
          />
          <FormField
            label="Email"
            keyboardType="email-address"
            placeholder="Your unique email"
            placeholderTextColor="#7B7B8B"
            multiline={false}
            returnKeyType="go"
            otherStyles="mt-7"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <FormField
            otherStyles="mt-7"
            label="Password"
            iconLeft={true}
            placeholder="Your unique password"
            placeholderTextColor="#7B7B8B"
            returnKeyType="go"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>

        <Button
          onPress={handleSubmit}
          title="Sign Up"
          type="secondary"
          activeOpacity={0.7}
        />
        <View className="flex-row items-center justify-center gap-2 mt-5">
          <Text className="text-lg text-gray-100 font-pregular">
            Already have an account?
          </Text>
          <Link
            className="text-lg font-psemibold text-secondary"
            href="/sign-in"
          >
            Login
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
