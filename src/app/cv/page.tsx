import Link from "next/link";
import Image from "next/image";
import downloadIcon from "../../download.svg";

export default function CV() {
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
        <div className="flex items-center gap-4 mb-6">
          <h1 className="font-header text-4xl md:text-5xl font-bold text-stone-100">
            my cv
          </h1>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link inline-flex items-center"
            aria-label="Download CV as PDF"
          >
            <Image
              src={downloadIcon}
              alt="download"
              width={24}
              height={24}
              className="icon-light"
            />
          </a>
        </div>
        <div className="font-body flex flex-col gap-8">
          <ExperienceSection
            props={{
              jobTitle: "Senior Software Engineer, Contract",
              startDate: "Jan 2025",
              endDate: "Present",
              company: "Material Index",
              description:
                "Full-stack engineer at a circular economy company, focused on reducing construction waste.",
              stack: [
                "Node.js",
                "TypeScript",
                "React",
                "PostgreSQL",
                "AWS",
                "MongoDB",
                "SST",
              ],
              responsibilities: [
                "Delivered a brand new marketplace product from conception to launch as part of a small, cross-functional team.",
                "Maintained and enhanced a bespoke audit application, ensuring reliability and performance for existing users",
                "Worked autonomously in a startup environment, balancing multiple product streams and adapting quickly to evolving business needs.",
              ],
            }}
          />

          <ExperienceSection
            props={{
              jobTitle: "Backend Software Engineer",
              startDate: "August 2022",
              endDate: "December 2024",
              company: "Sylvera",
              description:
                "Backend engineer at a climate tech company, working across platform and product teams.",
              stack: [
                "Node.js",
                "TypeScript",
                "GraphQL",
                "PostgreSQL",
                "AWS",
                "Docker",
                "Omni BI",
              ],
              responsibilities: [
                "Designed, developed, and managed RESTful and GraphQL APIs in TypeScript delivering user-focused solutions for both internal and external stakeholders.",
                "Tech lead for a new product that successfully delivered on-time, connected our clients with 200 developers and suppliers, and significantly enhanced client engagement.",
                "Initiated weekly communication between teams to align system architecture and technical solutions, and achieve project goals.",
                "Took initiative to build a business intelligence dashboard used by multiple teams to resolve internal bottlenecks and streamline product processes.",
                "Spearheaded and facilitated key discussions on engineering standards, including leading a workshop that promoted best practices in testing, database design and code structure; fostered a culture of technical excellence.",
                "Led many technical interviews; redesigned the coding challenge and encouraged a fairer interview process.",
              ],
            }}
          />

          <ExperienceSection
            props={{
              jobTitle: "Full-Stack Software Engineer",
              startDate: "August 2017",
              endDate: "July 2022",
              company: "LoyaltyLion",
              description:
                "Full-stack engineer at e-commerce startup. Joined as the seventh employee, contributing significantly to the company’s growth through multiple product and team development phases.",
              stack: [
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "React",
                "Redux",
                "Ruby",
                "Ruby on Rails",
                "Sidekiq",
                "AWS",
              ],
              responsibilities: [
                "Delivered features end-to-end across public RESTful Node.js/React and Ruby on Rails applications, enhancing platform capabilities and user experience.",
                "Proactively optimised team workflows and documentation, streamlining development processes and improving cross-functional collaboration.",
                "Automated documentation quality checks by integrating a doc linting tool into the build pipeline enhancing client-facing API documentation quality.",
              ],
            }}
          />

          <ExperienceSection
            props={{
              jobTitle: "Software Developer",
              startDate: "September 2016",
              endDate: "July 2017",
              company: "The Education Hub Group",
              description:
                "Node.js backend developer responsible for building and maintaining the API for our bespoke platform for schools.",
              stack: ["Node.js", "JavaScript"],
              responsibilities: [
                "Second employee and developed the idea into a fully-functioning web app.",
              ],
            }}
          />

          <ExperienceSection
            props={{
              jobTitle: "Graduate Electrical Building Services Engineer",
              startDate: "June 2015",
              endDate: "March 2016",
              company: "Mott MacDonald",
              description:
                "Designed electrical systems for the new Canary Wharf Crossrail station.",
            }}
          />
        </div>
      </div>
    </div>
  );
}

type ExperienceProps = {
  jobTitle: string;
  startDate: string;
  endDate?: string;
  company: string;
  description: string;
  stack?: string[];
  responsibilities?: string[];
};

const ExperienceSection = ({ props }: { props: ExperienceProps }) => {
  const {
    jobTitle,
    startDate,
    endDate,
    company,
    description,
    stack,
    responsibilities,
  } = props;

  return (
    <div className="bg-stone-800/50 backdrop-blur-xs rounded-xl shadow-lg  p-6 md:p-8 hover:shadow-xl hover:border-stone-600/50 transition-all">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <h2 className="text-2xl font-bold text-stone-100">{jobTitle}</h2>
        <span className="text-sm text-stone-400 md:text-right whitespace-nowrap">
          {startDate} – {endDate}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-orange-400 mb-3">{company}</h3>
      <p className="text-stone-300 leading-relaxed mb-4">{description}</p>
      {stack && (
        <div className="mb-4">
          <h4 className="experience-section-title">Tech stack</h4>
          <div className="flex flex-wrap gap-2">
            {stack.map((s: string, index: number) => {
              return (
                <span
                  key={index}
                  className="px-3 py-1 bg-stone-700/70 text-stone-200 rounded-full text-sm border border-stone-600/50"
                >
                  {s}
                </span>
              );
            })}
          </div>
        </div>
      )}
      {responsibilities && (
        <div>
          <h4 className="experience-section-title">Responsibilities</h4>
          <ul>
            {responsibilities.map((r: string, index: number) => {
              return (
                <li
                  key={index}
                  className="text-stone-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-orange-400"
                >
                  {r}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
