import React, { useId } from "react";
import "./input.css";

const Input = ({
  label,
  selectCurrency,
  disabled = false,
  amount,
  onCurrencyChange,
  onAmountChange,
  currencyOptions,
}) => {
  const amountId = useId();

  return (
    <div className="input_component">
      <div className="content">
        <div className="field">
          <label htmlFor={amountId} className="label">
            {label}
          </label>
          <input
            id={amountId}
            className="input"
            type="number"
            placeholder="Amount"
            disabled={disabled}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="field">
          <label className="label">Currency Type</label>
          <select
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            className="input-selector"
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;
