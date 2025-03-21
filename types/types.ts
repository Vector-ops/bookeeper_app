import { Colors } from "@/constants/Colors";
import { ColorSchemeName } from "react-native";

export type ThemeType = typeof Colors.dark;

export interface ThemeContextInterface {
	colorScheme: ColorSchemeName;
	theme: ThemeType;
}

export interface GoalCardProps {
	name: string;
	progress: number;
	goal: number;
}
