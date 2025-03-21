import { useTheme } from "@/hooks/useTheme";
import { ThemeContextInterface } from "@/types/types";
import { CurrencyPickerComponent } from "@youssefprodev/rn-currency-picker";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import CurrencyPicker from "./CurrencyPicker";
import DatePickerComponent from "./DatePicker";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const AddGoalDetails = () => {
	const { theme, colorScheme } = useTheme();
	const styles = createStyles({ theme, colorScheme });

	const [currency, setCurrency] = useState<string>("USD");
	const [goalAmount, setGoalAmount] = useState<string>();
	const [currentBalance, setCurrentBalance] = useState<string>();
	const [targetDate, setTargetDate] = useState<Date | undefined>(
		new Date(Date.now())
	);

	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.header}>
				What are you saving for?
			</ThemedText>
			<ThemedView style={styles.inputContainer}>
				{/* currency */}
				<ThemedView style={styles.currencyInput}>
					<ThemedText style={styles.currencyInputText}>
						Goal Currency
					</ThemedText>
					<CurrencyPicker
						currency={currency}
						setGoalCurrency={setCurrency}
					/>
				</ThemedView>
				{/* goal amount */}
				<ThemedView style={styles.amountInput}>
					<TextInput
						keyboardType="numeric"
						style={styles.currencyInputText}
						onChangeText={setGoalAmount}
						value={goalAmount}
						placeholder="Goal Amount"
						placeholderTextColor="grey"
					/>
					<ThemedText style={styles.currencyIndicatorText}>
						{currency}
					</ThemedText>
				</ThemedView>
				{/* current balance */}
				<ThemedView style={styles.amountInput}>
					<TextInput
						keyboardType="numeric"
						style={styles.currencyInputText}
						onChangeText={setCurrentBalance}
						value={currentBalance}
						placeholder="Current Balance"
						placeholderTextColor="grey"
					/>
					<ThemedText style={styles.currencyIndicatorText}>
						{currency}
					</ThemedText>
				</ThemedView>
				{/* target date */}
				{/* <DatePickerInput
					locale="en"
					label="Target Date"
					value={targetDate}
					onChange={(d) => setTargetDate(d)}
					inputMode="start"
					style={styles.dateInput}
					iconColor={theme.secondary}
					disableStatusBarPadding
					presentationStyle="overFullScreen"
				/> */}
			</ThemedView>
		</ThemedView>
	);
};

export default AddGoalDetails;

const createStyles = ({ theme, colorScheme }: ThemeContextInterface) => {
	return StyleSheet.create({
		container: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignContent: "flex-start",
			width: "100%",
			gap: 15,
			height: "100%",
		},
		header: {
			fontWeight: "bold",
			fontSize: 40,
			lineHeight: 50,
		},
		inputContainer: {
			display: "flex",
			flexDirection: "column",
			gap: 15,
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
		},
		amountInput: {
			backgroundColor: theme.background,
			borderColor: theme.secondary,
			borderWidth: 1,
			borderRadius: 10,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			paddingHorizontal: 10,
			color: theme.text,
			width: "100%",
			height: 60,
		},
		currencyInput: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			paddingHorizontal: 10,
			borderWidth: 1,
			borderColor: theme.secondary,
			borderRadius: 10,
			height: 60,
			width: "100%",
		},
		currencyInputText: {
			fontSize: 18,
		},
		currencyIndicatorText: {
			fontWeight: "600",
		},
		dateInput: {
			backgroundColor: "black",
			borderWidth: 1,
			borderRadius: 10,
			borderColor: theme.secondary,
			borderBottomColor: "none",
			marginTop: 60,
		},
	});
};
