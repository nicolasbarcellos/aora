import React from "react";
import { Tabs } from "expo-router";
import { TabIcon } from "../../components/TabIcon";
import { icons } from "../../constants";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 3,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarItemStyle: {
              paddingHorizontal: 6,
              paddingVertical: 10,
              marginTop: 30,
            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Home"
                color={color}
                focused={focused}
                icon={icons.home}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarItemStyle: {
              paddingHorizontal: 6,
              paddingVertical: 10,
              marginTop: 30,
            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Profile"
                color={color}
                focused={focused}
                icon={icons.profile}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarItemStyle: {
              paddingHorizontal: 6,
              paddingVertical: 10,
              marginTop: 30,
            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Create"
                color={color}
                focused={focused}
                icon={icons.plus}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarItemStyle: {
              paddingHorizontal: 6,
              paddingVertical: 10,
              marginTop: 30,
            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Bookmark"
                color={color}
                focused={focused}
                icon={icons.bookmark}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
