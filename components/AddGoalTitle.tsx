import { useTheme } from "@/hooks/useTheme";
import { ThemeContextInterface } from "@/types/types";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const AddGoalTitle = ({
	setGoalTitle,
}: {
	setGoalTitle: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const { theme, colorScheme } = useTheme();
	const styles = createStyles({ theme, colorScheme });
	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.header}>
				What are you saving for?
			</ThemedText>
			<TextInput
				style={styles.input}
				onChangeText={setGoalTitle}
				placeholder="Goal name"
				placeholderTextColor="grey"
			/>
		</ThemedView>
	);
};

export default AddGoalTitle;

const createStyles = ({ theme, colorScheme }: ThemeContextInterface) => {
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
			fontSize: 40,
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
