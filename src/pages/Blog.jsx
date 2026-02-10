import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock } from 'react-icons/fi';

const Blog = () => {
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
      {/* HERO */}
      <header className="pt-28 pb-10">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeUp} className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5 text-white">
              Digital Trade Is No Longer Optional: Why Exporters Must Rethink
              eBRC, EDPMS, and Trade Governance
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              <div className="inline-flex items-center gap-2">
                <FiCalendar className="text-amber-500" />
                <span>Feb 2026</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <FiClock className="text-amber-500" />
                <span>6–8 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* BLOG CONTENT */}
      <section className="pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.article
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 shadow-2xl"
          >
            <div
              className="
                prose max-w-none

                [&_p]:text-gray-200
                [&_li]:text-gray-200

                [&_h2]:text-white
                [&_h3]:text-white

                [&_h2]:text-3xl
                [&_h2]:font-extrabold
                [&_h2]:mt-14
                [&_h2]:mb-6

                [&_h3]:text-2xl
                [&_h3]:font-bold
                [&_h3]:mt-10
                [&_h3]:mb-4

                [&_ul]:list-disc
                [&_ul]:pl-6
                [&_ul]:space-y-2
              "
            >
              <p>
                India’s trade ecosystem is undergoing a quiet but fundamental shift.
                With the Government’s push towards digitally enforceable trade records—most notably through initiatives like BharatTradeNet and the proposed Digital Trade Facilitation Bill, 2026—export compliance is no longer about filing documents. It is about maintaining verifiable, auditable, and legally defensible digital records.
              </p>

              <p>
                For exporters, especially SEZ units and large corporates, this changes the role of eBRC, EDPMS, and bank-related records completely.
              </p>

              <h2>From Incentive-Driven Compliance to Record-Driven Governance</h2>

              <p>Traditionally, many exporters viewed eBRC generation as relevant only when:</p>
              <ul>
                <li>Export incentives were being claimed, or</li>
                <li>Specific DGFT benefits were involved.</li>
              </ul>

              <p>That understanding is now outdated.</p>

              <p>Today, eBRC serves a much larger purpose:</p>
              <ul>
                <li>It is the digital bridge between export and realisation</li>
                <li>It supports EDPMS closure under RBI</li>
                <li>It enables consistency between bank records, GST data, and trade filings</li>
                <li>It provides audit-ready evidence when queries arise from banks, auditors, or regulators</li>
              </ul>

              <p><strong>In simple terms:</strong></p>
              <p>eBRC is no longer an incentive document. It is now a core trade governance record.</p>

              <h2>Why EDPMS Is Moving to the Centre Stage</h2>

              <p>
                With service exporters now required to close EDPMS and increasing cross-border scrutiny, RBI’s EDPMS framework is no longer a backend banking formality.
              </p>

              <p>Unclosed or poorly documented EDPMS cases can result in:</p>
              <ul>
                <li>Regulatory explanations</li>
                <li>Delays in banking processes</li>
                <li>Audit discomfort</li>
                <li>Questions on export realisation integrity</li>
              </ul>

              <p>Managing EDPMS at scale requires:</p>
              <ul>
                <li>Continuous bank coordination</li>
                <li>Clean mapping of export and realisation data</li>
                <li>Structured follow-ups and closure certainty</li>
              </ul>

              <p>This is why EDPMS closure has become a program, not a one-time task.</p>

              <h2>Finance Cost Validation: The Missing Link in Trade Governance</h2>

              <p>As export volumes grow, so does dependence on:</p>
              <ul>
                <li>Working capital limits</li>
                <li>Packing credit</li>
                <li>Foreign currency borrowings</li>
                <li>Benchmark-linked loans (Repo, MCLR, SOFR)</li>
              </ul>

              <p>In such an environment, finance cost leakage often occurs silently through:</p>
              <ul>
                <li>Incorrect benchmark application</li>
                <li>Spread changes</li>
                <li>Non-contractual charges</li>
                <li>Delayed rate transmission</li>
              </ul>

              <p>
                Without systematic validation, these costs surface only when the P&amp;L is already impacted.
              </p>

              <p>
                Finance cost validation is therefore no longer about savings alone—it is about governance, control, and negotiation readiness.
              </p>

              <h2>The Assurance → Intelligence → Automation Approach</h2>

              <h3>1. Assurance</h3>
              <p>We begin with assurance-led services—taking ownership of:</p>
              <ul>
                <li>eBRC generation</li>
                <li>EDPMS consulting and closure</li>
                <li>Finance cost validation</li>
              </ul>
              <p>
                This ensures regulatory accuracy, audit comfort, and predictable outcomes.
              </p>

              <h3>2. Intelligence</h3>
              <p>As data is structured and validated, deeper insights emerge:</p>
              <ul>
                <li>Cost movement patterns</li>
                <li>Bank behaviour analysis</li>
                <li>Reconciliation gaps</li>
                <li>Early warning indicators</li>
              </ul>
              <p>This converts compliance activity into decision intelligence.</p>

              <h3>3. Automation</h3>
              <p>Once processes are understood and stabilised, automation is introduced to:</p>
              <ul>
                <li>Reduce manual dependency</li>
                <li>Improve turnaround time</li>
                <li>Institutionalise governance</li>
              </ul>

              <p>
                Automation, when done at the right stage, enhances control rather than disrupting it.
              </p>

              <h2>What Exporters Should Ask Themselves Today</h2>

              <p>Instead of asking:</p>
              <ul>
                <li>“Are we claiming any export benefit?”</li>
              </ul>

              <p>The more relevant questions now are:</p>
              <ul>
                <li>“Can we clearly demonstrate export-to-realisation traceability?”</li>
                <li>“Are our digital trade records audit-ready?”</li>
                <li>“Do our finance costs fully align with sanctioned terms?”</li>
                <li>“Are we prepared for regulator and bank scrutiny in a digital-first regime?”</li>
              </ul>

              <h2>The Way Forward</h2>

              <p>
                India’s trade framework is moving decisively towards digital trust, interoperability, and data integrity. In this environment, unstructured compliance will become expensive—financially and reputationally.
              </p>

              <p>
                Exporters who invest early in assurance-led trade governance will not only reduce risk but also gain operational clarity and negotiating strength.
              </p>

              <p>
                At Finocos, our role is simple: To assure compliance, convert data into intelligence, and automate responsibly—so that exporters can focus on growth with confidence.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </motion.main>
  );
};

export default Blog;