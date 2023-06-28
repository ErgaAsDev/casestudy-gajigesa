import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import useAccountChange from "../hooks/useAccountChange";

const Dropdown = ({ accounts }) => {
  const {
    selectRef,
    handleSelectChange,
    handleInputChange,
    selectedNumber,
    sliderRef,
    inputRef,
    sliderValue,
    handleSliderChange,
  } = useAccountChange();

  const [focus, setFocus] = useState(false);

  const inputAttributes = {
    className: "salary-amount",
    type: "number",
    value: selectedNumber,
    ref: inputRef,
    onChange: handleInputChange,
    autoFocus: true,
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-frame">
        <h3>Withdraw Amount</h3>
        <div className="select-container">
          <select
            id="accountDropdown"
            ref={selectRef}
            onChange={handleSelectChange}
          >
            {accounts.map((account) => (
              <option
                key={account.id}
                value={account.name}
                data-color={account.color}
                data-gaji={account.gaji}
                style={{ backgroundColor: account.color }}
              >
                {account.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="salary-frame">
        {focus ? (
          <input {...inputAttributes} />
        ) : (
          <h4 className="salary-amount">{selectedNumber}</h4>
        )}
        <MdEdit className="edit-icon" onClick={() => setFocus(!focus)} />
      </div>
      <hr />
      <div className="slider-frame">
        <input
          className="slider"
          type="range"
          min={100}
          max={2085000}
          step={1}
          ref={sliderRef}
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <div className="min-max">
          <h4>Rp 100</h4>
          <h4>Rp 2.085.000</h4>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
