'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TICKER_ITEMS = [
  {
    label: 'Scalable Solutions',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="7" width="5" height="5" rx="1.5" stroke="#273c1d" strokeWidth="1.3" />
        <rect x="8" y="4" width="5" height="8" rx="1.5" stroke="#273c1d" strokeWidth="1.3" />
        <path d="M3.5 7V4M10.5 4V2" stroke="#273c1d" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Real-Time Insights',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="#273c1d" strokeWidth="1.3" />
        <path d="M8 8V4.5M8 8l3 2" stroke="#273c1d" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Virtual Assistance',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="10" height="7" rx="2" stroke="#273c1d" strokeWidth="1.3" />
        <path d="M4 14l2-4M8 14l-2-4" stroke="#273c1d" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="13" cy="5" r="2.5" stroke="#273c1d" strokeWidth="1.3" />
        <path d="M13 4.5v1M13 6.5v.2" stroke="#273c1d" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Cost Effective',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="#273c1d" strokeWidth="1.3" />
        <path d="M8 5v1m0 4v1M6 9.5h2a1.5 1.5 0 000-3H8A1.5 1.5 0 018 4h1.5" stroke="#273c1d" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Faster Innovation',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2l1.5 4h4l-3 2.5 1 4L8 10l-3.5 2.5 1-4L2.5 6h4L8 2z" stroke="#273c1d" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
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
                borderRadius: '12px 12px 12px 12px',
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
            style={{ ...cardStyle, background: '#edf7e4', padding: '28px 28px 0', display: 'flex', flexDirection: 'column' }}
          >
            <p style={{ fontSize: 18, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, color: '#1c1629', margin: '0 0 8px' }}>
              Tokenized Agricultural Assets
            </p>
            <p style={{ fontSize: 13, color: 'rgba(39,60,29,0.6)', margin: '0 0 24px', lineHeight: 1.55 }}>
              Turn commodities into secure, tradable digital assets.
            </p>

            <div
              style={{
                background: '#fff',
                borderRadius: '12px 12px 12px 12px',
                border: '1px solid rgba(0,0,0,0.07)',
                borderBottom: 'none',
                overflow: 'hidden',
                fontFamily: 'monospace',
                fontSize: 11,
                position: 'relative' as const,
                height: 240,
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 16px',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                  background: '#fafafa',
                }}
              >
                <span style={{ fontSize: 11, color: 'rgba(39,60,29,0.5)' }}>
                  Name : <span style={{ color: '#273c1d', fontWeight: 500 }}>AI_development.py</span>
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="6" cy="6" r="4.5" stroke="rgba(39,60,29,0.3)" strokeWidth="1.2" />
                    <path d="M9.5 9.5l2.5 2.5" stroke="rgba(39,60,29,0.3)" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#65940c' }} />
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(39,60,29,0.2)' }} />
                </div>
              </div>
              {/* Scrolling code — fixed viewport, lines loop upward */}
              <div className="code-scroll-outer" style={{ height: 160 }}>
                <div className="animate-scroll-up" style={{ paddingTop: 6 }}>
                  {[...[
                    { num: 1,  text: 'class AIAgent:' },
                    { num: 2,  text: '    def __init__(self, limit):' },
                    { num: 3,  text: '        self.limit = limit' },
                    { num: 4,  text: '        self.mode = "idle"' },
                    { num: 5,  text: '' },
                    { num: 6,  text: '    def evaluate(self, value):' },
                    { num: 7,  text: '        if value > self.limit:' },
                    { num: 8,  text: '            self.mode = "active"' },
                    { num: 9,  text: '            return True' },
                    { num: 10, text: '        return False' },
                    { num: 11, text: '' },
                    { num: 12, text: '    def reset(self):' },
                    { num: 13, text: '        self.mode = "idle"' },
                  ], ...[
                    { num: 1,  text: 'class AIAgent:' },
                    { num: 2,  text: '    def __init__(self, limit):' },
                    { num: 3,  text: '        self.limit = limit' },
                    { num: 4,  text: '        self.mode = "idle"' },
                    { num: 5,  text: '' },
                    { num: 6,  text: '    def evaluate(self, value):' },
                    { num: 7,  text: '        if value > self.limit:' },
                    { num: 8,  text: '            self.mode = "active"' },
                    { num: 9,  text: '            return True' },
                    { num: 10, text: '        return False' },
                    { num: 11, text: '' },
                    { num: 12, text: '    def reset(self):' },
                    { num: 13, text: '        self.mode = "idle"' },
                  ]].map(({ num, text }, i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, padding: '3px 14px' }}>
                      <span style={{ color: 'rgba(39,60,29,0.2)', minWidth: 18, textAlign: 'right', userSelect: 'none' as const }}>{num}</span>
                      <span style={{ color: 'rgba(39,60,29,0.65)', whiteSpace: 'pre' as const }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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

        {/* Ticker strip — auto-scrolling marquee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ padding: '10px 0', background: 'transparent' }}
        >
          <div className="marquee-outer">
            <div className="animate-marquee" style={{ gap: 12, padding: '0 6px' }}>
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '9px 20px',
                    borderRadius: 100,
                    background: '#f4fcf1',
                    border: '1px solid rgba(101,148,12,0.12)',
                    flexShrink: 0,
                    marginRight: 12,
                  }}
                >
                  {item.icon}
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#273c1d', whiteSpace: 'nowrap' }}>
                    <span style={{ fontWeight: 700, color: '#1c1629' }}>{item.label.split(' ')[0]}</span>
                    {' ' + item.label.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
