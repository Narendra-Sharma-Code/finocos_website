import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const fadeUp = {
    hidden: { y: 18, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black text-white"
      initial="hidden"
      animate="show"
    >
      <header className="pt-28 pb-10">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeUp} className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
              Terms of Service
            </h1>
            {/* <p className="text-slate-300 text-sm md:text-base">
              Effective Date: Feb 2026
            </p> */}
          </motion.div>
        </div>
      </header>

      <section className="pb-16">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 shadow-2xl"
          >
            <div
              className="prose max-w-none [&_p]:text-slate-200 [&_li]:text-slate-200 [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-white [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2"
            >
              <p>
                These Terms of Service (“Terms”) govern access to and use of the website operated by Finocos (“Finocos”, “Company”, “we”, “our”, or “us”) located at www.finocos.com (“Website”).
              </p>
              <p>By accessing or using this Website, you agree to be bound by these Terms.</p>

              <h2>1. About Finocos</h2>
              <p>Finocos is engaged in providing:</p>
              <ul>
                <li>Export compliance support services (including eBRC generation and EDPMS consulting)</li>
                <li>Finance cost validation and treasury governance advisory</li>
                <li>Trade and financial process assurance services</li>
                <li>Automation and technology-enabled solutions, including proprietary systems such as SimplEx</li>
              </ul>
              <p>
                Access to the Website does not create a client relationship. A formal engagement letter or written agreement is required to establish any professional relationship.
              </p>

              <h2>2. Informational Nature of Website</h2>
              <p>The content provided on this Website is for general informational purposes only.</p>
              <p>Nothing on this Website constitutes:</p>
              <ul>
                <li>Legal advice</li>
                <li>Tax advice</li>
                <li>Financial advice</li>
                <li>Regulatory opinion</li>
              </ul>
              <p>
                Users are advised to seek independent professional advice before making any business or compliance decisions.
              </p>

              <h2>3. Engagement of Services</h2>
              <p>All professional services are governed by:</p>
              <ul>
                <li>Separate engagement letters</li>
                <li>Scope documents</li>
                <li>Commercial agreements</li>
              </ul>
              <p>
                In the event of any conflict, the terms of the signed engagement agreement shall prevail.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                All content on this Website, including but not limited to:
              </p>
              <ul>
                <li>Text</li>
                <li>Graphics</li>
                <li>Reports</li>
                <li>Charts</li>
                <li>Methodologies</li>
                <li>Software descriptions</li>
                <li>Branding elements</li>
                <li>SimplEx platform references</li>
              </ul>
              <p>
                are the intellectual property of Finocos unless otherwise stated.
              </p>
              <p>
                No reproduction, modification, distribution, or commercial use is permitted without prior written consent.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul>
                <li>Finocos shall not be liable for any indirect, incidental, consequential, or special damages arising from use of this Website.</li>
                <li>Finocos shall not be liable for any reliance placed on Website content.</li>
                <li>Finocos shall not be responsible for regulatory decisions, banking actions, or third-party determinations.</li>
              </ul>
              <p>
                For clients under a formal engagement, liability shall be governed by the applicable engagement agreement.
              </p>

              <h2>6. Confidentiality</h2>
              <p>
                Any confidential information submitted through formal engagement channels will be treated in accordance with contractual obligations and applicable law.
              </p>
              <p>
                Website inquiries submitted via contact forms should not include sensitive financial or regulatory information unless requested under secure communication channels.
              </p>

              <h2>7. Third-Party Links</h2>
              <p>
                This Website may contain links to third-party websites. Finocos is not responsible for the content, privacy practices, or accuracy of such external sites.
              </p>

              <h2>8. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms shall be governed by the laws of India.
              </p>
              <p>
                Any disputes arising from Website use shall be subject to the exclusive jurisdiction of courts located in Mumbai, Maharashtra, India.
              </p>

              <h2>9. Amendments</h2>
              <p>
                Finocos reserves the right to modify these Terms at any time. Updated versions will be published on this page with the revised effective date.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </motion.main>
  );
};

export default Terms;
