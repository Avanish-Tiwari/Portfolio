import { useState } from "react";
import { profile } from "../data/profile.js";
import { useToast } from "../context/ToastContext.jsx";
import {
  IconDownload,
  IconExternal,
  IconCopy,
  IconCheck,
  IconSparkles,
  IconBriefcase,
  IconGraduation,
  IconAward,
} from "../components/Icons.jsx";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("digital"); // 'digital' | 'pdf'
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      showToast(`Copied ${profile.email} to clipboard!`);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      showToast(`Email: ${profile.email}`);
    }
  };

  return (
    <div className="resume-page">
      <header className="page-header">
        <div className="hero-pill">
          <IconSparkles size={14} />
          <span>CURRICULUM VITAE</span>
        </div>
        <h1 className="page-title">
          Professional <span className="gradient-text">Experience & Skills</span>
        </h1>
        <p className="page-lede">
          {profile.role} with {profile.experience} building web products.
          View the responsive digital summary below or inspect and download the official PDF.
        </p>

        <div className="resume-actions-bar">
          <a
            className="btn btn-primary"
            href={profile.resume}
            download="Avanish_Tiwari_Resume.pdf"
          >
            <IconDownload size={18} />
            <span>Download Official PDF</span>
          </a>

          <a
            className="btn btn-secondary"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            <IconExternal size={18} />
            <span>Open in New Tab</span>
          </a>

          <button
            type="button"
            className="btn btn-ghost"
            onClick={copyEmail}
          >
            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
            <span>{copied ? "Email Copied!" : "Copy Email"}</span>
          </button>
        </div>
      </header>

      {/* Mode Switcher */}
      <div className="resume-view-switcher">
        <button
          type="button"
          className={`switch-tab ${activeTab === "digital" ? "active" : ""}`}
          onClick={() => setActiveTab("digital")}
        >
          <span className="tab-label-full">📱 Interactive Digital CV</span>
          <span className="tab-label-short">📱 Digital CV</span>
        </button>
        <button
          type="button"
          className={`switch-tab ${activeTab === "pdf" ? "active" : ""}`}
          onClick={() => setActiveTab("pdf")}
        >
          <span className="tab-label-full">📄 PDF Document Preview</span>
          <span className="tab-label-short">📄 PDF Preview</span>
        </button>
      </div>

      {activeTab === "digital" ? (
        <div className="digital-cv-card">
          {/* CV Header */}
          <div className="cv-top-meta">
            <div>
              <h2 className="cv-name">{profile.name}</h2>
              <p className="cv-title">{profile.role}</p>
            </div>
            <div className="cv-contact-items">
              <span>📍 {profile.location}</span>
              <span className="cv-email-item">✉️ {profile.email}</span>
              <span>💼 {profile.experience} Experience</span>
            </div>
          </div>

          <hr className="cv-divider" />

          {/* Professional Summary */}
          <section className="cv-section">
            <h3 className="cv-section-title">Professional Summary</h3>
            <p className="cv-summary-text">
              Senior Frontend & React Developer with 4+ years of hands-on experience
              architecting responsive, high-performance web applications using React.js,
              Next.js 15, and modern JavaScript. Proven track record of boosting code
              reusability by 35% through modular component systems, mentoring developers,
              and delivering production software for enterprise clients.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="cv-section">
            <h3 className="cv-section-title">Technical Expertise</h3>
            <div className="cv-skills-grid">
              {profile.skillCategories.map((group) => (
                <div key={group.category} className="cv-skill-item">
                  <span className="cv-skill-category">{group.category}:</span>
                  <span className="cv-skill-text">{group.skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="cv-section">
            <h3 className="cv-section-title">
              <IconBriefcase size={16} />
              <span>Experience</span>
            </h3>
            <div className="cv-work-list">
              {profile.workHistory.map((item, index) => (
                <div key={index} className="cv-work-entry">
                  <div className="cv-work-header">
                    <div>
                      <h4 className="cv-work-role">{item.role}</h4>
                      <span className="cv-work-company">{item.company}</span>
                    </div>
                    <span className="cv-work-period">{item.period}</span>
                  </div>
                  <ul className="cv-work-bullets">
                    {item.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Honors */}
          <section className="cv-section">
            <h3 className="cv-section-title">
              <IconGraduation size={16} />
              <span>Education & Honors</span>
            </h3>
            <div className="cv-meta-grid">
              <div className="cv-edu-col">
                <h4 className="cv-subheading">Education</h4>
                {profile.education.map((edu) => (
                  <div key={edu.degree} className="cv-edu-box">
                    <strong>{edu.degree}</strong>
                    <p>{edu.institution} ({edu.period})</p>
                  </div>
                ))}
              </div>

              <div className="cv-awards-col">
                <h4 className="cv-subheading">
                  <IconAward size={16} />
                  <span>Awards & Certifications</span>
                </h4>
                <ul className="cv-awards-list">
                  {profile.awards.map((a) => (
                    <li key={a.title}>
                      <strong>{a.title}</strong> — {a.issuer} ({a.year})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="pdf-frame-wrapper">
          <iframe
            className="resume-iframe"
            title={`${profile.name} Resume`}
            src={`${profile.resume}#view=FitH`}
          />
        </div>
      )}
    </div>
  );
}
