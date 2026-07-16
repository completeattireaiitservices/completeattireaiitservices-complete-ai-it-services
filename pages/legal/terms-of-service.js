import React from "react";
import { Scale } from "lucide-react";
import LegalPageShell, {
  legalSectionHeading as sectionHeading,
  legalBody as body,
  legalList as list,
  legalSubHeading as subHeading,
} from "../../components/LegalPageShell";

const EFFECTIVE_DATE = "July 16, 2026";

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      metaTitle="Terms of Service | Complete AI IT Services"
      metaDescription="Terms of Service for Complete AI IT Services — scope, AI accuracy, IP, fees, QA retainer, liability, acceptable use, and California governing law."
      breadcrumbCurrent="Terms of Service"
      title="Terms of Service"
      badge="Master Service Terms"
      accent="violet"
      activeLegal="terms"
      icon={<Scale className="h-6 w-6" strokeWidth={2} />}
      subtitle={
        <>
          Complete AI IT Services · completeaiitservices.ai · Pleasanton, California ·
          Effective {EFFECTIVE_DATE}
        </>
      }
      relatedHref="/legal/privacy-policy"
      relatedLabel="Privacy Policy"
    >
      <h2 className={sectionHeading}>1. Agreement to These Terms</h2>
      <p className={body}>
        These Terms of Service (&quot;Terms&quot;) govern access to and use of the website{" "}
        <strong>completeaiitservices.ai</strong> and the professional services offered by
        Complete AI IT Services (&quot;Provider,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;), located in Pleasanton, California.
      </p>
      <p className={body}>
        By accessing the website, submitting an inquiry, booking a call, or engaging our
        services, you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) agree to
        these Terms and our{" "}
        <a
          href="/legal/privacy-policy"
          className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900"
        >
          Privacy Policy
        </a>
        . If you are accepting on behalf of a company, you represent that you have
        authority to bind that entity. If you do not agree, do not use the website or
        services.
      </p>
      <p className={body}>
        Individual Statements of Work, proposals, or order forms (&quot;SOW&quot;) may
        supplement these Terms. If there is a conflict, the SOW controls for that
        engagement&apos;s commercial specifics; these Terms control on all other matters
        unless the SOW expressly states otherwise.
      </p>

      <h2 className={sectionHeading}>2. Scope of Services</h2>
      <p className={body}>
        Provider delivers AI Integration Architecture and Intelligent Automation solutions,
        which may include (without limitation): AI Knowledge Assistants (private RAG),
        Autonomous Content Engines, OmniChannel content distribution, receipt capture and
        bookkeeping intelligence, Brand Guardian reputation workflows, Monday Morning
        executive briefings, Custom &quot;Record &amp; Automate&quot; process audits, and
        related managed retainers.
      </p>
      <p className={body}>
        Implementations typically use n8n orchestration, large language models (LLMs),
        vector databases (e.g., Pinecone), and Client-approved third-party systems (CRM,
        accounting, messaging, analytics). Exact deliverables, tiers, timelines, and fees
        are defined in the applicable SOW or proposal.
      </p>

      <h2 className={sectionHeading}>3. Eligibility &amp; Accounts</h2>
      <p className={body}>
        You must be at least 18 years old and capable of forming a binding contract. You
        are responsible for safeguarding credentials to any systems you authorize us to
        access, for maintaining your own third-party platform accounts, and for all
        activity occurring under those accounts.
      </p>

      <h2 className={sectionHeading}>4. Nature of AI, Accuracy &amp; Human Oversight</h2>
      <p className={body}>
        Client acknowledges that AI systems are <strong>probabilistic, not deterministic</strong>.
        Outputs depend on model behavior, prompts, retrieval quality, and the Knowledge Base
        and data Client provides. Provider works to maximize accuracy through architecture,
        grounding (RAG), QA testing, and bi-weekly logic audits, but{" "}
        <strong>cannot guarantee error-free or hallucination-free results</strong> in all
        cases.
      </p>
      <ul className={list}>
        <li>
          Provider is not liable for incorrect AI statements (&quot;hallucinations&quot;)
          to the extent the system acted on incomplete, outdated, conflicting, or
          inaccurate Client Knowledge Base or instructions.
        </li>
        <li>
          Client remains responsible for reviewing high-stakes outputs (legal, financial,
          medical, employment, compliance, or public communications) before relying on or
          publishing them, unless an SOW expressly assigns a different review model.
        </li>
        <li>
          Where human-in-the-loop approval is specified, Client must timely review and
          approve or reject drafts; delays may affect performance and SLAs.
        </li>
      </ul>

      <h2 className={sectionHeading}>5. The QA Guarantee (Managed Retainer SLA)</h2>
      <p className={body}>
        Where Client purchases a monthly retainer, Provider performs a{" "}
        <strong>Bi-Weekly Logic Audit</strong>, which typically includes:
      </p>
      <ul className={list}>
        <li>Reviewing AI execution logs for consistency and failures.</li>
        <li>Verifying vector / Pinecone retrieval accuracy against expected sources.</li>
        <li>
          Tuning system prompts and related configurations to reduce hallucinations and
          maintain brand alignment.
        </li>
      </ul>
      <p className={body}>
        The QA Guarantee is a service commitment for ongoing care—not an unlimited warranty
        of business outcomes, revenue results, search rankings, or zero defects.
      </p>

      <h2 className={sectionHeading}>6. Implementation Roadmap</h2>
      <p className={body}>
        Unless otherwise stated in an SOW, delivery follows a structured methodology:
        Discovery &amp; Audit; Architecture &amp; Development; QA &amp; Validation; and
        Deployment &amp; Optimization (including retainer-based continuity). Timelines
        depend on Client responsiveness, access to systems, and completeness of source
        materials.
      </p>

      <h2 className={sectionHeading}>7. Client Obligations &amp; Acceptable Use</h2>
      <p className={body}>Client agrees to:</p>
      <ul className={list}>
        <li>
          Provide accurate, lawful Client Content and necessary access, credentials, and
          stakeholders in a timely manner.
        </li>
        <li>
          Ensure Client has all rights and consents to process and share Client Content
          (including personal data of Client&apos;s customers/employees) with Provider and
          authorized subprocessors.
        </li>
        <li>
          Not use the services for unlawful, harmful, deceptive, infringing, or abusive
          purposes; not attempt to reverse engineer Provider tools except as permitted by
          law; and not introduce malware or disrupt systems.
        </li>
        <li>
          Comply with applicable laws (privacy, consumer, advertising, employment, tax,
          export) in how Client deploys AI-generated content and automations.
        </li>
        <li>
          Maintain third-party API and platform billing as required by the selected
          Billing Option in the SOW (Option A: Client-owned accounts; Option B:
          Provider-managed usage within the flat-rate retainer), and keep any
          Client-controlled credentials secure.
        </li>
      </ul>

      <h2 className={sectionHeading}>8. Fees, API Costs, Refunds &amp; Termination Notice</h2>
      <p className={body}>
        Detailed milestone refund rules, the retainer service guarantee, and pre-paid
        unused-month handling are set out in our{" "}
        <a href="/legal/satisfaction-refund-policy">Satisfaction &amp; Refund Policy</a>
        . That policy and this section are intended to be read together; if there is a
        conflict on refund mechanics, the Satisfaction &amp; Refund Policy controls for
        refunds, and these Terms control on all other matters unless an SOW expressly
        states otherwise.
      </p>
      <h3 className={subHeading}>8.1 Setup / implementation fees</h3>
      <p className={body}>
        One-time implementation fees are due as stated in the SOW and follow a milestone
        sign-off process:
      </p>
      <ul className={list}>
        <li>
          <strong>Phase 1 — Discovery &amp; Audit:</strong> Setup deposit is{" "}
          <strong>100% refundable</strong> if Client chooses not to proceed before custom
          development or database synchronization begins (after delivery of the System Map
          and Scope Definition).
        </li>
        <li>
          <strong>Phase 2 — Custom Development:</strong> Once custom n8n pipeline
          engineering, proprietary API routing, or private vector knowledge-base
          configuration has begun, setup fees become <strong>non-refundable</strong>,
          covering specialized engineering hours dedicated to Client.
        </li>
        <li>
          <strong>Phase 3 — QA &amp; Production Sign-Off:</strong> Workflows are not pushed
          live until they pass functional and integration testing and Client has tested and
          approved the staging environment.
        </li>
      </ul>
      <h3 className={subHeading}>8.2 Monthly retainer</h3>
      <p className={body}>
        The monthly retainer covers ongoing optimization, monitoring, and the QA Guarantee
        described above. Retainers are month-to-month unless the SOW states a commitment
        period. Either party may terminate the retainer with{" "}
        <strong>30 days&apos; prior written notice</strong>.
      </p>
      <p className={body}>
        <strong>Retainer service guarantee:</strong> If a major integration fails due to
        Provider&apos;s codebase (not due to Client Content, Client instructions, Client
        systems, or third-party API/platform outages or changes), and Provider cannot
        resolve that logic issue within <strong>5 business days</strong> of Client&apos;s
        written alert, the retainer fee for that month will be{" "}
        <strong>100% refunded</strong>. This guarantee does not apply to probabilistic AI
        output quality, hallucinations, or business-result warranties, which remain subject
        to Section 4 and the disclaimers in these Terms.
      </p>
      <p className={body}>
        If Client pre-pays quarterly or annually for a discount, any remaining unused full
        months are refundable upon cancellation after the notice period, as described in the
        Satisfaction &amp; Refund Policy.
      </p>
      <h3 className={subHeading}>8.3 Third-party API &amp; platform costs (Billing Options)</h3>
      <p className={body}>
        Client selects a Billing Option in the SOW or proposal:
      </p>
      <ul className={list}>
        <li>
          <strong>Option A — Direct Pass-Through (Pay-At-Cost):</strong> Client maintains
          active accounts with API providers (e.g., OpenAI, Pinecone, n8n) and pays those
          vendors directly for raw usage. Provider charges setup and maintenance retainer
          separately.
        </li>
        <li>
          <strong>Option B — Flat-Rate Retainer (All-Inclusive):</strong> Provider includes
          technical hosting, database subscriptions, and standard raw API/token usage in a
          single monthly invoice, subject to a fair-use transaction ceiling stated in the
          SOW. Usage beyond that ceiling may require a customized high-volume tier.
        </li>
      </ul>
      <p className={body}>
        Provider does not control third-party vendor pricing, rate limits, or outages.
        Under Option A, Client remains solely responsible for vendor bills. Under Option B,
        fair-use caps and any overage terms in the SOW apply.
      </p>
      <h3 className={subHeading}>8.4 Late payment</h3>
      <p className={body}>
        Overdue invoices may suspend non-critical work after reasonable notice. Client
        remains responsible for fees incurred and, under Option A, for third-party charges
        during any suspension period caused by Client non-payment.
      </p>

      <h2 className={sectionHeading}>9. Intellectual Property</h2>
      <ul className={list}>
        <li>
          <strong>Client Content:</strong> Client retains all rights to Client Content.
          Client grants Provider a limited license to use Client Content solely to perform
          the services.
        </li>
        <li>
          <strong>Client-specific deliverables:</strong> Upon full payment of applicable
          setup fees and deployment under the SOW, Client owns the Client-specific workflow
          configurations, knowledge-base assets, and documentation created uniquely for
          Client. If Client cancels the maintenance retainer, Provider will hand over /
          export those Client-specific n8n pipelines and related configuration assets so
          Client can continue operating them. After cancellation, Client is responsible for
          hosting, API updates, error monitoring, and ongoing QA unless a new engagement is
          signed.
        </li>
        <li>
          <strong>Provider IP:</strong> Provider retains all rights to preexisting tools,
          frameworks, prompt libraries, methodologies, templates, and know-how, including
          improvements that are not Client-specific Confidential Information. Client
          receives no ownership of Provider IP except as embodied in the Client-specific
          deliverables above.
        </li>
        <li>
          <strong>Website content:</strong> Site text, branding, and materials are owned by
          Provider or licensors and may not be copied for commercial use without permission.
        </li>
      </ul>

      <h2 className={sectionHeading}>10. Confidentiality</h2>
      <p className={body}>
        Each party will protect the other&apos;s non-public business, technical, and
        customer information with reasonable care and use it only to perform under these
        Terms or an SOW. Obligations do not apply to information that is public through no
        fault of the receiving party, independently developed, rightfully received from a
        third party without duty of confidentiality, or required to be disclosed by law
        (with notice where legally permitted).
      </p>

      <h2 className={sectionHeading}>11. Privacy &amp; Data Processing</h2>
      <p className={body}>
        Personal data handling is described in our{" "}
        <a href="/legal/privacy-policy">Privacy Policy</a>. For Client Content containing
        personal data, Client is the controller (or equivalent) and Provider acts as a
        service provider/processor as applicable. Client warrants that its instructions and
        data are lawful. Provider will not use Client Content to train public foundation
        models, consistent with the Privacy Policy and available provider-API settings.
        Under Billing Option A, Client typically controls third-party platform accounts;
        under Option B, Provider may operate those platforms on Client&apos;s behalf within
        the SOW, still solely to deliver the services.
      </p>

      <h2 className={sectionHeading}>12. Third-Party Services</h2>
      <p className={body}>
        Services may depend on third-party platforms (LLM APIs, vector databases, CRMs,
        accounting tools, calendaring, hosting). Provider is not responsible for outages,
        policy changes, rate limits, or security incidents originating solely from those
        third parties. Client&apos;s use of third-party services is subject to those
        vendors&apos; terms.
      </p>

      <h2 className={sectionHeading}>13. Disclaimers</h2>
      <p className={body}>
        EXCEPT AS EXPRESSLY STATED IN AN SOW, THE WEBSITE AND SERVICES ARE PROVIDED{" "}
        <strong>&quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot;</strong> TO THE MAXIMUM
        EXTENT PERMITTED BY LAW, PROVIDER DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS,
        IMPLIED, OR STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        TITLE, AND NON-INFRINGEMENT. PROVIDER DOES NOT WARRANT THAT AI OUTPUTS WILL BE
        ACCURATE, COMPLETE, UNINTERRUPTED, OR ERROR-FREE, OR THAT SERVICES WILL ACHIEVE
        SPECIFIC BUSINESS RESULTS.
      </p>

      <h2 className={sectionHeading}>14. Limitation of Liability</h2>
      <p className={body}>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROVIDER&apos;S TOTAL LIABILITY ARISING
        OUT OF OR RELATED TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE AMOUNTS PAID
        BY CLIENT TO PROVIDER FOR THE SERVICES GIVING RISE TO THE CLAIM DURING THE{" "}
        <strong>TWELVE (12) MONTHS</strong> PRECEDING THE EVENT. PROVIDER WILL NOT BE
        LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
        DAMAGES, OR FOR LOST PROFITS, REVENUE, GOODWILL, DATA, OR BUSINESS OPPORTUNITY,
        EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p className={body}>
        Some jurisdictions do not allow certain limitations; in those cases, liability is
        limited to the fullest extent permitted by law.
      </p>

      <h2 className={sectionHeading}>15. Indemnification</h2>
      <p className={body}>
        Client will defend and indemnify Provider against claims, damages, and expenses
        (including reasonable attorneys&apos; fees) arising from: (a) Client Content or
        Client&apos;s instructions; (b) Client&apos;s misuse of the services or AI outputs;
        (c) Client&apos;s violation of law or third-party rights; or (d) Client&apos;s
        breach of these Terms or an SOW—except to the extent caused by Provider&apos;s
        willful misconduct.
      </p>

      <h2 className={sectionHeading}>16. Suspension &amp; Termination</h2>
      <p className={body}>
        Provider may suspend or terminate services for material breach, unlawful use,
        non-payment, or risk to systems/security, after notice where reasonably practicable.
        Upon termination, Client remains responsible for fees owed through the effective
        date and for third-party charges. Sections that by nature should survive
        (IP, confidentiality, disclaimers, liability limits, indemnity, governing law)
        survive termination.
      </p>

      <h2 className={sectionHeading}>17. Website Use</h2>
      <p className={body}>
        The website is provided for informational and business-development purposes. You
        may not scrape, overload, or interfere with the site; misrepresent affiliation with
        Provider; or use site content in a misleading way. We may modify or discontinue
        website features at any time.
      </p>

      <h2 className={sectionHeading}>18. Governing Law &amp; Disputes</h2>
      <p className={body}>
        These Terms are governed by the laws of the <strong>State of California</strong>,
        excluding conflict-of-law rules. Exclusive venue for disputes is the state or
        federal courts located in California, unless the parties agree in writing to
        arbitration or mediation. Before filing suit, the parties will attempt good-faith
        informal resolution for at least 30 days after written notice of a dispute.
      </p>

      <h2 className={sectionHeading}>19. Changes to These Terms</h2>
      <p className={body}>
        We may update these Terms by posting a revised version on the website with an
        updated effective date. Material changes affecting active paid engagements will be
        communicated as reasonably appropriate. Continued use of the website after posting
        constitutes acceptance of website-related updates. Active SOWs remain governed by
        the Terms in effect when the SOW was signed, unless both parties agree otherwise.
      </p>

      <h2 className={sectionHeading}>20. General</h2>
      <p className={body}>
        These Terms, the Privacy Policy, the Satisfaction &amp; Refund Policy, and any SOW
        constitute the entire agreement between the parties regarding the subject matter and
        supersede prior conflicting discussions. If any provision is unenforceable, the
        remainder stays in effect. Failure to enforce a provision is not a waiver. Client may
        not assign these Terms without Provider&apos;s consent; Provider may assign to an
        affiliate or successor. Notices may be sent to the email addresses used for the
        engagement or to{" "}
        <strong>info@completeaiitservices.ai</strong>.
      </p>

      <h2 className={sectionHeading}>21. Contact</h2>
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
        These Terms are a business contract template aligned with common AI/IT service
        practices and are not a substitute for advice from a licensed attorney.
      </p>
    </LegalPageShell>
  );
}
