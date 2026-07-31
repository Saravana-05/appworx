import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-3xl">

        <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

          {/* Intro */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Who We Are</h2>
            <p className="mb-3">
              AppworX trading as TechMate360 Ltd ("AppworX", "we", "us", or "our") is the data
              controller responsible for your personal data. We operate the website{" "}
              <a href="https://appworx.io" className="text-primary hover:underline">
                https://appworx.io
              </a>{" "}
              and provide software products and professional services.
            </p>
            <p className="mb-3">
              We are committed to protecting your personal data and processing it in accordance
              with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act
              2018, and all other applicable data protection laws.
            </p>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data,
              please contact our privacy team at:{" "}
              <a href="mailto:info@appworx.io" className="text-primary hover:underline">
                info@appworx.io
              </a>
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. Personal Data We Collect
            </h2>

            <h3 className="text-base font-medium text-foreground mb-2">
              2.1 Data You Provide Directly
            </h3>
            <p className="mb-2">When you interact with us, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><span className="text-foreground font-medium">Identity data:</span> full name, job title, company name.</li>
              <li><span className="text-foreground font-medium">Contact data:</span> email address, phone number, postal address.</li>
              <li><span className="text-foreground font-medium">Account data:</span> username, password (stored in hashed form), account preferences.</li>
              <li><span className="text-foreground font-medium">Payment data:</span> billing address, payment card details (processed securely by our payment provider — we do not store full card numbers).</li>
              <li><span className="text-foreground font-medium">Communications data:</span> messages you send us via contact forms, email, or support tickets.</li>
              <li><span className="text-foreground font-medium">Professional Services data:</span> information you share during consulting engagements, including business processes, documents, and project details.</li>
            </ul>

            <h3 className="text-base font-medium text-foreground mb-2">
              2.2 Data We Collect Automatically
            </h3>
            <p className="mb-2">
              When you visit our website or use our software, we automatically collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><span className="text-foreground font-medium">Technical data:</span> IP address, browser type and version, operating system, device identifiers.</li>
              <li><span className="text-foreground font-medium">Usage data:</span> pages visited, features used, time spent, clickstream data, error logs.</li>
              <li><span className="text-foreground font-medium">Cookie data:</span> session cookies, preference cookies, and analytics cookies (see Section 9 for our Cookie Policy).</li>
            </ul>

            <h3 className="text-base font-medium text-foreground mb-2">
              2.3 Data from Third Parties
            </h3>
            <p className="mb-2">We may receive data about you from:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Payment processors (e.g. Stripe) confirming transaction status.</li>
              <li>Analytics providers (e.g. Google Analytics) providing aggregated usage insights.</li>
              <li>Marketing platforms if you engage with our content on third-party channels.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. How We Use Your Personal Data
            </h2>
            <p className="mb-4">
              We only use your personal data where we have a lawful basis to do so. The table
              below sets out our purposes and the legal basis for each:
            </p>
            <div className="border border-border rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold text-foreground border-b border-border w-1/2">Purpose</th>
                    <th className="text-left p-3 font-semibold text-foreground border-b border-border">Lawful Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["To create and manage your Account", "Performance of a contract with you."],
                    ["To provide our Software and Professional Services", "Performance of a contract with you."],
                    ["To process payments and prevent fraud", "Performance of a contract; legitimate interests (fraud prevention)."],
                    ["To send service-related communications (e.g. billing notices, updates)", "Performance of a contract; legitimate interests."],
                    ["To send marketing communications", "Consent (where required); legitimate interests (for existing customers in relation to similar products and services)."],
                    ["To improve our Services through analytics", "Legitimate interests."],
                    ["To comply with legal obligations", "Legal obligation."],
                  ].map(([purpose, basis]) => (
                    <tr key={purpose} className="hover:bg-muted/20 transition-colors">
                      <td className="p-3 text-foreground">{purpose}</td>
                      <td className="p-3">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Who We Share Your Data With
            </h2>
            <p className="mb-4">
              We do not sell your personal data. We may share it with trusted third parties in
              the following circumstances:
            </p>

            <h3 className="text-base font-medium text-foreground mb-2">4.1 Service Providers</h3>
            <p className="mb-2">
              We engage carefully selected third-party processors who act on our instructions, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Cloud hosting and infrastructure providers.</li>
              <li>Payment processors (e.g. Stripe).</li>
              <li>Email and communication platforms.</li>
              <li>Analytics and monitoring tools.</li>
              <li>Customer support software.</li>
            </ul>
            <p className="mb-4">
              All processors are contractually required to handle your data securely and only
              for the purposes we specify.
            </p>

            <h3 className="text-base font-medium text-foreground mb-2">4.2 Professional Advisers</h3>
            <p className="mb-4">
              We may share data with lawyers, accountants, auditors, and insurers where necessary
              for the running of our business.
            </p>

            <h3 className="text-base font-medium text-foreground mb-2">4.3 Legal Requirements</h3>
            <p className="mb-4">
              We may disclose your data to law enforcement, regulators, or courts where we are
              legally required to do so or where necessary to protect the rights, property, or
              safety of AppworX, our users, or others.
            </p>

            <h3 className="text-base font-medium text-foreground mb-2">4.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of our business or assets, your data
              may be transferred to the relevant third party. We will notify you of any such change
              and your rights in that regard.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. International Data Transfers
            </h2>
            <p className="mb-3">
              Your data is primarily processed and stored within the United Kingdom and the
              European Economic Area (EEA). Where we transfer data outside the UK or EEA (for
              example, to certain cloud providers), we ensure appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>UK International Data Transfer Agreements (IDTAs).</li>
              <li>Standard Contractual Clauses approved by the relevant authority.</li>
              <li>Transfers to countries deemed adequate by the UK Government.</li>
            </ul>
            <p>
              You may request details of the specific safeguards in place by contacting{" "}
              <a href="mailto:info@appworx.io" className="text-primary hover:underline">
                info@appworx.io
              </a>.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. How Long We Keep Your Data
            </h2>
            <p className="mb-3">
              We retain your personal data only for as long as necessary to fulfil the purposes
              for which it was collected, including legal, accounting, and regulatory requirements.
              Our general retention periods are:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li><span className="text-foreground font-medium">Account data:</span> retained for the duration of your account and for up to 7 years after closure for legal and financial compliance purposes.</li>
              <li><span className="text-foreground font-medium">Payment records:</span> retained for 7 years in accordance with HMRC requirements.</li>
              <li><span className="text-foreground font-medium">Marketing data:</span> retained until you withdraw consent or opt out.</li>
              <li><span className="text-foreground font-medium">Support and communications data:</span> retained for up to 3 years after the last interaction.</li>
              <li><span className="text-foreground font-medium">Technical and usage logs:</span> retained for up to 12 months.</li>
            </ul>
            <p>After the applicable retention period, we securely delete or anonymise your data.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg font-semibent text-foreground mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Under UK GDPR, you have the following rights in relation to your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><span className="text-foreground font-medium">Right of access:</span> to request a copy of the personal data we hold about you.</li>
              <li><span className="text-foreground font-medium">Right to rectification:</span> to ask us to correct inaccurate or incomplete data.</li>
              <li><span className="text-foreground font-medium">Right to erasure:</span> to request deletion of your data in certain circumstances (the 'right to be forgotten').</li>
              <li><span className="text-foreground font-medium">Right to restrict processing:</span> to ask us to pause processing of your data in certain circumstances.</li>
              <li><span className="text-foreground font-medium">Right to data portability:</span> to receive your data in a structured, commonly used format.</li>
              <li><span className="text-foreground font-medium">Right to object:</span> to object to processing based on legitimate interests or for direct marketing.</li>
              <li><span className="text-foreground font-medium">Rights related to automated decision-making:</span> to not be subject to solely automated decisions that have a significant effect on you.</li>
            </ul>
            <p className="mb-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@appworx.io" className="text-primary hover:underline">
                info@appworx.io
              </a>. We will respond within one month. You will not usually need to pay a fee.
              We may need to verify your identity before fulfilling your request.
            </p>
            <p>
              You also have the right to lodge a complaint with the Information Commissioner's
              Office (ICO) at{" "}
              <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.ico.org.uk
              </a>{" "}
              or by calling 0303 123 1113, if you believe we have not handled your data in
              accordance with the law.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Data Security</h2>
            <p className="mb-3">
              We implement appropriate technical and organisational measures to protect your
              personal data against unauthorised access, accidental loss, destruction, or
              alteration. These measures include:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Encryption of data in transit (TLS/SSL) and at rest.</li>
              <li>Access controls and role-based permissions.</li>
              <li>Regular security assessments and penetration testing.</li>
              <li>Staff training on data protection and information security.</li>
              <li>Incident response procedures for data breaches.</li>
            </ul>
            <p>
              In the event of a personal data breach that poses a risk to your rights and
              freedoms, we will notify the ICO within 72 hours and, where required, inform
              you directly without undue delay.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">9. Cookies</h2>
            <p className="mb-4">
              Our website uses cookies and similar tracking technologies. Cookies are small text
              files placed on your device that help us provide and improve our Services.
            </p>

            <h3 className="text-base font-medium text-foreground mb-2">
              9.1 Types of Cookies We Use
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><span className="text-foreground font-medium">Strictly necessary cookies:</span> essential for the website to function (e.g. session management, authentication). These cannot be disabled.</li>
              <li><span className="text-foreground font-medium">Preference cookies:</span> remember your settings and choices (e.g. language, region).</li>
              <li><span className="text-foreground font-medium">Analytics cookies:</span> help us understand how visitors use our website (e.g. Google Analytics). These are only set with your consent.</li>
              <li><span className="text-foreground font-medium">Marketing cookies:</span> used to deliver relevant advertising. These are only set with your consent.</li>
            </ul>

            <h3 className="text-base font-medium text-foreground mb-2">9.2 Managing Cookies</h3>
            <p>
              When you first visit our website, you will be presented with a cookie consent banner.
              You can accept all cookies, reject non-essential cookies, or manage your preferences
              individually. You can also control cookies through your browser settings, though
              disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">10. Children's Privacy</h2>
            <p>
              Our Services are not directed at children under the age of 18. We do not knowingly
              collect personal data from anyone under 18. If you believe a child has provided us
              with their personal data, please contact us at{" "}
              <a href="mailto:info@appworx.io" className="text-primary hover:underline">
                info@appworx.io
              </a>{" "}
              and we will delete it promptly.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">11. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, plugins, or services.
              Clicking on those links may allow third parties to collect or share data about you.
              We do not control these third-party websites and are not responsible for their
              privacy practices. We encourage you to review the privacy policy of every website
              you visit.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              12. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technology, or legal requirements. When we make material changes, we
              will notify you by email or by posting a prominent notice on our website, and
              update the "Last updated" date at the top of this page. We encourage you to
              review this policy periodically.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">13. Contact Us</h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              our data practices, please contact us:
            </p>
            <ul className="space-y-1">
              <li>
                <span className="text-foreground font-medium">Email: </span>
                <a href="mailto:info@appworx.io" className="text-primary hover:underline">
                  info@appworx.io
                </a>
              </li>
              <li>
                <span className="text-foreground font-medium">Website: </span>
                <a href="https://appworx.io" className="text-primary hover:underline">
                  https://appworx.io
                </a>
              </li>
              <li>
                <span className="text-foreground font-medium">Address: </span>
                AppworX Ltd, 124 City Road, London, England, EC1V 2NX
              </li>
            </ul>
            <p className="mt-3">
              We aim to respond to all privacy-related enquiries within 5 working days.
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

export default PrivacyPolicy;