'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TICKER_ITEMS = [
  { icon: '⬡', label: 'Scalable Solutions' },
  { icon: '◎', label: 'Real-Time Insights' },
  { icon: '✦', label: 'Virtual Assistance' },
  { icon: '⊕', label: 'Cost Effective' },
  { icon: '➶', label: 'Faster Innovation' },
];

const cardStyle: React.CSSProperties = {
  background: 'linear-gradient(180deg, rgba(237,237,237,0.48) 0%, rgba(255,255,255,0.48) 100%)',
  boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.9)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  borderRadius: 16,
  overflow: 'hidden',
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{ padding: '100px 20px', background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      {/* Radial bg */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1100,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(244,252,241,0.85) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
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
            Features
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
              Powering Commodity Finance
            </h2>
            <div style={{ flex: 1, maxWidth: 100, height: 1, background: '#eef6ea' }} />
          </div>

          <p
            style={{
              fontSize: 15,
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              color: 'rgba(39,60,29,0.5)',
              maxWidth: 480,
              margin: '16px auto 0',
              lineHeight: 1.65,
            }}
          >
            Powerful infrastructure for commodity storage, financing, monitoring, and global agricultural trade.
          </p>
        </motion.div>

        {/* Row 1: Large left card + Right stacked cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 16, marginBottom: 16 }}>
          {/* AI Risk Intelligence — large left card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ ...cardStyle, padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <div>
              <h3
                style={{
                  fontSize: 28,
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  color: '#1c1629',
                  margin: '0 0 20px',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2,
                }}
              >
                AI Risk Intelligence
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {[
                  'Automate commodity finance, storage, and trade.',
                  'Drive faster decisions and higher efficiency.',
                ].map((pt) => (
                  <div key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: '#65940c', fontWeight: 700, fontSize: 16, lineHeight: 1.4, flexShrink: 0 }}>✕</span>
                    <span style={{ fontSize: 14, color: '#273c1d', fontWeight: 500, lineHeight: 1.5 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two sub-cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                {
                  title: 'Data-driven',
                  desc: 'Use real-time market and commodity data for smarter decisions and better returns.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <ellipse cx="11" cy="6" rx="7" ry="2.5" stroke="#65940c" strokeWidth="1.5" />
                      <path d="M4 6v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V6" stroke="#65940c" strokeWidth="1.5" />
                      <path d="M4 11v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" stroke="#65940c" strokeWidth="1.5" />
                    </svg>
                  ),
                },
                {
                  title: 'Efficient Growth',
                  desc: 'Faster financing, seamless operations, and better liquidity across agriculture supply chain.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <rect x="2" y="13" width="4" height="7" rx="1" stroke="#65940c" strokeWidth="1.5" />
                      <rect x="9" y="9" width="4" height="11" rx="1" stroke="#65940c" strokeWidth="1.5" />
                      <rect x="16" y="4" width="4" height="16" rx="1" stroke="#65940c" strokeWidth="1.5" />
                    </svg>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    borderRadius: 12,
                    padding: '18px 16px',
                    boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.9)',
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 8,
                      background: 'linear-gradient(180deg, rgba(246,252,241,0.8) 0%, rgba(255,255,255,0.8) 100%)',
                      boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 12,
                    }}
                  >
                    {card.icon}
                  </div>
                  <p style={{ fontSize: 14, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, color: '#1c1629', margin: '0 0 6px' }}>
                    {card.title}
                  </p>
                  <p style={{ fontSize: 12, color: 'rgba(39,60,29,0.6)', margin: 0, lineHeight: 1.55 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column: Real-Time Monitoring card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            style={{ ...cardStyle, padding: '28px 28px 0', display: 'flex', flexDirection: 'column' }}
          >
            <p style={{ fontSize: 18, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, color: '#1c1629', margin: '0 0 8px' }}>
              Real-Time Monitoring
            </p>
            <p style={{ fontSize: 13, color: 'rgba(39,60,29,0.6)', margin: '0 0 28px', lineHeight: 1.55 }}>
              AI &amp; IoT monitor commodity quality and storage conditions in real time.
            </p>

            {/* Network graph illustration */}
            <div
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.65)',
                borderRadius: '12px 12px 0 0',
                position: 'relative',
                minHeight: 220,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <svg width="320" height="200" viewBox="0 0 320 200" fill="none" style={{ position: 'absolute' }}>
                {/* Connection lines */}
                <line x1="90" y1="100" x2="160" y2="60" stroke="rgba(101,148,12,0.2)" strokeWidth="1.5" />
                <line x1="160" y1="60" x2="240" y2="90" stroke="rgba(101,148,12,0.2)" strokeWidth="1.5" />
                <line x1="90" y1="100" x2="160" y2="140" stroke="rgba(101,148,12,0.2)" strokeWidth="1.5" />
                <line x1="160" y1="140" x2="240" y2="90" stroke="rgba(101,148,12,0.2)" strokeWidth="1.5" />
                <line x1="160" y1="60" x2="160" y2="140" stroke="rgba(101,148,12,0.15)" strokeWidth="1" />
                <line x1="90" y1="100" x2="240" y2="90" stroke="rgba(101,148,12,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                {/* Nodes */}
                <circle cx="90" cy="100" r="22" fill="rgba(200,212,195,0.5)" stroke="rgba(97,175,28,0.3)" strokeWidth="1.5" />
                <circle cx="90" cy="100" r="13" fill="rgba(101,148,12,0.15)" />
                <circle cx="160" cy="60" r="28" fill="rgba(200,212,195,0.55)" stroke="rgba(97,175,28,0.35)" strokeWidth="1.5" />
                <circle cx="160" cy="60" r="18" fill="rgba(101,148,12,0.18)" />
                <circle cx="240" cy="90" r="32" fill="rgba(200,212,195,0.6)" stroke="rgba(97,175,28,0.4)" strokeWidth="1.5" />
                <circle cx="240" cy="90" r="20" fill="rgba(101,148,12,0.2)" />
                <circle cx="160" cy="140" r="20" fill="rgba(200,212,195,0.45)" stroke="rgba(97,175,28,0.25)" strokeWidth="1.5" />
                <circle cx="160" cy="140" r="12" fill="rgba(101,148,12,0.12)" />
              </svg>

              {/* Warehouse Monitoring pill */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  borderRadius: 100,
                  padding: '8px 18px',
                  background: 'linear-gradient(-43deg, rgb(200,212,195) 0%, rgb(97,175,28) 100%)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                Warehouse Monitoring
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Tokenized Assets + Chatbots */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
          {/* Tokenized Agricultural Assets */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ ...cardStyle, padding: '28px 28px 0', display: 'flex', flexDirection: 'column' }}
          >
            <p style={{ fontSize: 18, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, color: '#1c1629', margin: '0 0 8px' }}>
              Tokenized Agricultural Assets
            </p>
            <p style={{ fontSize: 13, color: 'rgba(39,60,29,0.6)', margin: '0 0 24px', lineHeight: 1.55 }}>
              Turn commodities into secure, tradable digital assets.
            </p>

            {/* Code editor mockup */}
            <div
              style={{
                flex: 1,
                background: '#1e1e2e',
                borderRadius: '10px 10px 0 0',
                padding: '14px 18px',
                minHeight: 200,
                fontFamily: 'monospace',
                fontSize: 11,
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, color: 'rgba(255,255,255,0.4)', fontSize: 10 }}>
                <span>Name: <span style={{ color: 'rgba(255,255,255,0.7)' }}>commodity_token.py</span></span>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span style={{ cursor: 'pointer' }}>+</span>
                  <span style={{ cursor: 'pointer' }}>×</span>
                </div>
              </div>
              {[
                { num: 1, text: '' },
                { num: 2, text: <><span style={{ color: '#c792ea' }}>def</span> <span style={{ color: '#82aaff' }}>__init__</span><span style={{ color: '#89ddff' }}>(</span><span style={{ color: '#f78c6c' }}>self</span>, commodity_id<span style={{ color: '#89ddff' }}>):</span></> },
                { num: 3, text: <><span style={{ color: '#f78c6c' }}>    self</span>.commodity_id <span style={{ color: '#89ddff' }}>=</span> commodity_id</> },
                { num: 4, text: <><span style={{ color: '#f78c6c' }}>    self</span>.token_status <span style={{ color: '#89ddff' }}>=</span> <span style={{ color: '#c3e88d' }}>"pending"</span></> },
                { num: 5, text: '' },
                { num: 6, text: <><span style={{ color: '#c792ea' }}>def</span> <span style={{ color: '#82aaff' }}>tokenize</span><span style={{ color: '#89ddff' }}>(</span><span style={{ color: '#f78c6c' }}>self</span>, weight_kg<span style={{ color: '#89ddff' }}>):</span></> },
                { num: 7, text: <><span style={{ color: '#89ddff' }}>    if</span> weight_kg <span style={{ color: '#89ddff' }}>{'>'}</span> <span style={{ color: '#f78c6c' }}>0</span>:</> },
                { num: 8, text: <><span style={{ color: '#f78c6c' }}>        self</span>.token_status <span style={{ color: '#89ddff' }}>=</span> <span style={{ color: '#c3e88d' }}>"active"</span></> },
                { num: 9, text: <><span style={{ color: '#89ddff' }}>        return</span> <span style={{ color: '#c3e88d' }}>"Token minted successfully"</span></> },
              ].map(({ num, text }) => (
                <div key={num} style={{ display: 'flex', gap: 16, marginBottom: 3 }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)', minWidth: 12, textAlign: 'right', userSelect: 'none' }}>{num}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Chatbots & virtual assistants */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            style={{ ...cardStyle, padding: '28px 28px 0', display: 'flex', flexDirection: 'column' }}
          >
            <p style={{ fontSize: 18, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, color: '#1c1629', margin: '0 0 8px' }}>
              Chatbots &amp; virtual assistants
            </p>
            <p style={{ fontSize: 13, color: 'rgba(39,60,29,0.6)', margin: '0 0 24px', lineHeight: 1.55 }}>
              Engage customers 24/7 with intelligent virtual assistants.
            </p>

            {/* Chat UI mockup */}
            <div
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '10px 10px 0 0',
                padding: '20px 18px',
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {/* Typing indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'rgba(246,252,241,0.8)',
                  borderRadius: 10,
                  padding: '10px 14px',
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: 'linear-gradient(-43deg, rgb(200,212,195) 0%, rgb(97,175,28) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l2.5 2.5L10 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 500, color: '#273c1d', flex: 1 }}>Creating Content Now</span>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[0, 1].map((i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i === 0 ? 'rgba(101,148,12,0.5)' : 'rgba(101,148,12,0.2)' }} />
                  ))}
                </div>
              </div>

              {/* Placeholder lines */}
              <div style={{ background: 'rgba(0,0,0,0.04)', borderRadius: 6, height: 8, width: '90%' }} />
              <div style={{ background: 'rgba(0,0,0,0.04)', borderRadius: 6, height: 8, width: '70%' }} />

              {/* Icons row */}
              <div style={{ display: 'flex', gap: 20, padding: '8px 0' }}>
                {[1, 2].map((i) => (
                  <div key={i} style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="3" y="5" width="14" height="10" rx="2" stroke="rgba(39,60,29,0.3)" strokeWidth="1.4" />
                      <path d="M6 9h8M6 12h5" stroke="rgba(39,60,29,0.3)" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Input row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#fff',
                  borderRadius: 10,
                  padding: '8px 12px',
                  border: '1px solid rgba(0,0,0,0.07)',
                  marginTop: 'auto',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7.5L5 10.5l7-7" stroke="rgba(39,60,29,0.3)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 12, color: 'rgba(39,60,29,0.5)', flex: 1 }}>Create a banner</span>
                <div
                  style={{
                    borderRadius: 6,
                    padding: '5px 12px',
                    background: 'linear-gradient(-43deg, rgb(200,212,195) 0%, rgb(97,175,28) 100%)',
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  Create
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ticker strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{
            ...cardStyle,
            padding: '16px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {TICKER_ITEMS.map((item, i) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, justifyContent: 'center', minWidth: 140 }}>
              {i > 0 && (
                <div style={{ position: 'absolute', marginLeft: -16, width: 1, height: 20, background: '#eef6ea' }} />
              )}
              <span style={{ color: '#65940c', fontSize: 14 }}>{item.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#273c1d' }}>
                {item.label.split(' ').map((word, wi) => (
                  <span key={wi}>
                    {wi === 0 ? <span style={{ fontWeight: 700, color: '#1c1629' }}>{word}</span> : ` ${word}`}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
