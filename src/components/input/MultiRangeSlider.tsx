/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  maxFilterDefault,
  maxRange,
  minRange,
} from "../../recoil/atoms/filtering";

interface SliderInnerProps {
  rangeMinPercent: number;
  rangeMaxPercent: number;
}

const MultiRangeSliderDiv = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MultiRangeSliderOutside = css`
  position: relative;
  height: 4px;
  width: 650px;
  border-radius: 10px;
  background-color: #dddddd;
`;

const MultiRangeSliderInner = ({
  rangeMinPercent,
  rangeMaxPercent,
}: SliderInnerProps) => css`
  position: absolute;
  left: ${rangeMinPercent}%;
  right: ${rangeMaxPercent}%;
  height: 4px;
  border-radius: 10px;
  background-color: ${theme.colors["--sub-textColor"]};
`;

const MultiRangeInput = css`
  position: absolute;
  top: -4px;
  height: 7px;
  width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  pointer-events: none;
  &::-webkit-slider-thumb {
    pointer-events: auto;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid ${theme.colors["--sub-textColor"]};
    background-color: white;
    -webkit-appearance: none;
  }
`;

const PriceTextContainer = css`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  padding-top: 2rem;
`;

const PriceTextDiv = css`
  border: 1px solid ${theme.colors["--sub-textColor"]};
  border-radius: 10px;
  width: 32%;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
`;

const PriceTextTitle = css`
  color: ${theme.colors["--sub-textColor"]};
  padding-bottom: 0.5rem;
  font-size: 0.7rem;
`;

const defaultMinValue = 0;
const priceGap = 1000;

function MultiRangeSlider() {
  const maxFilterDefaultValue = useRecoilValue(maxFilterDefault);
  // const [rangeMinValue, setRangeMinValue] = useState<number>(defaultMinValue);
  // const [rangeMaxValue, setRangeMaxValue] = useState<number>(
  //   maxFilterDefaultValue
  // );
  const [rangeMinValue, setRangeMinValue] = useRecoilState(minRange);
  const [rangeMaxValue, setRangeMaxValue] = useRecoilState(maxRange);
  const [rangeMinPercent, setRangeMinPercent] = useState<number>(0);
  const [rangeMaxPercent, setRangeMaxPercent] = useState<number>(0);
  const rangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeMinValue(parseInt(e.target.value));
  };

  const rangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMaxValue(rangeMinValue + priceGap);
      setRangeMinValue(rangeMaxValue - priceGap);
    } else {
      setRangeMinPercent((rangeMinValue / maxFilterDefaultValue) * 100);
      setRangeMaxPercent(100 - (rangeMaxValue / maxFilterDefaultValue) * 100);
    }
  };

  return (
    <>
      <div css={MultiRangeSliderDiv}>
        <div css={MultiRangeSliderOutside}>
          <div
            css={MultiRangeSliderInner({ rangeMinPercent, rangeMaxPercent })}
          />
          <input
            css={MultiRangeInput}
            type="range"
            min={defaultMinValue}
            max={maxFilterDefaultValue - priceGap}
            value={rangeMinValue}
            onChange={(e) => {
              rangeMinValueHandler(e);
              twoRangeHandler();
            }}
            step={priceGap}
          />
          <input
            css={MultiRangeInput}
            type="range"
            min={defaultMinValue + priceGap}
            max={maxFilterDefaultValue}
            value={rangeMaxValue}
            onChange={(e) => {
              rangeMaxValueHandler(e);
              twoRangeHandler();
            }}
            step={priceGap}
          />
        </div>
        <div css={PriceTextContainer}>
          <div css={PriceTextDiv}>
            <span css={PriceTextTitle}>최저 가격</span>
            <span>₩{rangeMinValue.toLocaleString()}</span>
          </div>
          <div>-</div>
          <div css={PriceTextDiv}>
            <span css={PriceTextTitle}>최고 가격</span>
            <span>
              ₩{rangeMaxValue.toLocaleString()}
              {rangeMaxValue === maxFilterDefaultValue ? "+" : ""}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(MultiRangeSlider);
