import { useTheme } from "@/hooks/useTheme";
import { ThemeContextInterface } from "@/types/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const AddGoalIcon = ({
	setGoalIcon,
}: {
	setGoalIcon: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const { colorScheme, theme } = useTheme();

	const styles = createStyles({ theme, colorScheme });

	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.header}>
				Select an Icon for your Goal
			</ThemedText>
			<ThemedView></ThemedView>
		</ThemedView>
	);
};

export default AddGoalIcon;

const createStyles = ({ colorScheme, theme }: ThemeContextInterface) => {
	return StyleSheet.create({
		container: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignContent: "flex-start",
			width: "100%",
			gap: 15,
		},
		header: {
			fontWeight: "bold",
			fontSize: 35,
			lineHeight: 50,
		},
		input: {
			backgroundColor: theme.background,
			borderColor: theme.border,
			borderWidth: 1,
			borderRadius: 10,
			paddingHorizontal: 10,
			color: theme.text,
		},
	});
};
