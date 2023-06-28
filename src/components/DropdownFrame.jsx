import React from "react";
import { MdEdit } from "react-icons/md";
const DropdownFrame = ({
  selectRef,
  handleAccountSelectChange,
  accounts,
  selectedNumber,
  inputRef,
  handleInputChange,
}) => {
  return (
    <>
      <div className="dropdown-frame">
        <h3>Withdraw Amount</h3>
        <div className="select-container">
          <select
            id="accountDropdown"
            ref={selectRef}
            onChange={handleAccountSelectChange}
          >
            {accounts.map((account) => (
              <option
                key={account.id}
                value={account.name}
                data-color={account.color}
                data-gaji={account.gaji}
                data-has-slider={account.hasSlider}
                style={{ backgroundColor: account.color }}
              >
                {account.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="salary-frame">
        <input
          className="salary-amount"
          type="number"
          value={selectedNumber}
          ref={inputRef}
          onChange={handleInputChange}
          autoFocus
          data-testid="salary-input"
        />
        <MdEdit className="edit-icon" />
      </div>
    </>
  );
};

export default DropdownFrame;
