import Image from "next/image";
import Link from "next/link";
import emailIcon from "../email.svg";
import githubIcon from "../github.svg";
import linkedinIcon from "../linkedin.svg";

export default function Home() {
  return (
    <div>
      <div>
        <Name />
        <div>
          <Description />
        </div>
      </div>
      <nav>
        <Link href="/cv">CV</Link>
        <Links />
      </nav>
    </div>
  );
}

const Name = () => {
  return (
    <h1>
      <span>Xav</span>ier Lacey
    </h1>
  );
};

const Description = () => {
  return (
    <p>
      Hi I'm Xav, a software engineer living in Lisbon with eight years'
      experience building great products specialising in Node.js, TypeScript and
      React.
    </p>
  );
};

const Links = () => {
  return (
    <>
      <a href="mailto:x@vierlacey.com" target="_blank" rel="noreferrer">
        <Image src={emailIcon} alt="email" width={20} height={20} />
      </a>
      <a href="https://github.com/xavlacey/" target="_blank" rel="noreferrer">
        <Image src={githubIcon} alt="github" width={20} height={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/xlacey/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={linkedinIcon} alt="linkedin" width={20} height={20} />
      </a>
    </>
  );
};
