import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: true,
				headerTitleStyle: {
					fontSize: 30,
					fontWeight: "heavy",
				},
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						position: "absolute",
						backgroundColor: "black",
					},
					default: {
						backgroundColor: "black",
					},
				}),
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "BK",
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="add-goal"
				options={{
					title: "Add Goal",
					tabBarIcon: ({ color }) => (
						<AntDesign name="plus" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="progress"
				options={{
					title: "Progress",
					tabBarIcon: ({ color }) => (
						<AntDesign name="linechart" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="cog" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
