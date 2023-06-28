import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import useAccountChange from "../hooks/useAccountChange";

const AccountContainer = ({ accounts }) => {
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

  const inputAttributes = {
    className: "salary-amount",
    type: "number",
    value: selectedNumber,
    ref: inputRef,
    onChange: handleInputChange,
    autoFocus: true,
  };

  return (
    <div className="dropdown-container" data-testid="dropdown-component">
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
        {/* {focus ? (
          <input {...inputAttributes} data-testid="salary-input" />
        ) : (
          <h4 className="salary-amount">
            {selectedNumber}
          </h4>
        )} */}
        <input {...inputAttributes} data-testid="salary-input" />
        <MdEdit className="edit-icon" />
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

export default AccountContainer;
