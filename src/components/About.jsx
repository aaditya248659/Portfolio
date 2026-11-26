import SectionHeading from "./SectionHeading";
import skills from "../data/skills";

// About content and the categorized skills overview.
function About() {
  return (
    <>
      <section className="section-wrap about-section" id="about">
        <SectionHeading
          eyebrow="A little about me"
          title={
            <>
              Curious by nature.
              <br />
              <span>Builder by choice.</span>
            </>
          }
        />
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Computer Science graduate and full-stack developer with a
              passion for the web and the people who use it.
            </p>
            <p>
              My work sits at the intersection of robust engineering and
              considered design. I enjoy owning a problem end-to-end—from
              shaping the idea and modelling the data to shipping a polished
              interface.
            </p>
            <a
              className="text-link"
              href="/resume/Aaditya_Pathak.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View my resume
              <span>↗</span>
            </a>
          </div>
          <div className="about-stats">
            <div>
              <strong>5+</strong>
              <span>
                Full-stack
                <br />
                projects
              </span>
            </div>
            <div>
              <strong>10+</strong>
              <span>
                Technologies
                <br />
                explored
              </span>
            </div>
            <div>
              <strong>∞</strong>
              <span>
                Curiosity
                <br />
                to learn
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="dark-section" id="skills">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="What I work with"
            title={
              <>
                Tools for turning
                <br />
                <span>ideas into reality.</span>
              </>
            }
            copy="A practical toolkit built through projects, internships and a constant desire to understand how things work."
          />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <div className="skill-group" key={group.category}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.category}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
