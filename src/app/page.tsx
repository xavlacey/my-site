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

  const generateRandomLetters = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomText = "";
    for (let i = 0; i < 210; i++) {
      randomText += letters[Math.floor(Math.random() * letters.length)];
    }
    return randomText;
  };

  useEffect(() => {
    // Generate initial text
    setText(generateRandomLetters());

    // Update based on speed
    const interval = setInterval(() => {
      setText(generateRandomLetters());
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-4">
        <label
          htmlFor="speed-dial"
          className="text-stone-300 text-sm whitespace-nowrap"
        >
          Speed: {speed}ms
        </label>
        <input
          id="speed-dial"
          type="range"
          min="1"
          max="200"
          step="1"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="flex-1 h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-orange-400"
        />
      </div>
      <div className="lines-container w-full overflow-hidden">
        <p className="lines text-stone-300">{text}</p>
      </div>
    </div>
  );
};

// ĀŤĀŤĀŤĀŤĀŤŤĀĀŤŤĀĀŤŤĀĀŤŤĀĀŤŤĀĀŤŤŤŤĀĀĀĀŤŤŤŤĀĀĀĀŤŤŤŤĀĀŤŤŤŤĀĀĀĀŤŤŤŤŤŤŤŤĀĀĀĀĀĀĀĀŤŤŤŤŤŤŤŤĀĀĀĀĀĀĀĀĀĀĀŤŤŤŤŤŤŤŤŤŤŤŤŤŤŤŤĀĀĀĀĀĀĀĀĀĀĀĀĀĀĀĀŤŤŤŤŤŤŤŤŤŤŤŤŤŤŤŤĀĀĀĀ
