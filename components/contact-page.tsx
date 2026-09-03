"use client";

import {
  ArrowUpRight,
  BuildingIcon,
  CheckMark,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    role: "",
    interest: "AIMS Platform & Core Modules",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. You can also reach us directly at info@ariiseglobal.com or +91 8147722711."
      );
    }
  };

  return (
    <div className="contact-page">
      <SectionReveal className="page-section section-wrap" id="contact-intro">
        <div className="section-intro">
          <h1>Get in Touch</h1>
          <div className="section-intro-action">
            <p>
              Tell us about your institution’s academic workflows, discuss Moodle LMS
              implementation, or request a custom AIMS walkthrough.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          {/* First Column: Institutional Enquiry Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h2>Send an enquiry</h2>
                <p>
                  Share your requirements and our academic team will follow up within one
                  business day.
                </p>
              </div>

              {status === "success" ? (
                <div className="form-success-state" role="alert">
                  <div className="form-success-icon">
                    <CheckMark />
                  </div>
                  <h3>Enquiry received</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. We have logged your request for{" "}
                    <strong>{formData.institution}</strong>. Our team will review your requirements
                    and reach out at <strong>{formData.email}</strong> or{" "}
                    <strong>{formData.phone}</strong> shortly.
                  </p>
                  <ArrowFillButton
                    as="button"
                    type="button"
                    btnText="Send another message"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        institution: "",
                        role: "",
                        interest: "AIMS Platform & Core Modules",
                        message: "",
                      });
                    }}
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {status === "error" && (
                    <div className="form-error-banner" role="alert">
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="contact-name">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Dr. K. Raman"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-email">
                        Institutional email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@college.edu.in"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone">
                        Phone number <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-institution">
                        Institution name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-institution"
                        name="institution"
                        type="text"
                        required
                        placeholder="e.g. Farook College"
                        value={formData.institution}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-role">Your role</label>
                      <select
                        id="contact-role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select your role</option>
                        <option value="Principal / Director">Principal / Director</option>
                        <option value="Dean / Department Head">Dean / Department Head</option>
                        <option value="IT Administrator">IT Administrator</option>
                        <option value="Academic Coordinator">Academic Coordinator</option>
                        <option value="Teacher / Faculty">Teacher / Faculty</option>
                        <option value="Management / Trustee">Management / Trustee</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-interest">Area of interest</label>
                    <select
                      id="contact-interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="AIMS Platform & Core Modules">
                        AIMS Platform & Core Modules (Admissions, OBE, Marks, Attendance)
                      </option>
                      <option value="Moodle LMS Implementation">
                        Moodle LMS Implementation & Custom Setup
                      </option>
                      <option value="Existing LMS Migration & Upgrade">
                        Existing LMS Migration, Upgrade & Support
                      </option>
                      <option value="Request a Custom Institutional Quote">
                        Request a Custom Institutional Quote
                      </option>
                      <option value="General Technical / Business Enquiry">
                        General Technical / Business Enquiry
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">
                      Message / specific requirements
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your campus scale, learner count, or specific workflows you want to digitise..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-actions">
                    <ArrowFillButton
                      as="button"
                      type="submit"
                      disabled={status === "loading"}
                      btnText={status === "loading" ? "Submitting enquiry..." : "Send enquiry"}
                    />
                    <p className="form-footnote">
                      We respect your privacy. No spam. Direct response from our Kozhikode team.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Second Column: Address Details & Map */}
          <div className="contact-info-col">
            <div className="contact-card">
              <div className="contact-card-item">
                <div className="contact-item-top">
                  <span className="contact-item-icon">
                    <BuildingIcon />
                  </span>
                  <span className="section-label">Office Address</span>
                </div>
                <h3>Varikoly Tower</h3>
                <p>UK Sankunni Rd, Kozhikode, Kerala 673001</p>
                <a
                  className="contact-inline-link"
                  href="https://maps.google.com/?q=ARiiSE+Varikoly+Tower+UK+Sankunni+Rd+Kozhikode+Kerala+673001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps <ArrowUpRight />
                </a>
              </div>

              <div className="contact-divider" />

              <div className="contact-card-item">
                <div className="contact-item-top">
                  <span className="contact-item-icon">
                    <PhoneIcon />
                  </span>
                  <span className="section-label">Direct Phone</span>
                </div>
                <p className="contact-highlight-value">
                  <a href="tel:+918147722711">+91 8147722711</a>
                </p>
                <p className="contact-subtext">Mon – Fri, 9:00 AM to 6:00 PM IST</p>
              </div>

              <div className="contact-divider" />

              <div className="contact-card-item">
                <div className="contact-item-top">
                  <span className="contact-item-icon">
                    <MailIcon />
                  </span>
                  <span className="section-label">Email Enquiry</span>
                </div>
                <p className="contact-highlight-value">
                  <a href="mailto:info@ariiseglobal.com">info@ariiseglobal.com</a>
                </p>
                <p className="contact-subtext">For institutional demos, proposals & support</p>
              </div>

              <div className="contact-divider" />

              <div className="contact-card-item">
                <div className="contact-item-top">
                  <span className="contact-item-icon">
                    <LinkedinIcon />
                  </span>
                  <span className="section-label">LinkedIn</span>
                </div>
                <p className="contact-highlight-value">
                  <a
                    href="https://www.linkedin.com/company/ariise-global"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ARiiSE Global <ArrowUpRight />
                  </a>
                </p>
                <p className="contact-subtext">Follow us for product updates & institutional news</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="contact-map-wrap">
              <div className="contact-map-header">
                <div className="contact-item-top">
                  <span className="contact-item-icon">
                    <MapPinIcon />
                  </span>
                  <span className="section-label">Location Map</span>
                </div>
                <a
                  className="contact-map-ext-link"
                  href="https://maps.google.com/?q=ARiiSE+Varikoly+Tower+UK+Sankunni+Rd+Kozhikode+Kerala+673001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Maps <ArrowUpRight />
                </a>
              </div>
              <div className="contact-map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.9979391353722!2d75.7819883!3d11.261561200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65900786dee45%3A0xd77d5a36329dae08!2sARiiSE!5e0!3m2!1sen!2sin!4v1788420385262!5m2!1sen!2sin"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="ARiiSE Office Location - Varikoly Tower, UK Sankunni Rd, Kozhikode"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
