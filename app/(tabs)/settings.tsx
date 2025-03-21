import { useTheme } from "@/hooks/useTheme";
import { ThemeType } from "@/types/types";
import Octicons from "@expo/vector-icons/Octicons";
import {
	ColorSchemeName,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";

export default function Tab() {
	const { theme, colorScheme, setColorScheme } = useTheme();

	const styles = createStyles({ theme, colorScheme });

	return (
		<View style={styles.container}>
			<Pressable
				onPress={() =>
					setColorScheme(colorScheme === "light" ? "dark" : "light")
				}
				style={{ marginLeft: 10 }}
			>
				<Octicons
					name={colorScheme === "dark" ? "moon" : "sun"}
					size={24}
					color={theme.text}
					selectable={undefined}
					style={{ width: 36 }}
				/>
			</Pressable>
		</View>
	);
}

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
