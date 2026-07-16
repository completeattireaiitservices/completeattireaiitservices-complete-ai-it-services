import React from "react";
import { Shield } from "lucide-react";
import LegalPageShell, {
  legalSectionHeading as sectionHeading,
  legalBody as body,
  legalList as list,
  legalSubHeading as subHeading,
} from "../../components/LegalPageShell";

const EFFECTIVE_DATE = "July 16, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      metaTitle="Privacy Policy | Complete AI IT Services"
      metaDescription="Privacy Policy for Complete AI IT Services — website data, client processing, AI/RAG systems, third-party providers, California privacy rights, and security."
      breadcrumbCurrent="Privacy Policy"
      title="Privacy Policy"
      badge="Data & Privacy"
      accent="indigo"
      activeLegal="privacy"
      icon={<Shield className="h-6 w-6" strokeWidth={2} />}
      subtitle={
        <>
          Complete AI IT Services · completeaiitservices.ai · Pleasanton, California ·
          Effective {EFFECTIVE_DATE}
        </>
      }
      relatedHref="/legal/terms-of-service"
      relatedLabel="Terms of Service"
    >
      <h2 className={sectionHeading}>1. Overview</h2>
      <p className={body}>
        Complete AI IT Services (&quot;Provider,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;), operating at{" "}
        <strong>completeaiitservices.ai</strong> and based in Pleasanton, California,
        provides AI integration architecture, private Retrieval-Augmented Generation (RAG),
        n8n orchestration, and intelligent automation services.
      </p>
      <p className={body}>
        This Privacy Policy explains how we collect, use, disclose, retain, and protect
        personal information when you visit our website, contact us, subscribe to updates,
        book a call, or engage us as a client. By using our website or services, you agree
        to this Policy. If you do not agree, please do not use our website or services.
      </p>

      <h2 className={sectionHeading}>2. Roles: Website Visitors vs. Client Data</h2>
      <p className={body}>
        <strong>Website / marketing visitors:</strong> For information you submit through
        our site (contact forms, newsletter signup, Calendly bookings), we generally act as
        a &quot;business&quot; / data controller.
      </p>
      <p className={body}>
        <strong>Client engagement data:</strong> When we design, host, or operate
        automations, knowledge bases, or AI systems for your business, we typically process
        Client Content (documents, CRM records, emails, receipts, operational data) as a{" "}
        <strong>service provider / processor</strong> on your instructions. You remain the
        controller of that Client Content and are responsible for lawful collection and
        authorization to process it.
      </p>

      <h2 className={sectionHeading}>3. Information We Collect</h2>
      <h3 className={subHeading}>3.1 Information you provide</h3>
      <ul className={list}>
        <li>
          Contact and identity details (name, email, phone, company, role).
        </li>
        <li>
          Inquiry content, project descriptions, preferred services, and meeting details.
        </li>
        <li>
          Newsletter or subscription email addresses.
        </li>
        <li>
          Billing and contracting details when you become a client (invoices, payment
          references—card data is handled by payment processors if used; we do not store
          full payment card numbers).
        </li>
      </ul>
      <h3 className={subHeading}>3.2 Client Content (service delivery)</h3>
      <p className={body}>
        Depending on the engagement, Client Content may include PDFs and knowledge-base
        documents, Airtable or CRM records, emails, receipts/invoices, screen recordings
        for process audits, operational logs, and similar business materials you authorize
        us to process for AI automation and RAG systems.
      </p>
      <h3 className={subHeading}>3.3 Automatically collected information</h3>
      <ul className={list}>
        <li>
          Device and browser information, IP address, approximate location derived from IP,
          pages viewed, referring URLs, and timestamps.
        </li>
        <li>
          Cookies, local storage, and similar technologies used for site functionality,
          security, preferences, and (if enabled) analytics.
        </li>
      </ul>
      <p className={body}>
        We do not knowingly collect personal information from children under 16. If you
        believe we have received such information, contact us and we will delete it.
      </p>

      <h2 className={sectionHeading}>4. How We Use Information</h2>
      <ul className={list}>
        <li>Respond to inquiries, schedule consultations, and provide customer support.</li>
        <li>
          Deliver contracted AI architecture, n8n workflows, RAG assistants, audits, and
          managed retainers (including bi-weekly logic audits).
        </li>
        <li>
          Operate, secure, troubleshoot, and improve our website and service delivery.
        </li>
        <li>
          Send service-related communications; send marketing only where permitted (you may
          unsubscribe at any time).
        </li>
        <li>
          Comply with legal obligations, enforce agreements, and protect rights, safety, and
          security.
        </li>
      </ul>

      <h2 className={sectionHeading}>5. AI Systems, RAG &amp; Model Training</h2>
      <p className={body}>
        Our solutions may process Client Content through orchestration platforms (e.g.,
        n8n), large language model APIs (e.g., OpenAI), and vector databases (e.g.,
        Pinecone) to retrieve grounded answers and automate workflows.
      </p>
      <ul className={list}>
        <li>
          <strong>No training of public foundation models on your Client Content by us:</strong>{" "}
          We design engagements to use API configurations and provider terms that do not
          permit your proprietary Client Content to be used to train public foundation
          models, where such options are available under the provider&apos;s then-current
          terms.
        </li>
        <li>
          <strong>Platform accounts &amp; Billing Options:</strong> Under{" "}
          <strong>Option A (Direct Pass-Through)</strong>, Clients maintain their own
          accounts for third-party AI and data platforms (e.g., OpenAI, Pinecone) so primary
          data residency, billing, and access controls remain under Client control. Under{" "}
          <strong>Option B (Flat-Rate Retainer)</strong>, Provider may operate hosting,
          vector databases, and API usage on Client&apos;s behalf within the all-inclusive
          retainer and fair-use limits stated in the SOW; Client Content is still processed
          only to deliver the contracted services and is not used by us to train public
          foundation models.
        </li>
        <li>
          <strong>QA practices:</strong> We apply QA validation and bi-weekly logic audits
          (execution logs, retrieval accuracy, prompt tuning) to reduce hallucinations and
          drift—these practices improve reliability but do not eliminate all AI error risk.
        </li>
      </ul>
      <p className={body}>
        Provider terms for OpenAI, Pinecone, and similar vendors may change. We will
        reasonably align configurations with our privacy commitments, but Clients should
        also review those vendors&apos; privacy policies and data-processing terms.
      </p>

      <h2 className={sectionHeading}>6. Cookies &amp; Similar Technologies</h2>
      <p className={body}>
        We may use essential cookies required for site operation and security, and optional
        cookies or analytics tools to understand traffic and improve the experience. You can
        control cookies through your browser settings. Disabling certain cookies may limit
        site functionality.
      </p>

      <h2 className={sectionHeading}>7. How We Share Information</h2>
      <p className={body}>We do not sell personal information. We may share information with:</p>
      <ul className={list}>
        <li>
          <strong>Service providers / subprocessors</strong> that help us operate (hosting,
          email, scheduling such as Calendly, analytics, payment processors, AI/API
          providers you authorize for your engagement).
        </li>
        <li>
          <strong>Professional advisors</strong> (legal, accounting) under confidentiality
          obligations when reasonably necessary.
        </li>
        <li>
          <strong>Legal / safety disclosures</strong> when required by law, regulation,
          legal process, or to protect rights, property, or safety.
        </li>
        <li>
          <strong>Business transfers</strong> in connection with a merger, acquisition, or
          asset sale, subject to appropriate confidentiality protections.
        </li>
      </ul>

      <h2 className={sectionHeading}>8. Data Retention</h2>
      <p className={body}>
        We retain personal information only as long as needed for the purposes described in
        this Policy, to fulfill contracts, resolve disputes, enforce agreements, and meet
        legal, tax, and accounting requirements. Client Content retention periods are set
        by the engagement agreement and Client instructions; upon termination we will delete
        or return Client Content as agreed, except where retention is required by law or for
        legitimate backup/security archives for a limited period.
      </p>

      <h2 className={sectionHeading}>9. Security</h2>
      <p className={body}>
        We implement administrative, technical, and organizational measures appropriate to
        the nature of AI automation services, including access controls, secure
        orchestration practices, QA validation before go-live, and ongoing logic audits.
        No method of transmission or storage is 100% secure; we cannot guarantee absolute
        security.
      </p>

      <h2 className={sectionHeading}>10. International Transfers</h2>
      <p className={body}>
        We are based in the United States. If you access our website or services from
        outside the U.S., your information may be processed in the United States or other
        locations where we or our providers operate. Where required, we use appropriate
        safeguards for cross-border transfers.
      </p>

      <h2 className={sectionHeading}>11. Your Privacy Rights</h2>
      <h3 className={subHeading}>11.1 California (CCPA/CPRA)</h3>
      <p className={body}>
        If you are a California resident, you may have rights to know/access, delete,
        correct, and opt out of certain sharing of personal information, and to
        non-discrimination for exercising those rights. We do not sell personal information
        and do not share it for cross-context behavioral advertising as those terms are
        commonly defined. To exercise rights, email{" "}
        <strong>info@completeaiitservices.ai</strong> with the subject line
        &quot;California Privacy Request.&quot; We will verify your request as required by
        law.
      </p>
      <h3 className={subHeading}>11.2 Other jurisdictions</h3>
      <p className={body}>
        Depending on your location (including the EEA/UK), you may have rights to access,
        rectify, erase, restrict, or object to processing, and to data portability. Where
        we process Client Content as a processor, please contact your organization (the
        controller) first; we will assist Clients in responding to valid data-subject
        requests related to Client Content.
      </p>

      <h2 className={sectionHeading}>12. Client Responsibilities</h2>
      <p className={body}>Clients are responsible for:</p>
      <ul className={list}>
        <li>
          Ensuring they have lawful rights to provide Client Content (including PDFs,
          CRM/Airtable records, emails, receipts, and screen recordings) for processing.
        </li>
        <li>
          Under Option A, configuring and securing their third-party accounts (OpenAI,
          Pinecone, CRMs, accounting tools, etc.) and complying with those vendors&apos;
          terms; under Option B, reviewing SOW fair-use limits and promptly notifying us of
          access or data-handling concerns.
        </li>
        <li>
          Not submitting special-category or highly regulated data unless expressly agreed
          in writing and supported by appropriate controls.
        </li>
        <li>
          Keeping source knowledge bases accurate and current to reduce incorrect AI
          outputs.
        </li>
      </ul>

      <h2 className={sectionHeading}>13. Third-Party Links &amp; Services</h2>
      <p className={body}>
        Our website may link to third-party sites or embed third-party tools (e.g.,
        scheduling). Their privacy practices are governed by their own policies. We are not
        responsible for third-party practices outside our control.
      </p>

      <h2 className={sectionHeading}>14. Changes to This Policy</h2>
      <p className={body}>
        We may update this Privacy Policy from time to time. The &quot;Effective&quot; date
        above will be revised when changes are posted. Continued use of the website or
        services after updates constitutes acceptance of the revised Policy, except where
        additional consent is required by law.
      </p>

      <h2 className={sectionHeading}>15. Contact Us</h2>
      <p className={body}>
        Complete AI IT Services
        <br />
        Pleasanton, California
        <br />
        Website:{" "}
        <a
          href="https://completeaiitservices.ai"
          className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900"
        >
          https://completeaiitservices.ai
        </a>
        <br />
        Email:{" "}
        <a
          href="mailto:info@completeaiitservices.ai"
          className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900"
        >
          info@completeaiitservices.ai
        </a>
      </p>
      <p className={body}>
        For privacy requests, include enough detail for us to verify and respond. This
        Policy is provided for transparency and is not legal advice.
      </p>
    </LegalPageShell>
  );
}
