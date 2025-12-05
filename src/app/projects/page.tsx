import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-linear-to-br from-stone-900 via-stone-800 to-stone-900 grain-bg">
      <nav className="max-w-4xl mx-auto px-6 py-6">
        <Link
          href="/"
          className="font-body nav-link inline-flex items-center gap-2"
        >
          ← back
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        <h1 className="font-header text-4xl sm:text-6xl font-thin text-stone-100 mb-6">
          personal <span className="text-orange-400">projects</span>
        </h1>
        <div className="font-body flex flex-col gap-8">
          <ProjectCard
            props={{
              name: "Katakana Game",
              techStack: ["Python", "Django", "Railway"],
              description:
                "A simple web-based game for testing knowledge of Japanese Katakana characters in a fun and interactive way.",
              link: "https://katakana-game.up.railway.app",
            }}
          />
          <ProjectCard
            props={{
              name: "Taproom Champions",
              techStack: [
                "React",
                "TypeScript",
                "Node.js",
                "Tailwind",
                "Vercel",
              ],
              description:
                "A way to keep track of your favourite taprooms and breweries.",
              link: "https://taproom-champions.vercel.app",
            }}
          />
          <ProjectCard
            props={{
              name: "The Impossible Quiz",
              techStack: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind",
                "Vercel",
              ],
              description:
                "A website I made to help automate a quiz that my dad runs every Christmas.",
              link: "https://impossiblequizxl.vercel.app/",
            }}
          />
          <ProjectCard
            props={{
              name: "Personal Website",
              techStack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
              description:
                "My personal website built with Next.js and Tailwind. Features squiggly lines.",
              link: "https://www.xavierlacey.com",
            }}
          />
        </div>
      </div>
    </div>
  );
}

type ProjectProps = {
  name: string;
  techStack: string[];
  description: string;
  link: string;
};

const ProjectCard = ({ props }: { props: ProjectProps }) => {
  const { name, techStack, description, link } = props;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-stone-800/50 backdrop-blur-xs rounded-xl shadow-lg p-6 md:p-8 border border-transparent hover:scale-[1.006] hover:shadow-[0_0_20px_rgba(251,146,60,0.6)] hover:border-orange-400/40 transition-all cursor-pointer"
    >
      <h2 className="text-2xl font-bold text-orange-400 mb-4">{name}</h2>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech: string, index: number) => {
            return (
              <span
                key={index}
                className="px-3 py-1 bg-stone-700/70 text-stone-200 rounded-full text-sm border border-stone-600/50"
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      <p className="text-stone-300 leading-relaxed">{description}</p>
    </a>
  );
};
