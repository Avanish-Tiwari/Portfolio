import { profile } from "../data/profile.js";

export default function About() {
  return (
    <section className="page">
      <p className="eyebrow">About</p>
      <h1>Building interfaces with care.</h1>
      <div className="split">
        <div className="prose">
          <p>
            I am {profile.name}, a React developer from {profile.location}. I
            have spent {profile.experience} crafting seamless user interfaces
            and working through front-end problems.
          </p>
          <p>
            I work mainly with React, JavaScript, Next.js, Material UI, and
            Tailwind CSS. I am also interested in market research and
            user-centered product design, along with web technologies in
            general.
          </p>
          <p>
            Outside of client work I explore new tools, contribute to open
            source, and share what I learn. Day to day I also draw on SEO and
            technical support experience.
          </p>
          <p className="quote">
            “Success is the sum of small efforts, repeated day in and day out.”
          </p>
        </div>
        <aside className="side-panel">
          <h2>Skills</h2>
          <ul className="pills">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <h2>Tools</h2>
          <ul className="pills">
            {profile.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <h2>Also</h2>
          <ul className="plain-list">
            {profile.interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
