'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const FAQS = [
  {
    q: 'What is included in the Starter plan?',
    a: 'The Starter plan includes up to 5 warehouse listings, 100 trades per month, access to the basic finance marketplace, standard quality reports, and email support — all completely free.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes. You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle with prorated adjustments for any unused time.',
  },
  {
    q: 'How secure is my data?',
    a: 'We use AES-256 encryption for all data at rest and TLS 1.3 in transit. Our infrastructure is SOC 2 Type II certified with a 99.9% uptime SLA and daily encrypted backups.',
  },
  {
    q: 'Can I integrate with other tools?',
    a: 'Yes. KRSI Agrotech offers a full REST API and webhook support for integration with ERP systems, accounting software, logistics platforms, and commodity exchanges.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes — all paid plans come with a 14-day free trial, no credit card required. You get full access to every feature during the trial period.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept all major credit and debit cards, UPI, NEFT/RTGS bank transfers, and invoice billing. Enterprise clients can set up custom payment terms.',
  },
  {
    q: 'How does the 2% donation work?',
    a: '2% of every transaction fee goes directly to the KRSI Farmer Foundation, which provides subsidized inputs, training programs, and crop insurance support to smallholder farmers.',
  },
  {
    q: 'What makes your platform different?',
    a: 'KRSI is the only platform that combines warehouse receipts, agri finance, and commodity trading in a single regulated infrastructure layer — purpose-built for the global agriculture sector.',
  },
];

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, ease: EASE, delay: (index % 4) * 0.07 }}
      style={{
        background: 'linear-gradient(180deg, rgba(246,241,252,0.4) 0%, rgba(255,255,255,0.4) 100%)',
        boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.85)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: 12,
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: '#1c1629', lineHeight: 1.45, flex: 1 }}>
          {faq.q}
        </span>
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{ flexShrink: 0 }}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            d="M9 3v12M3 9h12"
            stroke={open ? '#65940c' : 'rgba(39,60,29,0.4)'}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontSize: 13,
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                color: 'rgba(39,60,29,0.62)',
                lineHeight: 1.7,
                padding: '0 20px 18px',
                margin: 0,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const col1 = FAQS.slice(0, 4);
  const col2 = FAQS.slice(4);

  return (
    <section
      id="faq"
      style={{ padding: '100px 20px', position: 'relative', background: '#fff', overflow: 'hidden' }}
    >
      {/* Radial bg blobs */}
      <div style={{ position: 'absolute', top: '5%', left: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(239,255,224,0.55) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '45%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(246,241,252,0.5) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '8%', left: '30%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,250,220,0.5) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 52,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 500,
              color: '#1c1629',
              margin: 0,
              letterSpacing: '-1.2px',
            }}
          >
            Questions answered
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              fontSize: 14,
              color: 'rgba(39,60,29,0.72)',
              margin: 0,
              maxWidth: 380,
              lineHeight: 1.6,
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            We&apos;re here to help you and solve objections. Find answers to the
            most common questions below.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              borderRadius: 100,
              padding: '10px 24px',
              background: 'linear-gradient(-43deg, rgb(200,212,195) 0%, rgb(97,175,28) 100%)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow:
                '0 4px 14px rgba(97,175,28,0.25), 0 0 0 5px rgba(255,255,255,0.9), 0 0 0 6px rgba(101,148,12,0.12)',
            }}
          >
            Contact Sales Now
          </motion.a>
        </div>

        {/* 2-column FAQ grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {col1.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {col2.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i + 4} />
            ))}
          </div>
        </div>

        {/* Email pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          style={{ marginTop: 36, display: 'flex', justifyContent: 'center' }}
        >
          <a
            href="mailto:hello@krsiagrotech.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              borderRadius: 100,
              padding: '10px 24px',
              background: 'linear-gradient(180deg, rgba(246,241,252,0.5) 0%, rgba(255,255,255,0.5) 100%)',
              boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.85)',
              fontSize: 13,
              color: '#273c1d',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="#65940c" strokeWidth="1.4" />
              <path d="M1 5l6 3.5L13 5" stroke="#65940c" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Feel free to mail us for any enquiries :{' '}
            <span style={{ textDecoration: 'underline' }}>
              hello@krsiagrotech.com
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
