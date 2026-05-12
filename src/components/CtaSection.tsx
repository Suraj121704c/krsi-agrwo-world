'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CtaSection() {
  return (
    <section
      id="contact"
      style={{ padding: '0 20px 100px', background: '#fff' }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            background: 'linear-gradient(135deg, rgba(180,215,150,0.6) 0%, rgba(220,240,200,0.4) 40%, rgba(240,250,230,0.2) 100%)',
            borderRadius: 24,
            padding: '72px 48px 64px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(101,148,12,0.12)',
          }}
        >
          {/* Decorative cloud shapes bottom-left */}
          <div
            style={{
              position: 'absolute',
              bottom: -40,
              left: -20,
              width: 280,
              height: 200,
              borderRadius: '50%',
              background: 'rgba(200,230,170,0.35)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -20,
              left: 60,
              width: 180,
              height: 140,
              borderRadius: '50%',
              background: 'rgba(220,245,190,0.4)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                color: '#1c1629',
                margin: '0 0 16px',
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
              }}
            >
              Unlock the Future of
              <br />
              Agriculture Finance
            </h2>
            <p
              style={{
                fontSize: 15,
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                color: 'rgba(39,60,29,0.6)',
                maxWidth: 440,
                margin: '0 auto 32px',
                lineHeight: 1.65,
              }}
            >
              Transform commodity storage, financing, and trade with AI-powered
              infrastructure built for the modern agricultural economy.
            </p>

            {/* Feature pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  borderRadius: 100,
                  padding: '8px 18px',
                  background: 'rgba(255,255,255,0.6)',
                  boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.9)',
                  border: '1px solid rgba(101,148,12,0.15)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#273c1d',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="8" rx="2" stroke="#65940c" strokeWidth="1.4" />
                  <circle cx="7" cy="7" r="2" stroke="#65940c" strokeWidth="1.2" />
                </svg>
                Fully Transparent
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  borderRadius: 100,
                  padding: '8px 18px',
                  background: 'rgba(255,255,255,0.6)',
                  boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.9)',
                  border: '1px solid rgba(101,148,12,0.15)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#273c1d',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="5" cy="5.5" r="2.5" stroke="#65940c" strokeWidth="1.3" />
                  <path d="M1 12c0-2.2 1.8-4 4-4h.5M9.5 13v-1.5m0 0a2 2 0 100-4 2 2 0 000 4z" stroke="#65940c" strokeWidth="1.3" strokeLinecap="round" />
                  <path d="M8 10.5h3" stroke="#65940c" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                10k+ farmer trust us
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:hello@krsiagrotech.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                borderRadius: 100,
                padding: 6,
                boxShadow: '0 0 1px 1px white, 0 2px 4px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.28)',
                background: 'linear-gradient(-43.56deg, rgb(200,212,195) 0%, rgb(97,175,28) 100%)',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  borderRadius: 100,
                  padding: '10px 24px',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#fff',
                  borderBottom: '1.25px solid rgba(255,255,255,0.42)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
                  <path d="M6 8h4M8.5 6l2 2-2 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Book A Free Call Now
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
