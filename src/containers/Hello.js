import React from "react";
import { Hello } from "../components";
function HelloContainer() {
  return (
    <Hello>
      <Hello.Content>
        <svg width="500" height="150">
          <defs>
            <linearGradient
              id="stripe-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#AAA"></stop>
              <stop offset="12.45%" stopColor="#AAA"></stop>
              <stop offset="12.5%" stopColor="#666"></stop>
              <stop offset="24.45%" stopColor="#666"></stop>
              <stop offset="25.5%" stopColor="#AAA"></stop>
              <stop offset="37.45%" stopColor="#AAA"></stop>
              <stop offset="37.5%" stopColor="#666"></stop>
              <stop offset="49.9%" stopColor="#666"></stop>
              <stop offset="50%" stopColor="#AAA"></stop>
              <stop offset="62.45%" stopColor="#AAA"></stop>
              <stop offset="62.5%" stopColor="#666"></stop>
              <stop offset="74.95%" stopColor="#666"></stop>
              <stop offset="75%" stopColor="#AAA"></stop>
              <stop offset="87.45%" stopColor="#AAA"></stop>
              <stop offset="87.5%" stopColor="#666"></stop>
              <stop offset="100%" stopColor="#666"></stop>
            </linearGradient>
            <pattern
              id="stripe-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="-20"
                width="40"
                height="40"
                fill="url(#stripe-gradient)"
                strokeWidth="0"
                stroke="none"
              >
                <animate
                  attributeName="x"
                  from="0"
                  to="-20"
                  dur="0.5s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </pattern>
            <mask id="stripe-mask">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#stripe-pattern)"
              ></rect>
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="400"
            fill="grey"
            height="200"
            mask="url(#stripe-mask)"
          ></rect>
        </svg>
        <Hello.TextBox>
          <Hello.Text>Hello</Hello.Text>
        </Hello.TextBox>
      </Hello.Content>
    </Hello>
  );
}

export default HelloContainer;
