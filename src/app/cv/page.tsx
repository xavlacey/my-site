import Link from "next/link";

export default function CV() {
  return (
    <div>
      <nav>
        <Link href="/">← back</Link>
      </nav>

      <div>
        <h1>
          <span>CV</span>
        </h1>

        <div>
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
    <div>
      <div>
        <h2>{jobTitle}</h2>
        <span>
          {startDate} – {endDate}
        </span>
      </div>
      <h3>{company}</h3>
      <p>{description}</p>
      {stack && (
        <div>
          <h4>Tech Stack:</h4>
          <ul>
            {stack.map((s: string) => {
              return <p>{s}</p>;
            })}
            {/* <span>Node.js</span>
          <span>JavaScript</span> */}
          </ul>
        </div>
      )}
      {responsibilities && (
        <div>
          <h4>Responsibilities:</h4>
          <ul>
            {responsibilities.map((r: string) => {
              return <li>{r}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
