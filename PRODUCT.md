# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Educational institutions, especially colleges and academies, evaluating a campus learning and management platform.
- Institutional decision-makers and operational teams who need to manage admissions, academic workflows, learning delivery, and reporting in one system.

## Product Purpose

ARiiSE is an edtech company that provides B2B LMS and institutional-management solutions for educational institutions. Its primary product, AIMS (ARiiSE Institutional Management System), helps institutions run admissions, timetables, marks, attendance, analytics, and related academic workflows.

The website’s job is to make the platform understandable and credible, then convert qualified institutional visitors into demo and quote requests.

## Positioning

AIMS combines Moodle-based digital learning with institution-facing operational workflows, including admissions, course allocation, internal marks, outcome-based education reporting, timetables, attendance, and notifications.

## Operating Context

- Prospective institutions evaluate the platform before arranging a demo or requesting a custom quote.
- A quote is tailored to the institution; no public plan prices have been approved.
- Enquiries are sent to `info@ariiseglobal.com` through a Nodemailer-backed contact flow once SMTP credentials are configured.

## Capabilities and Constraints

- Core focus: B2B LMS and AIMS for colleges and academies.
- Confirmed AIMS areas: admission management, course allocation, internal marks, OBE/NAAC reporting, AISHE/statistical reporting, timetables, attendance, and WhatsApp notifications.
- The public website will include company, AIMS/services, pricing/quote, contact, Terms, Privacy, and Cookies pages.
- Pricing is quote-led; do not invent public price points, customer counts, testimonials, certifications, or performance claims.
- Legal entity details, governing jurisdiction, and policy effective dates are pending from the user. Legal pages must remain clearly marked drafts until supplied.
- Nodemailer must use environment variables; SMTP credentials are not yet present in the repository.

## Brand Commitments

- The brand name is written `ARiiSE`.
- The wordmark/brand lockup uses Helvetica Neue Bold, sourced from the user-provided Helvetica Neue repository when the font files are added.
- The supplied logo asset is `public/arrise.png`.
- The new website may reuse factual content from ariiseglobal.com, but must not copy that site’s visual design.

## Evidence on Hand

- `public/arrise.png` — supplied logo asset.
- Existing Ariise website content — source for reviewed factual AIMS/module, contact, and company content; see `docs/content-inventory.md`.
- No approved testimonials, client logos, case studies, pricing values, legal details, SMTP credentials, or social links are on hand. These must not be fabricated.

## Product Principles

1. Lead with institutional outcomes and tangible workflows, not generic edtech language.
2. Make the AIMS platform legible to both academic and administrative decision-makers.
3. Keep commercial claims evidence-led; use a quote request where pricing is not approved.
4. Treat accessibility, speed, and SEO as core product requirements.
5. Make an enquiry feel like the beginning of an institutional conversation, not a consumer checkout.

## Accessibility & Inclusion

- The marketing site will target WCAG-conscious, keyboard-accessible, responsive interaction patterns.
- Motion must respect `prefers-reduced-motion`; forms must be semantic, labelled, and usable without a pointer.
