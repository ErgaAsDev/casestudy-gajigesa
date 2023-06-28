import { useRef, useState } from "react";

const useAccountChange = () => {
  const selectRef = useRef(null);
  const sliderRef = useRef(null);
  const inputRef = useRef(null);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [sliderValue, setSliderValue] = useState(100);

  const handleSelectChange = () => {
    const selectedIndex = selectRef.current.selectedIndex;
    const selectedOption = selectRef.current.options[selectedIndex];
    const selectedColor = selectedOption.getAttribute("data-color");
    const selectedNumber = selectedOption.getAttribute("data-gaji");

    //  //
    if (selectRef.current) {
      selectRef.current.style.backgroundColor = selectedColor;
    }
    //  //

    if (Number(selectedNumber) >= 100) {
      const percentage =
        ((Number(selectedNumber) - 100) / (2085000 - 100)) * 100;
      if (sliderRef.current) {
        sliderRef.current.style.backgroundSize = `${percentage}% 100%`;
      } 
    } else {
      sliderRef.current.style.backgroundSize = `0% 100%`;
    }
    // //
    setSelectedNumber(selectedNumber);
    // //
    setSliderValue(Number(selectedNumber));
  };

  const handleSliderChange = (e) => {
    const selectedValue = sliderRef.current.value;
    setSelectedNumber(Number(selectedValue));
    setSliderValue(e.target.value);
    const percentage = ((selectedValue - 100) / (2085000 - 100)) * 100;
    if (sliderRef.current) {
      sliderRef.current.style.backgroundSize = `${percentage}% 100%`;
    }
  };

  const handleInputChange = (e) => {
    const inputValue = inputRef.current.value;
    setSelectedNumber(e.target.value);
    setSliderValue(Number(inputValue));
    const percentage = ((inputValue - 100) / (2085000 - 100)) * 100;
    if (sliderRef.current) {
      sliderRef.current.style.backgroundSize = `${percentage}% 100%`;
    }
  };

  return {
    selectRef,
    sliderRef,
    inputRef,
    handleSelectChange,
    handleSliderChange,
    handleInputChange,
    selectedNumber,
    sliderValue,
  };
};

export default useAccountChange;
