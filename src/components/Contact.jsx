import { useState } from "react";
import SectionHeading from "./SectionHeading";
import submitContactForm from "../services/contactService";

// Contact form with explicit loading and submission feedback.
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const update = (event) =>
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await submitContactForm(form);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-grid">
        <div className="contact-intro">
          <SectionHeading
            eyebrow="Have a project in mind?"
            title={
              <>
                Let's make
                <br />
                <span>something great.</span>
              </>
            }
          />
          <p>
            I'm always excited to hear about new ideas, ambitious products
            and interesting problems. Drop me a line and I'll get back to
            you soon.
          </p>
          <a
            className="contact-email"
            href="mailto:aadityapratyaypathak@gmail.com"
          >
            aadityapratyaypathak@gmail.com <span>↗</span>
          </a>
        </div>
        <form className="contact-form" onSubmit={submit}>
          {["name", "email", "subject"].map((field) => (
            <label key={field}>
              {field}
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={update}
                placeholder={
                  field === "name"
                    ? "Your name"
                    : field === "email"
                      ? "you@example.com"
                      : "What are we working on?"
                }
                required
              />
            </label>
          ))}
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Tell me a little about it..."
              rows="4"
              required
            />
          </label>
          <button
            className="button button-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"} <span>↗</span>
          </button>
          {status === "success" && (
            <p className="form-message success">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="form-message error">
              Something went wrong. Please email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
