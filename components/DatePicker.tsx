import React, { useState } from "react";
import { View } from "react-native";

import { Button } from "react-native-paper";
import { DatePickerInput, DatePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemedView } from "./ThemedView";

const DatePickerComponent = () => {
	const [inputDate, setInputDate] = React.useState<Date | undefined>(
		undefined
	);

	return (
		<ThemedView
			style={{
				justifyContent: "center",
				flex: 1,
				alignItems: "center",
				backgroundColor: "black",
			}}
		></ThemedView>
	);
};

export default DatePickerComponent;
