import React from 'react';
import { motion } from 'framer-motion';

const Cookies = () => {
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
              Cookie Policy
            </h1>
            {/* <p className="text-slate-300 text-sm md:text-base">Effective Date: Feb 2026</p> */}
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
                This Cookie Policy explains how Finocos uses cookies and similar technologies on www.finocos.com.
              </p>

              <h2>1. What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website.</p>

              <h2>2. Types of Cookies We Use</h2>
              <h3>A. Essential Cookies</h3>
              <p>Required for basic website functionality and security.</p>

              <h3>B. Performance &amp; Analytics Cookies</h3>
              <p>Used to understand how visitors interact with the Website (e.g., traffic analysis, page visits).</p>

              <h3>C. Functional Cookies</h3>
              <p>Improve user experience and site responsiveness.</p>

              <p>We do not use cookies for selling personal data or behavioural advertising.</p>

              <h2>3. Managing Cookies</h2>
              <p>Users can:</p>
              <ul>
                <li>Accept or reject cookies via the cookie banner</li>
                <li>Adjust browser settings to block cookies</li>
                <li>Delete cookies from their device</li>
              </ul>
              <p>Blocking certain cookies may impact website functionality.</p>

              <h2>4. Third-Party Tools</h2>
              <p>
                Where analytics tools (such as Google Analytics) are used, data is processed in accordance with their respective privacy standards.
              </p>

              <h2>5. Updates</h2>
              <p>
                We may update this Cookie Policy from time to time. Changes will be reflected on this page.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </motion.main>
  );
};

export default Cookies;
