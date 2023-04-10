"use strict";

//МОЕ РЕШЕНИЕ

function convertMy(sum, initialCurrency, currencyToConvert) {
  let convertSum;
  initialCurrency = initialCurrency.toLowerCase();
  currencyToConvert = currencyToConvert.toLowerCase();
  String(currencyToConvert).toLowerCase();
  if (initialCurrency == "rub" && currencyToConvert == "usd") {
    convertSum = sum * (1 / 75);
  } else if (initialCurrency == "rub" && currencyToConvert == "eur") {
    convertSum = sum * (1 / 85);
  } else if (initialCurrency == "usd" && currencyToConvert == "eur") {
    convertSum = sum * 0.9;
  } else if (initialCurrency == "eur" && currencyToConvert == "usd") {
    convertSum = sum * 1.1;
  } else if (initialCurrency == currencyToConvert) {
    convertSum = sum;
  } else return console.log(null);
  const initialOptions = {
    style: "currency",
    currency: initialCurrency,
  };
  const convertOptions = {
    style: "currency",
    currency: currencyToConvert,
  };
  console.log(
    `Исходная информация в ${String(
      initialCurrency
    ).toUpperCase()}: ${Intl.NumberFormat("ru-RU", initialOptions).format(sum)}
Конвертация в ${String(currencyToConvert).toUpperCase()}: ${Intl.NumberFormat(
      "en-US",
      convertOptions
    ).format(convertSum)}`
  );
}

convertMy(100, "rub", "USD");

//РЕШЕНИЕ ПРЕПОДАВАТЕЛЯ

function convertNotMy(sum, initialCurrency, currencyToConvert) {
  const allCurrencies = [
    { name: "USD", mult: 1 },
    { name: "RUB", mult: 1 / 75 },
    { name: "EUR", mult: 1.1 },
  ];

  const initial = allCurrencies.find((c) => c.name === initialCurrency);
  if (!initial) {
    return null;
  }

  const convert = allCurrencies.find((c) => c.name === currencyToConvert);
  if (!convert) {
    return null;
  }

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: convert.name,
  }).format((sum * initial.mult) / convert.mult);
}

console.log(convertNotMy(100, "RUB", "USD"));
