import { GoalCardProps } from "@/types/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const getPercentage = (a: number, b: number) => {
	const percentage = (a / b) * 100;

	return Math.floor(percentage);
};

const GoalCard = ({ name, goal, progress }: GoalCardProps) => {
	return (
		<ThemedView style={styles.conatiner}>
			<ThemedView style={styles.iconAndProgress}>
				<ThemedText>Icon</ThemedText>
				<ThemedView style={styles.titleAndProgress}>
					<ThemedText style={styles.title}>{name}</ThemedText>
					<ThemedView style={styles.progress}>
						<ThemedText
							style={{ fontWeight: "bold", color: "#61ffca" }}
						>
							${progress}
						</ThemedText>
						<ThemedText style={{ fontWeight: "bold" }}>
							/ ${goal}
						</ThemedText>
					</ThemedView>
				</ThemedView>
			</ThemedView>
			<ThemedView style={styles.progressBar}>
				<Progress.Bar
					progress={progress / goal}
					width={250}
					color="#61ffca"
					animated={true}
				/>
				<ThemedText style={styles.progressPercentage}>
					{getPercentage(progress, goal)}%
				</ThemedText>
			</ThemedView>
		</ThemedView>
	);
};

export default GoalCard;

const styles = StyleSheet.create({
	conatiner: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		backgroundColor: "black",
		width: "100%",
		paddingHorizontal: 30,
		paddingVertical: 15,
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 10,
		gap: 30,
	},
	iconAndProgress: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 30,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
	titleAndProgress: {
		display: "flex",
		flexDirection: "column",
		gap: 5,
	},
	progress: {
		display: "flex",
		flexDirection: "row",
		gap: 5,
	},
	progressBar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	progressPercentage: {
		color: "#61ffca",
		backgroundColor: "rgba(97, 255, 202, 0.2)",
		borderRadius: 10,
		paddingVertical: 1,
		paddingHorizontal: 2,
		width: 45,
		textAlign: "center",
	},
});
