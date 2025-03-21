import AddGoalDetails from "@/components/AddGoalDetails";
import AddGoalIcon from "@/components/AddGoalIcon";
import AddGoalTitle from "@/components/AddGoalTitle";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useTheme } from "@/hooks/useTheme";
import { ThemeContextInterface } from "@/types/types";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AddGoal = () => {
	const [step, setStep] = useState(1);

	const [title, setTitle] = useState<string>("");
	const [icon, setIcon] = useState<string>("");

	const { colorScheme, theme } = useTheme();

	const styles = createStyles({ colorScheme, theme });

	const totalSteps = 3;

	const handleNext = () => {
		setStep((prevStep: number) => Math.min(prevStep + 1, totalSteps));
	};

	const handlePrevious = () => {
		setStep((prevStep: number) => Math.max(prevStep - 1, 1));
	};

	const renderStepIndicator = () => {
		const indicators = [];
		for (let i = 1; i <= totalSteps; i++) {
			indicators.push(
				<ThemedView key={i} style={styles.stepContainer}>
					<ThemedView
						style={[
							styles.stepIndicator,
							i <= step && styles.activeStep,
						]}
					>
						<ThemedText
							style={[
								styles.stepText,
								i <= step && styles.activeStepText,
							]}
						>
							{i}
						</ThemedText>
					</ThemedView>
					{i < totalSteps && (
						<View
							style={[styles.line, i < step && styles.activeLine]}
						/>
					)}
				</ThemedView>
			);
		}
		return <View style={styles.indicatorContainer}>{indicators}</View>;
	};

	return (
		<ThemedView style={styles.container}>
			{renderStepIndicator()}

			<ThemedView style={styles.contentContainer}>
				{step === 1 && <AddGoalTitle setGoalTitle={setTitle} />}
				{step === 2 && <AddGoalIcon setGoalIcon={setIcon} />}
				{step === 3 && <AddGoalDetails />}
			</ThemedView>

			<ThemedView style={styles.buttonContainer}>
				{step > 1 && (
					<TouchableOpacity
						onPress={handlePrevious}
						style={[styles.button, styles.backButton]}
					>
						<ThemedText style={styles.backButtonText}>
							Back
						</ThemedText>
					</TouchableOpacity>
				)}
				{step < totalSteps ? (
					<TouchableOpacity
						onPress={handleNext}
						style={[styles.button, styles.nextButton]}
					>
						<ThemedText style={styles.nextButtonText}>
							Next
						</ThemedText>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						onPress={() => alert("Done!")}
						style={[styles.button, styles.nextButton]}
					>
						<ThemedText style={styles.nextButtonText}>
							Done
						</ThemedText>
					</TouchableOpacity>
				)}
			</ThemedView>
		</ThemedView>
	);
};

export default AddGoal;

const createStyles = ({ theme, colorScheme }: ThemeContextInterface) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: 30,
			alignItems: "center",
		},
		indicatorContainer: {
			flexDirection: "row",
			marginBottom: 20,
		},
		stepContainer: {
			flexDirection: "row",
			alignItems: "center",
		},
		stepIndicator: {
			width: 35,
			height: 35,
			borderRadius: 20,
			borderWidth: 2,
			borderColor: theme.border,
			backgroundColor: theme.background,
			justifyContent: "center",
			alignItems: "center",
		},
		activeStep: {
			borderColor: theme.secondary,
			backgroundColor: theme.secondary,
		},
		stepText: {
			color: theme.secondary,
			fontWeight: "bold",
			fontSize: 16,
		},
		activeStepText: {
			color: theme.background,
		},
		line: {
			width: 20,
			height: 2,
			backgroundColor: theme.border,
			marginHorizontal: 10,
		},
		activeLine: {
			backgroundColor: theme.secondary,
		},
		contentContainer: {
			flex: 1,
			justifyContent: "flex-start",
			alignItems: "center",
			paddingHorizontal: 10,
			width: "100%",
			height: "100%",
			marginTop: 10,
		},
		buttonContainer: {
			flexDirection: "row",
			marginBottom: 20,
		},
		button: {
			paddingVertical: 10,
			paddingHorizontal: 20,
			borderRadius: 20,
		},
		backButton: {
			backgroundColor: theme.background,
			marginRight: 10,
			borderWidth: 1,
			borderColor: theme.border,
		},
		backButtonText: {
			color: theme.secondary,
			fontWeight: "bold",
		},
		nextButton: {
			backgroundColor: theme.secondary,
		},
		nextButtonText: {
			color: "black",
			fontWeight: "bold",
		},
	});
};
