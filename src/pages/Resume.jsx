import { profile } from "../data/profile.js";

export default function Resume() {
  return (
    <section className="page">
      <p className="eyebrow">Resume</p>
      <h1>Experience on one page.</h1>
      <p className="lede">
        {profile.role} with {profile.experience} building web interfaces.
      </p>
      <p>
        <a className="button" href={profile.resume} download>
          Download CV
        </a>
      </p>
      <iframe
        className="resume-frame"
        title="Avanish Tiwari resume"
        src={profile.resume}
      />
    </section>
  );
}
