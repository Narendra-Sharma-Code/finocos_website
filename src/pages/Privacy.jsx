import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
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
              Privacy Policy
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
                Finocos is committed to protecting personal and business data. This Privacy Policy explains how we collect, use, disclose, and safeguard information.
              </p>
              <p>This policy is aligned with:</p>
              <ul>
                <li>Digital Personal Data Protection Act, 2023 (India)</li>
                <li>Information Technology Act, 2000</li>
                <li>Applicable trade and financial regulations</li>
              </ul>

              <h2>1. Information We Collect</h2>
              <h3>A. Personal Information</h3>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name and designation</li>
                <li>Contact details submitted through forms</li>
              </ul>

              <h3>B. Business Information</h3>
              <ul>
                <li>Export documentation</li>
                <li>Bank statements</li>
                <li>Sanction letters</li>
                <li>Trade-related data</li>
                <li>Financial data provided during engagement</li>
              </ul>

              <h3>C. Technical Data</h3>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Website usage analytics</li>
              </ul>

              <h2>2. Purpose of Data Collection</h2>
              <p>We process data for:</p>
              <ul>
                <li>Delivering contracted services</li>
                <li>Regulatory compliance support</li>
                <li>Finance cost validation and reporting</li>
                <li>System improvement and analytics</li>
                <li>Communication with clients</li>
                <li>Legal compliance</li>
              </ul>
              <p>We do not sell personal data to third parties.</p>

              <h2>3. Legal Basis for Processing</h2>
              <p>Data is processed on the basis of:</p>
              <ul>
                <li>Contractual necessity</li>
                <li>User consent</li>
                <li>Legal obligation</li>
                <li>Legitimate business interest</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>We implement reasonable technical and organisational safeguards, including:</p>
              <ul>
                <li>Secure hosting infrastructure</li>
                <li>Encryption in transit (HTTPS)</li>
                <li>Role-based access control</li>
                <li>Restricted internal data access</li>
                <li>Periodic security review</li>
              </ul>
              <p>However, no system is completely immune from risk.</p>

              <h2>5. Data Retention</h2>
              <p>Data is retained only for as long as necessary:</p>
              <ul>
                <li>To fulfil contractual obligations</li>
                <li>To comply with regulatory requirements</li>
                <li>To resolve disputes</li>
                <li>To meet legal record-keeping obligations</li>
              </ul>

              <h2>6. Data Sharing</h2>
              <p>Data may be shared with:</p>
              <ul>
                <li>Banks and financial institutions (with client authorisation)</li>
                <li>Regulatory authorities (where legally required)</li>
                <li>Technology service providers under confidentiality obligations</li>
              </ul>
              <p>We ensure appropriate safeguards for third-party processing.</p>

              <h2>7. Cross-Border Data Transfers</h2>
              <p>
                Where data is stored or processed outside India, we ensure adequate protection standards consistent with applicable law.
              </p>

              <h2>8. Your Rights</h2>
              <p>Subject to applicable law, individuals may:</p>
              <ul>
                <li>Request access to their data</li>
                <li>Request correction</li>
                <li>Request deletion</li>
                <li>Withdraw consent (where applicable)</li>
              </ul>
              <p>Requests may be sent to:</p>
              <p>partner@finocos.com</p>

              <h2>9. Updates to Policy</h2>
              <p>
                This Privacy Policy may be updated periodically. The revised version will be posted on this page.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </motion.main>
  );
};

export default Privacy;
