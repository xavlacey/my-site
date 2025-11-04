"use client";

import Image from "next/image";
import Link from "next/link";
import emailIcon from "../email.svg";
import githubIcon from "../github.svg";
import linkedinIcon from "../linkedin.svg";
import Lines from "../components/Lines";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 grain-bg">
      <section className="max-w-4xl mx-auto px-6 flex flex-col items-center justify-center min-h-screen overflow-x-visible">
        <div className="space-y-8 max-w-2xl w-full">
          <Name />
          <Description />
          {/* move all this to Links */}
          <div className="flex items-center gap-6">
            <Link href="/cv" className="nav-link text-2xl font-body">
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
    <h1 className="font-header pt-14 text-4xl sm:text-5xl md:text-6xl text-stone-100 break-words">
      <span className="text-orange-400">Xav</span>ier Lacey
    </h1>
  );
};

const Description = () => {
  return (
    <div className="font-body space-y-4">
      <p className="body-text description-text break-words">
        Hi I&apos;m Xav, a software engineer living in Lisbon with eight
        years&apos; experience building great products specialising in Node.js,
        TypeScript and React.
      </p>
      <p className="body-text description-text break-words">
        I like climbing, cycling, camping, cryptic crosswords and some other
        things that don&apos;t begin with &apos;c&apos;.
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
