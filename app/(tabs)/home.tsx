import GoalCard from "@/components/GoalCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useTheme } from "@/hooks/useTheme";
import { GoalCardProps, ThemeContextInterface, ThemeType } from "@/types/types";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import React from "react";
import {
	ColorSchemeName,
	FlatList,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	useColorScheme,
	View,
} from "react-native";

const index = () => {
	const { theme, colorScheme } = useTheme();

	const styles = createStyles({ theme, colorScheme });
	const ItemSeparator = () => <View style={styles.separator} />;

	const data: GoalCardProps[] = [
		{
			name: "Phone",
			progress: 1,
			goal: 50000,
		},
		{
			name: "Laptop",
			progress: 1000,
			goal: 100000,
		},
		{
			name: "Watch",
			progress: 100,
			goal: 5000,
		},
		{
			name: "RDR2",
			progress: 10,
			goal: 1250,
		},
		{
			name: "Game of Thrones",
			progress: 4900,
			goal: 5000,
		},
		{
			name: "GTA 6",
			progress: 8000,
			goal: 8000,
		},
		{
			name: "Macbook M4",
			progress: 30000,
			goal: 125000,
		},
		{
			name: "Keyboard",
			progress: 400,
			goal: 899,
		},
	];

	return (
		<SafeAreaView style={styles.container}>
			<ThemedView style={styles.header}>
				<ThemedText style={styles.headerText}>My Goals</ThemedText>
				<Pressable style={styles.sort}>
					<ThemedText>Sort</ThemedText>
					<FontAwesome5 name="sort" size={16} color={theme.icon} />
				</Pressable>
			</ThemedView>
			<FlatList
				style={styles.goals}
				data={data}
				renderItem={({ item }) => (
					<GoalCard
						goal={item.goal}
						name={item.name}
						progress={item.progress}
					/>
				)}
				ItemSeparatorComponent={ItemSeparator}
				keyExtractor={(item) => item.name}
			/>
		</SafeAreaView>
	);
};

export default index;

const createStyles = ({ theme, colorScheme }: ThemeContextInterface) => {
	return StyleSheet.create({
		container: {
			display: "flex",
			flexDirection: "column",
			flex: 1,
			margin: 10,
		},
		header: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		headerText: {
			color: "white",
			fontWeight: "bold",
			fontSize: 30,
			lineHeight: 30,
		},
		sort: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			gap: 10,
			borderColor: theme.text,
			borderWidth: 1,
			borderRadius: 30,
			padding: 2,
			paddingHorizontal: 10,
		},
		goals: {
			marginTop: 20,
		},
		separator: {
			height: 10,
			backgroundColor: "transparent",
		},
	});
};
