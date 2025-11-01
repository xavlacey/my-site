"use client";

import { useState, useEffect } from "react";

export default function Lines() {
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(50);
  const [smoothness, setSmoothness] = useState(0);
  const [squareness, setSquareness] = useState(0);
  const [offset, setOffset] = useState(0);

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letterCount = letters.length; // 52

  const generateWaveLetter = (
    position: number,
    currentOffset: number,
    currentSquareness: number,
    currentSmoothness: number
  ): string => {
    const cycleLength = letterCount * 2; // 104 (up 52 + down 52)
    const positionInCycle = (position + currentOffset) % cycleLength;

    // Calculate triangle wave letter index
    let triangleIndex: number;
    if (positionInCycle < letterCount) {
      // Going up: a to Z
      triangleIndex = positionInCycle;
    } else {
      // Going down: Z to a
      const reversePosition = cycleLength - positionInCycle - 1;
      triangleIndex = reversePosition;
    }

    // Calculate sine wave letter index
    // Map positionInCycle (0-103) to angle (0 to 2π)
    const angle = (positionInCycle / cycleLength) * Math.PI * 2;
    // Sin value from -1 to 1, map to 0 to 51
    const sinValue = Math.sin(angle);
    const sineIndex = Math.round(((sinValue + 1) / 2) * (letterCount - 1));

    // Blend between triangle and sine wave based on smoothness
    const smoothnessFactor = currentSmoothness / 100;
    let letterIndex = Math.round(
      triangleIndex * (1 - smoothnessFactor) + sineIndex * smoothnessFactor
    );

    // Apply squareness: interpolate between smooth position and square wave
    // At 100% squareness: use 0 (a) for first half, 51 (Z) for second half
    const squarenessFactor = currentSquareness / 100;

    if (positionInCycle < letterCount) {
      // First half: blend towards 'a' (index 0)
      letterIndex = Math.round(letterIndex * (1 - squarenessFactor));
    } else {
      // Second half: blend towards 'Z' (index 51)
      const squareIndex = letterCount - 1; // 51
      letterIndex = Math.round(
        letterIndex * (1 - squarenessFactor) + squareIndex * squarenessFactor
      );
    }

    return letters[letterIndex];
  };

  const generateRandomLetters = (
    currentOffset: number,
    currentSmoothness: number,
    currentSquareness: number
  ) => {
    let resultText = "";

    for (let i = 0; i < 210; i++) {
      if (Math.random() < currentSmoothness / 100) {
        // Use wave pattern
        resultText += generateWaveLetter(
          i,
          currentOffset,
          currentSquareness,
          currentSmoothness
        );
      } else {
        // Use random letter
        resultText += letters[Math.floor(Math.random() * letters.length)];
      }
    }

    return resultText;
  };

  useEffect(() => {
    // Generate initial text
    setText(generateRandomLetters(offset, smoothness, squareness));

    // Update based on speed
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 3;
        setText(generateRandomLetters(newOffset, smoothness, squareness));
        return newOffset;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed, smoothness, squareness]);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-4">
        <label
          htmlFor="speed-dial"
          className="text-stone-300 text-sm whitespace-nowrap"
        >
          Speediness:
        </label>
        <input
          id="speed-dial"
          type="range"
          min="1"
          max="100"
          step="1"
          value={101 - speed}
          onChange={(e) => setSpeed(101 - Number(e.target.value))}
          className="flex-1 h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-orange-400"
        />
      </div>
      <div className="flex items-center gap-4">
        <label
          htmlFor="smoothness-dial"
          className="text-stone-300 text-sm whitespace-nowrap"
        >
          Smoothness:
        </label>
        <input
          id="smoothness-dial"
          type="range"
          min="0"
          max="100"
          step="1"
          value={smoothness}
          onChange={(e) => setSmoothness(Number(e.target.value))}
          className="flex-1 h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-orange-400"
        />
      </div>
      <div className="flex items-center gap-4">
        <label
          htmlFor="squareness-dial"
          className="text-stone-300 text-sm whitespace-nowrap"
        >
          Squareness:
        </label>
        <input
          id="squareness-dial"
          type="range"
          min="0"
          max="100"
          step="1"
          value={squareness}
          onChange={(e) => setSquareness(Number(e.target.value))}
          className="flex-1 h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-orange-400"
        />
      </div>
      <div className="lines-container w-full overflow-hidden">
        <p className="lines text-stone-300">{text}</p>
      </div>
    </div>
  );
}
