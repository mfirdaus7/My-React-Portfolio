import { useState } from "react";
import {
  profile,
  heroTech,
  stats,
  summary,
  skillGroups,
  experience,
  education,
  certGroups,
} from "./data.js";

const links = [
  ["summary", "Summary"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["certifications", "Certifications"],
  ["contact", "Contact"],
];

const photo = `${import.meta.env.BASE_URL}photo.jpg`;

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-5 border-top">
      <div className="container">
        <h2 className="section-title h1 mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Chip({ children, learning }) {
  return (
    <span
      className={
        "badge rounded-pill fw-medium px-3 py-2 " +
        (learning
          ? "bg-warning-subtle text-warning-emphasis border border-warning-subtle"
          : "bg-primary-subtle text-primary-emphasis")
      }
    >
      {children}
      {learning && <span className="ms-1 small">(learning)</span>}
    </span>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary border-bottom">
        <div className="container">
          <a className="navbar-brand brand" href="#top" onClick={close}>
            {profile.name}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={"collapse navbar-collapse" + (open ? " show" : "")}>
            <ul className="navbar-nav ms-auto">
              {links.map(([id, label]) => (
                <li className="nav-item" key={id}>
                  <a className="nav-link" href={`#${id}`} onClick={close}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <header id="top" className="container py-5 my-lg-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 order-2 order-lg-1">
            <p className="text-secondary fw-medium mb-2">{profile.title}</p>
            <h1 className="display-3 fw-bold mb-4">{profile.tagline}</h1>
            <p className="lead text-secondary mb-4">
              Hi, I'm {profile.name}. I build and maintain enterprise web applications and automate their testing.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-4" aria-label="Main technologies">
              {heroTech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <div className="d-flex flex-wrap gap-2">
              <a className="btn btn-primary btn-lg" href="#experience">View experience</a>
              <a className="btn btn-outline-dark btn-lg" href={`mailto:${profile.email}`}>
                <i className="bi bi-envelope me-2" />Email me
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-end">
            <div className="photo-frame d-inline-block">
              <img src={photo} alt={`Portrait of ${profile.name}`} width="340" height="340" className="img-fluid rounded-4" />
            </div>
          </div>
        </div>

        <div className="row g-3 mt-4">
          {stats.map((s) => (
            <div className="col-12 col-sm-4" key={s.label}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="stat-value">{s.value}</div>
                  <div className="text-secondary">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>

      <main>
        <Section id="summary" title="Profile summary">
          <p className="lead mw-prose mb-0">{summary}</p>
        </Section>

        <Section id="skills" title="Key skills">
          <div className="row g-4">
            {skillGroups.map((g) => (
              <div className="col-md-6 col-xl-4" key={g.title}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h3 className="h5 mb-3">
                      <i className={`bi ${g.icon} me-2 text-primary`} />
                      {g.title}
                    </h3>
                    {g.plain ? (
                      <ul className="mb-0 ps-3">
                        {g.items.map((i) => <li key={i}>{i}</li>)}
                      </ul>
                    ) : (
                      <div className="d-flex flex-wrap gap-2">
                        {g.items.map((i) => <Chip key={i}>{i}</Chip>)}
                        {(g.learning || []).map((i) => <Chip key={i} learning>{i}</Chip>)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Work experience">
          <div className="timeline">
            {experience.map((job) => (
              <article className="row g-3 timeline-item" key={job.role + job.period}>
                <div className="col-md-3">
                  <p className="fw-semibold text-secondary mb-0">{job.period}</p>
                </div>
                <div className="col-md-9">
                  <h3 className="h4 mb-0">{job.role}</h3>
                  <p className="text-primary fw-medium mb-2">{job.company}</p>
                  <ul className="ps-3">
                    {job.points.map((p) => <li key={p} className="mb-1">{p}</li>)}
                  </ul>
                  <div className="d-flex flex-wrap gap-2">
                    {job.tags.map((t) => <Chip key={t}>{t}</Chip>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="row g-4">
            {education.map((e) => (
              <div className="col-md-6" key={e.title}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <p className="text-secondary mb-1">{e.period}</p>
                    <h3 className="h5">{e.title}</h3>
                    <p className="mb-0">{e.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="row g-4">
            {certGroups.map((g) => (
              <div className="col-lg-6" key={g.title}>
                <h3 className="h5 mb-2">{g.title}</h3>
                <ul className="list-group list-group-flush">
                  {g.items.map((c) => (
                    <li className="list-group-item bg-transparent px-0 d-flex justify-content-between gap-3 flex-wrap" key={c.name}>
                      <div>
                        <strong>{c.name}</strong>
                        {c.issuer && <div className="text-secondary small">{c.issuer}</div>}
                        {c.id && <div className="text-secondary small font-monospace">Credential ID: {c.id}</div>}
                      </div>
                      {c.status === "in-progress" ? (
                        <span className="badge text-bg-warning align-self-start">In progress</span>
                      ) : (
                        c.date && <span className="text-secondary small">{c.date}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="lead mb-4">Open to front-end and software test automation roles. Email is the quickest way to reach me.</p>
          <div className="d-flex flex-wrap gap-2 mb-4">
            <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`}>
              <i className="bi bi-envelope me-2" />{profile.email}
            </a>
            <a className="btn btn-outline-dark btn-lg" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
              <i className="bi bi-telephone me-2" />{profile.phone}
            </a>
            {profile.linkedin && (
              <a className="btn btn-outline-dark btn-lg" href={profile.linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin me-2" />LinkedIn
              </a>
            )}
            {profile.github && (
              <a className="btn btn-outline-dark btn-lg" href={profile.github} target="_blank" rel="noreferrer">
                <i className="bi bi-github me-2" />GitHub
              </a>
            )}
            {profile.resumeUrl && (
              <a className="btn btn-outline-dark btn-lg" href={profile.resumeUrl} download>
                <i className="bi bi-download me-2" />Resume
              </a>
            )}
          </div>
          <p className="text-secondary mb-0"><i className="bi bi-geo-alt me-2" />{profile.location}</p>
        </Section>
      </main>

      <footer className="py-4 text-center text-secondary border-top">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
