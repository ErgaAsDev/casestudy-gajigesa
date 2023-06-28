import React, { useState } from "react";

import useAccountChange from "../hooks/useAccountChange";
import SliderFrame from "./SliderFrame";
import DropdownFrame from "./DropdownFrame";

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

  const [showSlider, setShowSlider] = useState(false); // New state to handle visibility

  // Function to handle the select change and toggle the visibility of SliderFrame
  const handleAccountSelectChange = () => {
    handleSelectChange(); // Call the original handleSelectChange from the custom hook
    const selectedIndex = selectRef.current.selectedIndex;
    const selectedOption = selectRef.current.options[selectedIndex];
    const hasSlider = selectedOption.getAttribute("data-has-slider");
    setShowSlider(hasSlider === "true");
  };

  return (
    <div className="dropdown-container" data-testid="dropdown-component">
      <DropdownFrame
        selectedNumber={selectedNumber}
        selectRef={selectRef}
        inputRef={inputRef}
        handleAccountSelectChange={handleAccountSelectChange}
        handleInputChange={handleInputChange}
        accounts={accounts}
      />
      <hr />
      {showSlider && ( // Render SliderFrame based on showSlider state
        <SliderFrame
          sliderRef={sliderRef}
          sliderValue={sliderValue}
          handleSliderChange={handleSliderChange}
          showSlider={showSlider}
          selectedNumber={selectedNumber}
        />
      )}
    </div>
  );
};

export default AccountContainer;
