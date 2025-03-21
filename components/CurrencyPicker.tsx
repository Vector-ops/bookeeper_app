import { useTheme } from "@/hooks/useTheme";
import { CurrencyPickerComponent } from "@youssefprodev/rn-currency-picker";
import { CurrencyPickerRef } from "@youssefprodev/rn-currency-picker/lib/typescript/module/src/types";
import React, { useState } from "react";
import { Button, Pressable } from "react-native";

// Selected Currency: {"code": "CAD", "decimal_digits": 2, "flag_emoji": "🇨🇦", "name": "Canadian Dollar", "name_plural": "Canadian dollars", "rounding": 0, "symbol": "CA$", "symbol_native": "$"}

export type Currency = {
	code: string;
	decimal_digits: number;
	flag_emoji: string;
	name: string;
	name_plural: string;
	rounding: number;
	symbol: string;
	symbol_native: string;
};

export default function CurrencyPicker({
	currency,
	setGoalCurrency,
}: {
	currency: string;
	setGoalCurrency: React.Dispatch<React.SetStateAction<string>>;
}) {
	let currencyPickerRef = React.useRef<CurrencyPickerRef>(undefined);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { theme } = useTheme();

	const handlePress = () => {
		if (isOpen) {
			currencyPickerRef.current?.close();
			setIsOpen(false);
		} else {
			currencyPickerRef.current?.close();
			setIsOpen(true);
		}
	};

	return (
		<>
			<Pressable onPress={() => handlePress}>
				<CurrencyPickerComponent
					currencyPickerRef={(ref) =>
						(currencyPickerRef.current = ref)
					}
					enable={true}
					darkMode={true}
					currencyCode={currency}
					showFlag={true}
					showCurrencyName={false}
					showCurrencyCode={true}
					onSelectCurrency={(data: Currency) =>
						setGoalCurrency(data.code)
					}
					showNativeSymbol={false}
					showSymbol={false}
					containerStyle={{
						container: {
							backgroundColor: theme.background,
							borderWidth: 1,
							borderColor: theme.secondary,
							borderRadius: 50,
							height: 40,
							width: 100,
							paddingHorizontal: 15,
						},
						flagWidth: 25,
						currencyCodeStyle: {
							color: theme.text,
						},
						currencyNameStyle: {},
						symbolStyle: {},
						symbolNativeStyle: {},
					}}
					modalStyle={{
						container: {},
						searchStyle: {},
						tileStyle: {},
						itemStyle: {
							itemContainer: {},
							flagWidth: 25,
							currencyCodeStyle: {},
							currencyNameStyle: {},
							symbolStyle: {},
							symbolNativeStyle: {},
						},
					}}
					title="Select a Currency"
					searchPlaceholder="Search for a currency"
					showCloseButton={true}
					showModalTitle={true}
				/>
			</Pressable>
		</>
	);
}
