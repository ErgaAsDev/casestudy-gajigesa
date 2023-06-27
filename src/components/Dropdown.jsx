import React from "react";
import { MdEdit } from "react-icons/md";
import useSelectChange from "../hooks/useSelectChange";

const Dropdown = ({ accounts }) => {
  const {
    selectRef,
    handleSelectChange,
    selectedNumber,
    sliderRef,
    sliderValue,
    handleSliderChange,
  } = useSelectChange();
  console.log(sliderValue);
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
            <option value="Akun Gaji" style={{ backgroundColor: "#fff" }}>
              Akun Gaji
            </option>
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
        <h4>{selectedNumber}</h4>
        <MdEdit />
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
