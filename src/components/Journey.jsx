import SectionHeading from "./SectionHeading";
import education from "../data/education";
import certifications from "../data/certifications";

// Education timeline and professional training.
function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="The journey so far"
          title={
            <>
              Learning never
              <br />
              <span>goes out of style.</span>
            </>
          }
        />
        <div className="journey-grid">
          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-item" key={item.id}>
                <span className="timeline-dot" />
                <div>
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  {item.affiliation && <small>{item.affiliation}</small>}
                </div>
              </div>
            ))}
          </div>
          <div className="cert-list">
            <p className="mini-heading">Certifications &amp; training</p>
            {certifications.map((item) => (
              <div className="cert-item" key={item.id}>
                <span className="cert-icon">✓</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <small>{item.period || "Completed"}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey