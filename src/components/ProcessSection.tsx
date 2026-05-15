'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const STEPS = [
  {
    step: 'Step 1',
    title: 'Storage & Warehousing',
    desc: 'List your warehouse capacity and commodities. Get verified quality assurance and seamless inventory management across your entire supply chain.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M3 11L13 5l10 6v10H3V11z" stroke="#65940c" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M10 21v-6h6v6" stroke="#65940c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: 'Step 2',
    title: 'Finance & Credit',
    desc: 'Access flexible agri financing against your stored commodities. Get working capital, trade credit, and digital lending tailored for farmers.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9.5" stroke="#65940c" strokeWidth="1.7" />
        <path d="M13 8v1.5m0 7v1.5M10 12.5h3a1.5 1.5 0 010 3h-3" stroke="#65940c" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M10 12.5h4.5" stroke="#65940c" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: 'Step 3',
    title: 'Global Trade',
    desc: 'Trade your commodities globally with full trust and transparency. Connect with verified buyers and sellers across international agri markets.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9.5" stroke="#65940c" strokeWidth="1.7" />
        <path d="M3.5 13h19M13 3.5c-2 3.5-2 15.5 0 19M13 3.5c2 3.5 2 15.5 0 19" stroke="#65940c" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STATS = [
  { value: '10k+', label: 'Listed Warehouses' },
  { value: '250k+', label: 'Total Trades' },
  { value: '10k+', label: 'Farmers Onboarded' },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        padding: '100px 20px',
        position: 'relative',
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Section green top-fade bg — straight rectangle, no circular curve */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 460,
          background:
            'linear-gradient(180deg, rgba(244,252,241,0.95) 0%, rgba(244,252,241,0.55) 45%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              borderRadius: 100,
              padding: '5px 16px',
              background: 'linear-gradient(180deg, rgba(246,241,252,0.55) 0%, rgba(255,255,255,0.55) 100%)',
              boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.85)',
              border: '1px solid rgba(101,148,12,0.12)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#65940c',
              textTransform: 'uppercase' as const,
              marginBottom: 20,
            }}
          >
            Process
          </span>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <div style={{ flex: 1, maxWidth: 100, height: 1, background: '#eef6ea' }} />
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 500,
                color: '#273c1d',
                margin: 0,
                letterSpacing: '-1.2px',
              }}
            >
              Performance Through Process
            </h2>
            <div style={{ flex: 1, maxWidth: 100, height: 1, background: '#eef6ea' }} />
          </div>

          <p
            style={{
              fontSize: 15,
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              color: 'rgba(39,60,29,0.5)',
              marginTop: 16,
              maxWidth: 460,
              margin: '16px auto 0',
              lineHeight: 1.65,
            }}
          >
            Our streamlined three-step process connects warehouse operators, financiers, and global traders in one unified platform.
          </p>
        </motion.div>

        {/* 3 cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 20,
            marginBottom: 56,
          }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.1 }}
              style={{
                background: 'linear-gradient(180deg, rgba(237,237,237,0.5) 0%, rgba(255,255,255,0.5) 100%)',
                boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.9)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                borderRadius: 16,
                padding: '32px 28px',
                position: 'relative',
              }}
            >
              {/* Step badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  borderRadius: 100,
                  padding: '4px 13px',
                  background: 'linear-gradient(180deg, rgba(246,241,252,0.65) 0%, rgba(255,255,255,0.65) 100%)',
                  boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.9)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#273c1d',
                }}
              >
                {step.step}
              </div>

              {/* Icon box */}
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 10,
                  background: 'linear-gradient(180deg, rgba(246,252,241,0.75) 0%, rgba(255,255,255,0.75) 100%)',
                  boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  fontSize: 20,
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  color: '#1c1629',
                  margin: '0 0 10px',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(39,60,29,0.6)', lineHeight: 1.65, margin: 0 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            borderRadius: 16,
            background: 'linear-gradient(180deg, rgba(246,241,252,0.35) 0%, rgba(255,255,255,0.35) 100%)',
            boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.9)',
            overflow: 'hidden',
            flexWrap: 'wrap',
          }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 180 }}>
              <div style={{ padding: '36px 48px', textAlign: 'center', flex: 1 }}>
                <p
                  style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 700,
                    color: '#65940c',
                    margin: '0 0 4px',
                    letterSpacing: '-1px',
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: 13, color: '#273c1d', margin: 0, fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
              {i < STATS.length - 1 && (
                <div style={{ width: 1, height: 48, background: '#eef6ea', flexShrink: 0 }} />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
