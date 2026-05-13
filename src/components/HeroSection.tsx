'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { y: 32, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.72, ease: EASE } },
};

const BRAND_LOGOS = [
  '/images/brand-logo-1.svg',
  '/images/brand-logo-2.svg',
  '/images/brand-logo-3.svg',
  '/images/brand-logo-4.svg',
  '/images/brand-logo-5.svg',
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Soft white overlay — fades the video so foreground content stays readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.92) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Radial green ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1100,
          height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(101,148,12,0.09) 0%, rgba(97,175,28,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 20px',
          maxWidth: 860,
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Badge */}
        <motion.div variants={fadeUp} style={{ marginBottom: 36 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              borderRadius: 100,
              padding: '7px 18px',
              background: 'linear-gradient(180deg, rgba(246,241,252,0.55) 0%, rgba(255,255,255,0.55) 100%)',
              boxShadow: 'inset 0 0 1px 1px rgba(255,255,255,0.75)',
              border: '1px solid rgba(255,255,255,0.8)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: '#273c1d',
              textTransform: 'uppercase' as const,
            }}
          >
            <span
              className="animate-blink"
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#65940c', flexShrink: 0 }}
            />
            New Gen AI Powered Agri Finance Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontSize: 'clamp(42px, 6.5vw, 86px)',
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 500,
            color: '#1c1629',
            letterSpacing: '-3.44px',
            lineHeight: 1.1,
            margin: '0 0 28px',
          }}
        >
          Infra Layer for Global
          <br />
          Agri Commodities
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontWeight: 500,
            color: 'rgba(28,22,41,0.5)',
            lineHeight: 1.7,
            maxWidth: 520,
            margin: '0 0 44px',
          }}
        >
          Empowering farmers globally with transparent commodity trading,
          flexible agri finance, and secure warehouse management solutions.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} style={{ marginBottom: 68 }}>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              borderRadius: 100,
              padding: 6,
              boxShadow: '0 0 1px 1px white, 0 2px 4px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.32)',
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
                padding: '11px 24px',
                fontSize: 16,
                fontWeight: 600,
                color: '#fff',
                borderBottom: '1.25px solid rgba(255,255,255,0.42)',
              }}
            >
              Book A Free Call Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Brand logos */}
        <motion.div variants={fadeUp} style={{ width: '100%' }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'rgba(39,60,29,0.35)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Trusted by leading agri companies
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 54,
              flexWrap: 'wrap',
              opacity: 0.9,
            }}
          >
            {BRAND_LOGOS.map((src) => (
              <Image
                key={src}
                src={src}
                alt="Partner logo"
                width={90}
                height={30}
                style={{ height: 22, width: 'auto', objectFit: 'contain', filter: 'brightness(0) opacity(0.28)' }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
