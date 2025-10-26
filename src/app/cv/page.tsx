import Link from "next/link";

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <nav className="p-6">
        <Link
          href="/"
          className="text-light-orange hover:text-orange-400 transition-colors duration-300 font-source-code-pro"
        >
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-6xl font-source-code-pro mb-12 text-center">
          <span className="text-light-orange">CV</span>
        </h1>

        <div className="space-y-12">
          {/* Company 1 */}
          <div className="bg-gray-700 rounded-lg p-8 transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-source-code-pro text-light-orange">
                Senior Software Engineer, Contract
              </h2>
              <span className="text-gray-300 font-montserrat">
                Jan 2025 - Present
              </span>
            </div>
            <h3 className="text-xl font-montserrat mb-4 text-gray-200">
              Material Index
            </h3>
            <p className="font-montserrat text-gray-200 mb-2">
              Full-stack engineer at a circular economy company, focused on
              reducing construction waste.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-source-code-pro text-light-orange mb-2">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Node.js
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  TypeScript
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  React
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  PostgreSQL
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  AWS
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  MongoDB
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  SST
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-source-code-pro text-light-orange mb-2">
                Responsibilities:
              </h4>
              <ul className="list-disc list-inside space-y-1 font-montserrat text-gray-200">
                <li>
                  Delivered a brand new marketplace product from conception to
                  launch as part of a small, cross-functional team.
                </li>
                <li>
                  Maintained and enhanced a bespoke audit application, ensuring
                  reliability and performance for existing users
                </li>
                <li>
                  Worked autonomously in a startup environment, balancing
                  multiple product streams and adapting quickly to evolving
                  business needs.
                </li>
              </ul>
            </div>
          </div>

          {/* Company 2 */}
          <div className="bg-gray-700 rounded-lg p-8 transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-source-code-pro text-light-orange">
                Backend Software Engineer
              </h2>
              <span className="text-gray-300 font-montserrat">
                August 2022 - December 2024
              </span>
            </div>
            <h3 className="text-xl font-montserrat mb-4 text-gray-200">
              Sylvera
            </h3>
            <p className="font-montserrat text-gray-200 mb-2">
              Backend engineer at a climate tech company, working across
              platform and product teams.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-source-code-pro text-light-orange mb-2">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Node.js
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  TypeScript
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  GraphQL
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  PostgreSQL
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  AWS
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Docker
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Omni BI
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-source-code-pro text-light-orange mb-2">
                Responsibilities:
              </h4>
              <ul className="list-disc list-inside space-y-1 font-montserrat text-gray-200">
                <li>
                  Designed, developed, and managed RESTful and GraphQL APIs in
                  TypeScript delivering user-focused solutions for both internal
                  and external stakeholders.
                </li>
                <li>
                  Tech lead for a new product that successfully delivered
                  on-time, connected our clients with 200 developers and
                  suppliers, and significantly enhanced client engagement.
                </li>
                <li>
                  Initiated weekly communication between teams to align system
                  architecture and technical solutions, and achieve project
                  goals.
                </li>
                <li>
                  Took initiative to build a business intelligence dashboard
                  used by multiple teams to resolve internal bottlenecks and
                  streamline product processes.
                </li>
                <li>
                  Spearheaded and facilitated key discussions on engineering
                  standards, including leading a workshop that promoted best
                  practices in testing, database design and code structure;
                  fostered a culture of technical excellence.
                </li>
                <li>
                  Led many technical interviews; redesigned the coding challenge
                  and encouraged a fairer interview process.
                </li>
              </ul>
            </div>
          </div>

          {/* Company 3 */}
          <div className="bg-gray-700 rounded-lg p-8 transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-source-code-pro text-light-orange">
                Full-Stack Software Engineer
              </h2>
              <span className="text-gray-300 font-montserrat">
                August 2017 - July 2022
              </span>
            </div>
            <h3 className="text-xl font-montserrat mb-4 text-gray-200">
              LoyaltyLion
            </h3>
            <p className="font-montserrat text-gray-200 mb-2">
              Full-stack engineer at e-commerce startup. Joined as the seventh
              employee, contributing significantly to the company’s growth
              through multiple product and team development phases.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-source-code-pro text-light-orange mb-2">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Node.js
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  TypeScript
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  PostgreSQL
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  React
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Redux
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Ruby
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Ruby on Rails
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Sidekiq
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  AWS
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-source-code-pro text-light-orange mb-2">
                Responsibilities:
              </h4>

              <ul className="list-disc list-inside space-y-1 font-montserrat text-gray-200">
                <li>
                  Delivered features end-to-end across public RESTful
                  Node.js/React and Ruby on Rails applications, enhancing
                  platform capabilities and user experience.
                </li>
                <li>
                  Proactively optimised team workflows and documentation,
                  streamlining development processes and improving
                  cross-functional collaboration.
                </li>
                <li>
                  Automated documentation quality checks by integrating a doc
                  linting tool into the build pipeline enhancing client-facing
                  API documentation quality.
                </li>
              </ul>
            </div>
          </div>

          {/* Company 4 */}
          <div className="bg-gray-700 rounded-lg p-8 transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-source-code-pro text-light-orange">
                Software Developer
              </h2>
              <span className="text-gray-300 font-montserrat">
                Sep 2016 - July 2017
              </span>
            </div>
            <h3 className="text-xl font-montserrat mb-4 text-gray-200">
              The Education Hub Group
            </h3>
            <p className="font-montserrat text-gray-200 mb-2">
              Node.js backend developer responsible for building and maintaining
              the API for our bespoke platform for schools.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-source-code-pro text-light-orange mb-2">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  Node.js
                </span>
                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-montserrat">
                  JavaScript
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-source-code-pro text-light-orange mb-2">
                Responsibilities:
              </h4>
              <ul className="list-disc list-inside space-y-1 font-montserrat text-gray-200">
                <li>
                  Second employee and developed the idea into a
                  fully-functioning web app.
                </li>
              </ul>
            </div>
          </div>

          {/* Company 5 */}
          <div className="bg-gray-700 rounded-lg p-8 transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-source-code-pro text-light-orange">
                Graduate Electrical Building Services Engineer
              </h2>
              <span className="text-gray-300 font-montserrat">
                June 2015 - March 2016
              </span>
            </div>
            <h3 className="text-xl font-montserrat mb-4 text-gray-200">
              Mott MacDonald
            </h3>
            <p className="font-montserrat text-gray-200 mb-2">
              Designed electrical systems for the new Canary Wharf Crossrail
              station.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
