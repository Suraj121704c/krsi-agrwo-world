'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Process', href: '#process' },
  { label: 'Features', href: '#features' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
];

const glassStyle: React.CSSProperties = {
  background: 'linear-gradient(180deg, rgba(246,241,252,0.65) 0%, rgba(255,255,255,0.65) 100%)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.95)',
  borderRadius: 100,
  boxShadow: '0px 1px 3px rgba(0,0,0,0.06), 0px 4px 24px rgba(0,0,0,0.04)',
};

const ctaStyle: React.CSSProperties = {
  background: 'linear-gradient(-57deg, rgb(200,212,195) 0%, rgb(97,175,28) 100%)',
  borderRadius: 100,
  color: '#fff',
  fontWeight: 600,
  fontSize: 14,
  padding: '9px 20px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  border: '1px solid rgba(255,255,255,0.3)',
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ position: 'fixed', top: 20, left: 0, right: 0, zIndex: 100, pointerEvents: 'none' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 16px', pointerEvents: 'auto' }}>
        <nav
          style={{
            ...glassStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 8px 8px 20px',
            gap: 8,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: 'linear-gradient(-43deg, rgb(200,212,195) 0%, rgb(97,175,28) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5C4.5 1.5 2 4 2 7s2 5.5 5 5.5 5-2.5 5-5.5S9.5 1.5 7 1.5z" fill="rgba(255,255,255,0.85)" />
                <path d="M4 8.5C5 6 7 5 10 6M5 5c.5 1.5.5 3.5 0 5" stroke="rgba(39,60,29,0.9)" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 14, color: '#1c1629', letterSpacing: '-0.2px' }}>
              KRSI Agrotech
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 22, alignItems: 'center' }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{ fontSize: 14, fontWeight: 500, color: '#273c1d', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#65940c')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#273c1d')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link href="#contact" style={ctaStyle} className="hidden md:inline-flex">
            Book a Call
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" stroke="#273c1d" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="16" y1="4" x2="4" y2="16" stroke="#273c1d" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" stroke="#273c1d" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="10" x2="17" y2="10" stroke="#273c1d" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="14" x2="17" y2="14" stroke="#273c1d" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              style={{ ...glassStyle, marginTop: 8, borderRadius: 24, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ fontSize: 14, fontWeight: 500, color: '#273c1d', textDecoration: 'none' }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#contact" style={{ ...ctaStyle, justifyContent: 'center', marginTop: 4 }} onClick={() => setOpen(false)}>
                Book a Call
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
