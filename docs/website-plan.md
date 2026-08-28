# ARiiSE Website Plan

## Objective

Build a search-focused B2B marketing website for ARiiSE’s AIMS/LMS offering. It should help institutional buyers understand the platform, assess its relevance to their workflows, and request a demo or custom quote.

## Site Map

| Route | Visitor goal | Primary action | Status |
| --- | --- | --- | --- |
| `/` | Understand ARiiSE and AIMS quickly. | Request a Demo | Build first |
| `/aims` | Explore the AIMS platform and core modules. | Request an AIMS Demo | Build second |
| `/services` | Understand implementation, Moodle LMS, hosting, and support services. | Discuss Requirements | Build third |
| `/pricing` | Learn how engagement is priced without invented figures. | Request a Custom Quote | Build fourth |
| `/about` | Assess company context and operating focus. | Contact ARiiSE | Build fifth |
| `/contact` | Send a qualified institutional enquiry. | Send Enquiry | Build sixth |
| `/terms` | Read Terms of Service. | — | Draft after legal details arrive |
| `/privacy` | Read Privacy Policy. | — | Draft after legal details arrive |
| `/cookies` | Read Cookies Policy. | — | Draft after legal details arrive |

## Shared Foundations (before the first page)

- Brand lockup using the supplied ARiiSE logo and a self-hosted Helvetica Neue Bold treatment for the wordmark.
- Shared navigation, footer, buttons, responsive container, accessibility primitives, and form-field components.
- Global metadata defaults, canonical URL configuration, robots, sitemap, Open Graph treatment, and schema strategy.
- Nodemailer API route and quote/contact form state. SMTP values remain environment-only.
- A restrained motion system: meaningful transitions, visible default content, focus states, hover media-query gating, and reduced-motion alternatives.

## Page Plans

### 1. Home (`/`)

**Role:** Establish ARiiSE as an institutional LMS and management partner within the first viewport.

**Story:**

1. State the institutional problem and explain AIMS in plain language.
2. Show a concise, authentic platform snapshot built around the actual workflow areas.
3. Introduce the AIMS module groups.
4. Explain implementation and ongoing care.
5. Close with a demo/quote conversion section.

**SEO focus:** institutional management system, college LMS, Moodle LMS for colleges, education ERP Kerala/India. Final keyword targets must be checked against search intent before publishing.

**Proof limitation:** no fabricated client logos, metrics, or testimonials.

### 2. AIMS (`/aims`)

**Role:** Let serious buyers evaluate the platform’s operational fit.

**Story:**

1. Define AIMS and its Moodle foundation.
2. Present the six verified module groups with specific capabilities.
3. Explain the relationship between learning delivery and administration.
4. Cover deployment, support, and institutional branding without unapproved guarantees.
5. Capture a focused demo request.

**SEO focus:** AIMS, college ERP, admission management system, OBE/NAAC reporting, timetable and attendance management.

### 3. Services (`/services`)

**Role:** Explain the service layer around AIMS and Moodle.

**Story:** Moodle LMS deployment, institutional configuration, theme/branding integration, migration or implementation discussion, maintenance, and support.

**SEO focus:** Moodle implementation services, Moodle LMS development, LMS support for colleges.

### 4. Pricing (`/pricing`)

**Role:** Set correct buying expectations without false price precision.

**Story:** Explain that scope depends on institutional scale, modules, deployment, integrations, and support needs. Offer an indicative engagement process—not prices—and a structured quote request.

**SEO focus:** LMS pricing for colleges, education ERP cost, custom Moodle LMS quote.

### 5. About (`/about`)

**Role:** Provide credible company context.

**Story:** ARiiSE’s Calicut/Kozhikode base, B2B educational-institution focus, and philosophy of pairing educational technology with administrative workflows.

**SEO focus:** educational technology company Calicut, LMS company Kozhikode.

### 6. Contact (`/contact`)

**Role:** Convert an interested institution into a well-qualified lead.

**Form fields:** name, work email, phone, institution name, role, institution type, selected interest, approximate learner count (optional), and message.

**Behaviour:** server-side validation, inline field errors, pending state, accessible success/failure feedback, spam mitigation, and a Nodemailer email to `info@ariiseglobal.com`.

**Dependency:** SMTP configuration must be added before live use.

### 7–9. Legal Pages

**Role:** Publish compliant legal information when approved source text is available.

**Dependency:** legal name, jurisdiction, effective date, and policy copy from the user. Until then, do not publish invented legal language.

## Implementation Sequence

1. Confirm and set shared foundations.
2. Build and review `/` independently.
3. Build and review `/aims` independently.
4. Build and review `/services` and `/pricing`.
5. Build and review `/about` and `/contact`, including the email flow.
6. Add legal pages when legal content arrives.
7. Run final technical SEO, accessibility, and responsive review across all routes.

## Open Decisions

- SMTP host, port, account username, and app password.
- Production domain/canonical URL.
- Legal details and policy copy.
- Approved customer proof, if any.
- Whether the referenced Helvetica Neue repository’s webfont files are available for self-hosting.
