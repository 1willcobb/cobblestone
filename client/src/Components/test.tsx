import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const words = ["create", "develop", "build", "crush"];

const Slide = keyframes`
  0% {
    top: 0;
  }
  25% {
    top: -1.2em;
  }
  50% {
    top: -2.4em;
  }
  75% {
    top: -3.6em;
  }
`;


const StyledText = styled.span`
  top: 3px;
  height: 1.2em;
  line-height: 1.2em;
  position: relative;
  overflow: hidden;
  width: 7em;
  text-align: left;
  & > span {
    position: absolute;
    top: 0;
    animation: ${Slide} 3s infinite;
    font-weight: bold;
  }
`;

const WordAnimation = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center m-0">
        <p>We help you</p>
        <StyledText>
          <span className="flex left-0 ml-2">
            Cool
            <br />
            Art
            <br />
            Intruiging
            <br />
            Challenging
            <br />
            Cool
            <br />
            Art
            <br />
            Intruiging
            <br />
            Challenging
          </span>
        </StyledText>
        <br />
      </div>
      <p>your next course</p>
    </div>
  );
};

export default WordAnimation;
