'use client';

import Link from 'next/link';

const NAV_LINKS = ['Product', 'Integrations', 'Success Stories', 'Contact Us', 'Pricing', 'Careers'];

const SOCIAL_ICONS = [
  {
    label: 'Twitter / X',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.5 2h2.5L9.5 7.5 16 14h-4.5L7.5 9.5 3 14H.5L7 8 .5 2H5L8.5 6.5 12.5 2z" fill="#273c1d" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="#273c1d" strokeWidth="1.3" />
        <circle cx="8" cy="8" r="3" stroke="#273c1d" strokeWidth="1.3" />
        <circle cx="11.5" cy="4.5" r="0.8" fill="#273c1d" />
      </svg>
    ),
  },
  {
    label: 'Info',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="#273c1d" strokeWidth="1.3" />
        <path d="M8 7v4.5M8 5.5v.5" stroke="#273c1d" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="#273c1d" strokeWidth="1.3" />
        <path d="M1.8 5.5c2 1 4 1.5 5.7 1.5s3.5-.5 4.7-1.5M3.5 12.5c.5-2 1.8-4.5 2.5-6m2 7.5c-.5-2.5-.5-5-.5-6.5" stroke="#273c1d" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #eef6ea', padding: 0 }}>
      {/* Logo + Socials row */}
      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: '32px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        {/* LOS Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: 'linear-gradient(-43deg, rgb(200,212,195) 0%, rgb(97,175,28) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="5" y="5" width="12" height="12" rx="2.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" />
              <path d="M8 8h6M8 11h6M8 14h4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 16, color: '#1c1629' }}>
            LOS
          </span>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {SOCIAL_ICONS.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && (
                <div style={{ width: 1, height: 16, background: 'rgba(39,60,29,0.15)', margin: '0 16px' }} />
              )}
              <a
                href="#"
                aria-label={s.label}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(101,148,12,0.08)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
              >
                {s.icon}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Nav links */}
      <div style={{ borderTop: '1px solid #eef6ea' }}>
        <div
          style={{
            maxWidth: 1080,
            margin: '0 auto',
            padding: '18px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 36,
            flexWrap: 'wrap',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href="#"
              style={{ fontSize: 13, fontWeight: 500, color: '#273c1d', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#65940c')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#273c1d')}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #eef6ea' }}>
        <div
          style={{
            maxWidth: 1080,
            margin: '0 auto',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: 'rgba(39,60,29,0.45)', margin: 0 }}>
            © 2026 LanderOS
          </p>
          <p style={{ fontSize: 12, color: 'rgba(39,60,29,0.45)', margin: 0 }}>
            Made by{' '}
            <a href="#" style={{ color: 'rgba(39,60,29,0.65)', textDecoration: 'underline' }}>Framebase</a>
            {'  '}Built in{' '}
            <a href="#" style={{ color: 'rgba(39,60,29,0.65)', textDecoration: 'underline' }}>Framer</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
