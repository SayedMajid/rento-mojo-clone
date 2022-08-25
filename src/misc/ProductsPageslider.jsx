import React from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

export default function prodSlider({ sliderValue, setSliderValue }) {
  return (
    <Slider
      id="slider"
      defaultValue={0}
      min={0}
      step={1}
      max={2}
      colorScheme="teal"
      onChange={(v) => setSliderValue(v)}
    >
      <SliderMark value={0} mt="3" ml="-1.5" fontSize="xs">
        3+
      </SliderMark>
      <SliderMark value={1} mt="3" ml="-2.5" fontSize="xs">
        6+
      </SliderMark>
      <SliderMark value={2} mt="3" ml="-2.5" fontSize="xs">
        12+
      </SliderMark>
      <SliderTrack bg='#ccc' >
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb bg="teal" />
    </Slider>
  );
}
