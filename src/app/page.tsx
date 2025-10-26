import Image from "next/image";
import Link from "next/link";
import emailIcon from "../email.svg";
import githubIcon from "../github.svg";
import linkedinIcon from "../linkedin.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-evenly text-white text-lg">
      <nav className="absolute bottom-6 right-6 flex flex-col items-end space-y-4">
        <Link
          href="/cv"
          className="text-light-orange hover:text-orange-400 transition-colors duration-300 font-source-code-pro"
        >
          CV →
        </Link>
        <Links />
      </nav>
      <div className="px-12 py-5 mr-12">
        <Name />
        <div className="h-1/3 flex flex-col pl-1">
          <Description />
        </div>
      </div>
    </div>
  );
}

const Name = () => {
  return (
    <h1 className="text-9xl pb-12 font-source-code-pro">
      <span className="text-light-orange">Xav</span>ier Lacey
    </h1>
  );
};

const Description = () => {
  return (
    <p className="w-3/4 font-montserrat">
      Hi I'm Xav, a software engineer living in Lisbon with eight years'
      experience building great products specialising in Node.js, TypeScript and
      React.
    </p>
  );
};

const Links = () => {
  return (
    <>
      <a
        href="mailto:x@vierlacey.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 text-light-orange hover:text-orange-400 transition-colors duration-300 font-source-code-pro"
      >
        <Image
          src={emailIcon}
          alt="email"
          width={20}
          height={20}
          className="orange-icon transition-all duration-300"
        />
        <span>→</span>
      </a>
      <a
        href="https://github.com/xavlacey/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 text-light-orange hover:text-orange-400 transition-colors duration-300 font-source-code-pro"
      >
        <Image
          src={githubIcon}
          alt="github"
          width={20}
          height={20}
          className="orange-icon transition-all duration-300"
        />
        <span>→</span>
      </a>
      <a
        href="https://www.linkedin.com/in/xlacey/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 text-light-orange hover:text-orange-400 transition-colors duration-300 font-source-code-pro"
      >
        <Image
          src={linkedinIcon}
          alt="linkedin"
          width={20}
          height={20}
          className="orange-icon transition-all duration-300"
        />
        <span>→</span>
      </a>
    </>
  );
};
