"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import emailIcon from "../email.svg";
import githubIcon from "../github.svg";
import linkedinIcon from "../linkedin.svg";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 grain-bg">
      <section className="max-w-4xl mx-auto px-6 flex flex-col items-center justify-center min-h-screen overflow-x-visible">
        <div className="space-y-8 max-w-2xl w-full">
          <Name />
          <Description />
          {/* move all this to Links */}
          <div className="flex items-center gap-6">
            <Link href="/cv" className="nav-link text-2xl">
              CV
            </Link>
            <Links />
          </div>
          <div className="w-full max-w-4xl mt-8">
            <Lines />
          </div>
        </div>
      </section>
    </main>
  );
}

const Name = () => {
  return (
    <h1 className="name-title pt-24 text-4xl sm:text-5xl md:text-6xl text-stone-100 break-words">
      <span className="text-orange-400">Xav</span>ier Lacey
    </h1>
  );
};

const Description = () => {
  return (
    <div className="space-y-4">
      <p className="body-text description-text break-words">
        Hi I'm Xav, a software engineer living in Lisbon with eight years'
        experience building great products specialising in Node.js, TypeScript
        and React.
      </p>
      <p className="body-text description-text break-words">
        I like climbing, cycling, camping, cryptic crosswords and some other
        things that don't begin with 'c'.
      </p>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex gap-4">
      <a
        href="mailto:x@vierlacey.com"
        target="_blank"
        rel="noreferrer"
        className="icon-link"
      >
        <Image
          src={emailIcon}
          alt="email"
          width={24}
          height={24}
          className="icon-light"
        />
      </a>
      <a
        href="https://github.com/xavlacey/"
        target="_blank"
        rel="noreferrer"
        className="icon-link"
      >
        <Image
          src={githubIcon}
          alt="github"
          width={24}
          height={24}
          className="icon-light"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/xlacey/"
        target="_blank"
        rel="noreferrer"
        className="icon-link"
      >
        <Image
          src={linkedinIcon}
          alt="linkedin"
          width={24}
          height={24}
          className="icon-light"
        />
      </a>
    </div>
  );
};

const Lines = () => {
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(100);
  const [smoothness, setSmoothness] = useState(0);
  const [squareness, setSquareness] = useState(0);
  const [offset, setOffset] = useState(0);

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letterCount = letters.length; // 52

  const generateWaveLetter = (
    position: number,
    currentOffset: number,
    currentSquareness: number
  ): string => {
    // Create a triangle wave: 0-51 (up), then 51-0 (down)
    const cycleLength = letterCount * 2; // 104 (up 52 + down 52)
    const positionInCycle = (position + currentOffset) % cycleLength;

    let letterIndex: number;

    if (positionInCycle < letterCount) {
      // Going up: a to Z
      letterIndex = positionInCycle;
    } else {
      // Going down: Z to a
      const reversePosition = cycleLength - positionInCycle - 1;
      letterIndex = reversePosition;
    }

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
        resultText += generateWaveLetter(i, currentOffset, currentSquareness);
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
          Speed:
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
};
