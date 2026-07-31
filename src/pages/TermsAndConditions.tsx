import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-3xl">

        <h1 className="text-4xl font-bold text-foreground mb-2">Terms & Conditions</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        {/* Preamble */}
        <div className="bg-muted/40 border border-border rounded-xl p-5 mb-10 text-sm text-muted-foreground leading-relaxed">
          <p className="mb-3">
            In these Terms, when we say <span className="text-foreground font-medium">you</span> or{" "}
            <span className="text-foreground font-medium">your</span>, we mean both you and any
            entity you are authorised to represent (such as your employer). When we say{" "}
            <span className="text-foreground font-medium">we</span>,{" "}
            <span className="text-foreground font-medium">us</span>, or{" "}
            <span className="text-foreground font-medium">our</span>, we mean AppworX trading as
            TechMate360 Ltd. We and you are each a Party to these Terms, and together, the Parties.
          </p>
          <p className="mb-3">
            These Terms form our contract with you, and sets out our obligations as a service
            provider and your obligations as a customer. You cannot use our Services unless you
            agree to these Terms. These Terms govern your use of our website (Site) and the
            purchase of our Services through our website.
          </p>
          <p>
            For questions about these Terms, or to get in touch with us, please email:{" "}
            <a href="mailto:info@appworx.io" className="text-primary hover:underline">
              info@appworx.io
            </a>
          </p>
        </div>

        <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              1. Introduction and Acceptance
            </h2>
            <p>
              This is the foundation of the entire document. It establishes that by using
              AppworX — whether browsing the site, creating an account, or paying for a plan —
              the user is legally agreeing to the rules. It also covers the scenario where a
              business (not an individual) is signing up, making clear the company itself is bound.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. Definitions</h2>
            <p>
              Legal documents use specific words with precise meanings. This section defines key
              terms like "Account", "Subscription", "Software", and "User Content" so that the
              rest of the document is unambiguous. For example, "Services" covers both our
              software and consulting work, so one term captures everything.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Accounts and Registration
            </h2>
            <p className="mb-2">This section covers three things:</p>
            <ul className="list-decimal pl-5 space-y-1">
              <li>Users must give accurate information when signing up.</li>
              <li>
                They are responsible for keeping their password safe and anything that happens
                under their account.
              </li>
              <li>Users must be 18 or older.</li>
            </ul>
            <p className="mt-3">
              This protects you if someone misuses a compromised account — the responsibility
              sits with them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Use of Our Services
            </h2>
            <p className="mb-3">
              This is the "rules of the road" section. It grants users a licence to use our
              software — limited, non-transferable, revocable (meaning we can take it back).
              Users cannot:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Hack, reverse engineer, or decompile the software.</li>
              <li>Resell or sublicense our software to third parties.</li>
              <li>Upload harmful, illegal, or malicious content.</li>
              <li>Use the services for any unlawful purpose.</li>
            </ul>
            <p>
              The Professional Services clause notes that consulting engagements will have their
              own separate scopes and Statements of Work (SOWs).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Subscriptions, Fees, and Payment
            </h2>
            <p className="mb-3">This section covers:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Plans are billed monthly or annually, in advance.</li>
              <li>Prices are shown exclusive of VAT.</li>
              <li>Non-payment results in suspension after 14 days.</li>
              <li>Fees are generally non-refundable.</li>
              <li>
                Free trials auto-convert to paid subscriptions unless cancelled before the
                trial period ends.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Intellectual Property
            </h2>
            <p className="mb-3">
              AppworX retains ownership of all software, website content, and deliverables we
              have built. Users retain ownership of their own data and files uploaded to the
              platform. We obtain a limited licence to process user content solely to deliver
              the service.
            </p>
            <p>
              The feedback clause means if a user suggests a feature or improvement, we can
              build and incorporate it without any obligation to that user.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Data Protection and Privacy
            </h2>
            <p>
              As a UK-registered company, we operate under UK GDPR and the Data Protection Act
              2018. Please refer to our{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              for full detail on how we collect, use, and protect your personal data. Enterprise
              clients requiring a Data Processing Agreement (DPA) should contact us at{" "}
              <a href="mailto:info@appworx.io" className="text-primary hover:underline">
                info@appworx.io
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any sensitive business information shared
              during the course of the engagement, and to use it only to deliver the services.
              This is especially relevant for consulting work, where we may operate within a
              client's internal systems and processes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              9. Warranties and Disclaimers
            </h2>
            <p className="mb-3">
              We commit to delivering our services with reasonable skill and care, and to
              maintaining appropriate security measures. However, we do not guarantee:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>100% uptime or uninterrupted access to the platform.</li>
              <li>That the service will be free from errors or bugs at all times.</li>
              <li>That the service will meet every specific requirement of every user.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              10. Limitation of Liability
            </h2>
            <p className="mb-3">
              Our total liability to you in connection with these Terms is capped at the greater
              of 12 months' fees paid by you or £1,000. We are not liable for any indirect or
              consequential losses, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Loss of profits or revenue.</li>
              <li>Loss of business or contracts.</li>
              <li>Reputational damage.</li>
              <li>Loss of data (beyond our obligations under data protection law).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">11. Indemnification</h2>
            <p>
              If a user misuses the platform, uploads illegal content, or breaches these Terms
              and this causes legal costs or claims against AppworX, the user agrees to
              indemnify and hold us harmless from those costs, including reasonable legal fees.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              12. Term and Termination
            </h2>
            <p className="mb-3">
              Users may cancel at any time; cancellation takes effect at the end of the current
              billing period. We may terminate access immediately in cases of:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Serious or repeated breach of these Terms.</li>
              <li>Non-payment of fees.</li>
              <li>Insolvency or cessation of business.</li>
            </ul>
            <p>
              On termination, all licences end, confidential information must be returned or
              destroyed, and any outstanding fees remain payable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              13. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these Terms as our business evolves. We will provide
              at least 30 days' notice before material changes take effect. Continued use of our
              services after that period constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">14. General</h2>
            <ul className="space-y-2">
              <li>
                <span className="text-foreground font-medium">Governing Law:</span> These Terms
                are governed by the laws of England and Wales. Any disputes shall be subject to
                the exclusive jurisdiction of the courts of England and Wales.
              </li>
              <li>
                <span className="text-foreground font-medium">Entire Agreement:</span> These
                Terms, together with our Privacy Policy and any applicable SOWs, constitute the
                entire agreement between the parties. Nothing said in any sales call or
                correspondence overrides this document.
              </li>
              <li>
                <span className="text-foreground font-medium">Severability:</span> If any
                provision of these Terms is found to be unenforceable, the remaining provisions
                continue in full force and effect.
              </li>
              <li>
                <span className="text-foreground font-medium">Assignment:</span> Users may not
                transfer or assign their account or rights under these Terms without our prior
                written consent.
              </li>
              <li>
                <span className="text-foreground font-medium">Force Majeure:</span> Neither party
                shall be liable for delays or failures caused by events beyond their reasonable
                control, including natural disasters, war, or government action.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">15. Contact Us</h2>
            <p>
              For any questions regarding these Terms, please contact us at:{" "}
              <a href="mailto:info@appworx.io" className="text-primary hover:underline">
                info@appworx.io
              </a>
            </p>
          </section>

          {/* Back link */}
          <div className="pt-4 border-t border-border">
            <Link to="/" className="text-primary hover:underline text-sm">
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;