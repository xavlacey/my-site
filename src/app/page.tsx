import Image from "next/image";
import Link from "next/link";
import emailIcon from "../email.svg";
import githubIcon from "../github.svg";
import linkedinIcon from "../linkedin.svg";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 grain-bg">
      <section className="max-w-4xl mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="space-y-8 max-w-2xl">
          <Name />
          <Description />
          <div className="flex items-center gap-6">
            <Link
              href="/cv"
              className="text-slate-300 hover:text-orange-400 text-2xl transition-colors font-medium"
            >
              CV
            </Link>
            <Links />
          </div>
        </div>
      </section>
    </main>
  );
}

const Name = () => {
  return (
    <h1 className="pt-24 text-6xl font-bold text-slate-100">
      <span className="text-orange-400">Xav</span>ier Lacey
    </h1>
  );
};

const Description = () => {
  return (
    <div className="space-y-4">
      <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
        Hi I'm Xav, a software engineer living in Lisbon with eight years'
        experience building great products specialising in Node.js, TypeScript
        and React.
      </p>
      <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
        I like climbing, cycling, cryptic crosswords and some other things that
        don't begin with C.
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
        className="p-2 rounded-lg transition-colors group"
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
        className="p-2 rounded-lg transition-colors group"
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
        className="p-2 rounded-lg transition-colors group"
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
