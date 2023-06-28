import React from "react";

const SliderFrame = ({
  sliderRef,
  sliderValue,
  handleSliderChange,
  showSlider,
  selectedNumber,
}) => {
  const percentage = ((Number(selectedNumber) - 100) / (2085000 - 100)) * 100;

  return (
    <>
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
          style={showSlider ? { backgroundSize: `${percentage}% 100%` } : ""}
        />
        <div className="min-max">
          <h4>Rp 100</h4>
          <h4>Rp 2.085.000</h4>
        </div>
      </div>
    </>
  );
};

export default SliderFrame;
