import { Colors } from "@/constants/Colors";
import { ThemeContextInterface } from "@/types/types";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { Appearance, ColorSchemeName, useColorScheme } from "react-native";

const defaultThemeContext: ThemeContextInterface = {
	colorScheme: "dark",
	theme: Colors.dark,
};

const ThemeContextImpl =
	createContext<ThemeContextInterface>(defaultThemeContext);

export const ThemeContext = ThemeContextImpl;

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
	const colorScheme = useColorScheme();

	const theme = Colors.dark;

	return React.createElement(
		ThemeContextImpl.Provider,
		{
			value: {
				colorScheme,
				theme,
			},
		},
		props.children
	);
};

export const useTheme = () => useContext(ThemeContext);
