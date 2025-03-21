import { useTheme } from "@/hooks/useTheme";
import { ThemeType } from "@/types/types";
import React from "react";
import { ColorSchemeName, StyleSheet, Text, View } from "react-native";

const progress = () => {
	const { setColorScheme, colorScheme, theme } = useTheme();

	const styles = createStyles({ theme, colorScheme });

	return (
		<View style={styles.container}>
			<Text>progress</Text>
		</View>
	);
};

export default progress;

const createStyles = ({
	theme,
	colorScheme,
}: {
	theme: ThemeType;
	colorScheme: ColorSchemeName;
}) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: theme.background,
		},
	});
};
