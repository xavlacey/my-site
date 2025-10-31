import Image from "next/image";
import Link from "next/link";
import emailIcon from "../email.svg";
import githubIcon from "../github.svg";
import linkedinIcon from "../linkedin.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 grain-bg">
      <nav className="max-w-4xl mx-auto px-6 py-6 flex justify-end items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/cv"
            className="text-slate-300 hover:text-orange-400 text-2xl transition-colors font-medium p-2"
          >
            CV
          </Link>
          <Links />
        </div>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center space-y-6">
          <Name />
          <div className="max-w-2xl">
            <Description />
          </div>
        </div>
      </div>
    </div>
  );
}

const Name = () => {
  return (
    <h1 className="text-6xl font-bold text-slate-100">
      <span className="text-orange-400">Xav</span>ier Lacey
    </h1>
  );
};

const Description = () => {
  return (
    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
      Hi I'm Xav, a software engineer living in Lisbon with eight years'
      experience building great products specialising in Node.js, TypeScript and
      React.
    </p>
  );
};

const Links = () => {
  return (
    <div className="flex gap-4">
      <a
        href="mailto:x@vierlacey.com"
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors group"
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
        className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors group"
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
        className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors group"
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
