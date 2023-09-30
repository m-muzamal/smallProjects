import React, { useState } from "react";
import "./convert.css";
import Input from "./input/Input";
import useCurrancyInfo from "./hook";

const Converter = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyInfo = useCurrancyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  const amountCovert = () => {
    setConvertAmount(amount * currencyInfo[to]);
  };
  return (
    <div className="container">
      <div className="converter">
        <Input
          label="From"
          selectCurrency={from}
          amount={amount}
          onCurrencyChange={(currency) => setAmount(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          currencyOptions={options}
        />
        <button className="btn" onClick={swap}>
          Swap
        </button>
        <Input
          label="To"
          selectCurrency={to}
          disabled
          amount={convertAmount}
          onCurrencyChange={(currency) => setTo(currency)}
          currencyOptions={options}
        />
        <button className="btn1" onClick={amountCovert}>
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default Converter;
