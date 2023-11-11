import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SelectCountry } from "react-native-element-dropdown";
import axios from "axios";

const local_data = [
  {
    value: "USD",
    lable: "USD",
    image: require("../assets/usa.webp"),
  },
  {
    value: "EUR",
    lable: "EUR",
    image: require("../assets/eu.png"),
  },
  {
    value: "GBP",
    lable: "GBP",
    image: require("../assets/uk.webp"),
  },
  {
    value: "CNY",
    lable: "CNY",
    image: require("../assets/ch.png"),
  },
  {
    value: "ETB",
    lable: "ETB",
    image: require("../assets/eth.png"),
  },
];

const Tips = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ETB");
  const [exchangeAmount, setAmount] = useState("");
  const [apiDate, setApiDate] = useState("");
  const [exchangeResult, setExchangeResult] = useState("");
  const apiKey = "dGYFX1iOgJXHVIArxjAWJo9i1Y7d9wS7";

  const cleanFileds = () => {
    setAmount("");
    setExchangeResult("");
  };

  const convert = () => {
    if (!exchangeAmount) {
      Alert.alert("Please Set amount!");
      return;
    }

    axios
      .get(
        `https://api.apilayer.com/currency_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${exchangeAmount}&apikey=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        const date = new Date(response.data.info.timestamp * 1000);
        const formattedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
        setApiDate(formattedDate);
        setExchangeResult(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.exchangeContainer}>
        <Text style={styles.text}>Currency Exchange {apiDate || ""}</Text>
        <View style={styles.inlineInputsContainer}>
          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            iconStyle={styles.iconStyle}
            value={fromCurrency}
            data={local_data}
            valueField="value"
            labelField="lable"
            imageField="image"
            placeholder="Select country"
            searchPlaceholder="Search..."
            onChange={(e) => {
              setFromCurrency(e.value);
              cleanFileds();
            }}
          />
          <TextInput
            keyboardType="numeric"
            style={[styles.textInput, styles.inlineTextInputRight]}
            placeholder="Amount"
            value={exchangeAmount}
            onChangeText={(text) => setAmount(text)}
          />
        </View>
        <View style={styles.inlineInputsContainer}>
          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            value={toCurrency}
            data={local_data}
            valueField="value"
            labelField="lable"
            imageField="image"
            onChange={(e) => {
              setToCurrency(e.value);
              cleanFileds();
            }}
          />
          <Text style={[styles.textInput, styles.inlineTextRight]}>
            Price: {exchangeResult}
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonUpload} onPress={() => convert()}>
          <Text style={styles.buttonTextWhite}>Convert </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
  exchangeContainer: {
    justifyContent: "flex-start",
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },

  text: {
    alignSelf: "center",
    alignItems: "center",
    color: "#0fb140",
    fontSize: 16,
    height: 24,
    marginBottom: 10,
  },

  inlineInputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  inlineTextInputRight: {
    backgroundColor: "#ebffeb",
    borderRadius: 10,
    padding: 10,
    flex: 2,
    marginLeft: 10,
  },
  inlineTextRight: {
    backgroundColor: "#ebffeb",
    color: "#777",
    borderRadius: 10,
    padding: 10,
    flex: 2,
    marginLeft: 10,
  },
  dropdown: {
    height: 50,
    width: 140,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  textInput: {
    fontSize: 18,
  },
  buttonUpload: {
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 10,
    marginTop: 20,
    elevation: 3,
  },
  buttonTextWhite: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
