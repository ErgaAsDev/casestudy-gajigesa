import { useRef, useState } from "react";

const useSelectChange = () => {
  const selectRef = useRef(null);
  const sliderRef = useRef(null);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [sliderValue, setSliderValue] = useState(100);
  const handleSelectChange = () => {
    const selectedIndex = selectRef.current.selectedIndex;
    const selectedOption = selectRef.current.options[selectedIndex];
    const selectedColor = selectedOption.getAttribute("data-color");
    selectRef.current.style.backgroundColor = selectedColor;
    const selectedNumber = selectedOption.getAttribute("data-gaji");
    if (Number(selectedNumber) >= 100) {
      const percentage =
        ((Number(selectedNumber) - 100) / (2085000 - 100)) * 100;
      sliderRef.current.style.backgroundSize = `${percentage}% 100%`;
    } else {
      sliderRef.current.style.backgroundSize = `0% 100%`;
    }
    setSelectedNumber(selectedNumber);
    setSliderValue(Number(selectedNumber));
  };

  const handleSliderChange = (e) => {
    const selectedValue = sliderRef.current.value;
    setSelectedNumber(Number(selectedValue));
    setSliderValue(e.target.value);
    const percentage = ((selectedValue - 100) / (2085000 - 100)) * 100;
    sliderRef.current.style.backgroundSize = `${percentage}% 100%`;
  };

  return {
    selectRef,
    sliderRef,
    handleSelectChange,
    handleSliderChange,
    selectedNumber,
    sliderValue,
  };
};

export default useSelectChange;
