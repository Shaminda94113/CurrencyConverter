import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles, pickerSelectStyles } from './styles';

const CURRENCIES = ['USD', 'LKR', 'EUR', 'MUR', 'GBP', 'INR', 'JPY'];
//Use hardcoded values relative to 1 USD
const RATES = {
  USD: 1,
  LKR: 300,
  EUR: 0.92,
  MUR: 42.43,
  GBP: 0.80,
  INR: 83,
  JPY: 151
};

export default function App() {
  const [amount, setAmount] = useState('1');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('MUR');
  const [converted, setConverted] = useState(null);

  //Manual conversion
  useEffect(() => {
    const num = parseFloat(amount);
    if (!amount || !RATES[baseCurrency] || !RATES[targetCurrency]) return;

    const amountInUSD = parseFloat(amount) / RATES[baseCurrency];
    const convertedAmount = amountInUSD * RATES[targetCurrency];
    setConverted(convertedAmount.toFixed(2));
  }, [amount, baseCurrency, targetCurrency]);

  return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter amount"
            placeholderTextColor="#999"
        />

        <RNPickerSelect
            value={baseCurrency}
            onValueChange={setBaseCurrency}
            items={CURRENCIES.map(c => ({ label: c, value: c }))}
            style={pickerSelectStyles}
        />

        <MaterialCommunityIcons name="swap-vertical" size={24} color="#fff" style={styles.swapIcon} />

        <RNPickerSelect
            value={targetCurrency}
            onValueChange={setTargetCurrency}
            items={CURRENCIES.map(c => ({ label: c, value: c }))}
            style={pickerSelectStyles}
        />

        {converted && (
            <Text style={styles.result}>
              1 {baseCurrency} = {'\n'}
              <Text style={styles.convertedText}>{converted} {targetCurrency}</Text>
            </Text>
        )}
      </View>
  );
}