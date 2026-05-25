"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SOCIAL_ICONS = [
  {
    label: "Twitter / X",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M13.5 2.5h2.5L10.5 8.5 17 15.5h-4.5L8.5 10.5 3.5 15.5H1L7 9 1 2.5h4.5L9.5 7 13.5 2.5z"
          stroke="#273c1d"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect
          x="2"
          y="2"
          width="14"
          height="14"
          rx="4"
          stroke="#273c1d"
          strokeWidth="1.3"
        />
        <circle cx="9" cy="9" r="3.5" stroke="#273c1d" strokeWidth="1.3" />
        <circle cx="13" cy="5" r="1" fill="#273c1d" />
      </svg>
    ),
  },
  {
    label: "Info",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#273c1d" strokeWidth="1.3" />
        <path
          d="M9 8v5M9 6v.5"
          stroke="#273c1d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#273c1d" strokeWidth="1.3" />
        <path
          d="M2.5 6.5C4.5 7.5 7 8 9 8s4.5-.5 6-2M5 14c.5-2 2-5 3-7m1.5 9c-.5-2.5-.5-5-.5-7"
          stroke="#273c1d"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      style={{ padding: "100px 20px 80px", background: "#fff" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* Header — left-aligned */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ flexShrink: 0, maxWidth: 440 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 16,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1C4 1 2 3.5 2 6s1.5 4 4 5c2.5-1 4-2.5 4-5S10 1 7 1z"
                  fill="#65940c"
                  fillOpacity="0.7"
                />
              </svg>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#65940c",
                  textTransform: "uppercase" as const,
                }}
              >
                Community
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                color: "#1c1629",
                margin: "0 0 14px",
                letterSpacing: "-1px",
                lineHeight: 1.15,
              }}
            >
              Check our community
            </h2>
            <p
              style={{
                fontSize: 14,
                fontFamily: "var(--font-inter), Inter, sans-serif",
                color: "#1c1629",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Participate in our Discord group to network with other
              individuals. Here, you&apos;re invited to inquire, discuss, and
              open support requests.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            style={{
              flex: 1,
              height: 1,
              background: "#eef6ea",
              transformOrigin: "left",
              marginTop: 56,
              alignSelf: "flex-start",
            }}
          />
        </div>

        {/* Community cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {[
            {
              name: "Discord",
              desc: "Join our Discord and connect with social media creators, enthusiasts, share ideas, and grow together.",
              count: "15k members",
              color: "#5865F2",
              icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M18.4 4.7A17.4 17.4 0 0014 3.4a12 12 0 00-.6 1.2 16 16 0 00-4.8 0A12 12 0 008 3.4a17.5 17.5 0 00-4.4 1.3C1 8.8.5 13 .8 17.1a17.5 17.5 0 005.3 2.7 13.3 13.3 0 001.1-1.8 11.4 11.4 0 01-1.8-.9l.5-.3a12.5 12.5 0 0010.8 0l.5.3a11.4 11.4 0 01-1.8.9 13.3 13.3 0 001.1 1.8 17.4 17.4 0 005.3-2.7c.4-4.6-.7-8.7-3.4-12.4zM7.3 14.7c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.8 2.2-1.9 2.2zm7.4 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.8 2.2-1.9 2.2z"
                    fill="#5865F2"
                  />
                </svg>
              ),
            },
            {
              name: "Twitter",
              desc: "Join our Twitter, where we share our updates and also lot of guides, tips with guests who already excelled.",
              count: "25k followers",
              color: "#000",
              icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M17 3h3L13 10.5 21 19h-5.5L10 12.5 4.5 19H1.5L9 11 1.5 3H7l4.5 6L17 3z"
                    fill="#000"
                  />
                </svg>
              ),
            },
          ].map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(237,237,237,0.45) 0%, rgba(255,255,255,0.45) 100%)",
                boxShadow:
                  "0 2px 8px rgba(16,24,40,0.04), inset 0 0 1px 1px rgba(255,255,255,0.9)",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: 16,
                padding: "24px 24px 20px",
                position: "relative",
              }}
            >
              {/* Arrow link */}
              <a
                href="#"
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                    stroke="#273c1d"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Logo + Name */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background:
                      card.name === "Discord"
                        ? "rgba(88,101,242,0.1)"
                        : "rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </div>
                <span
                  style={{
                    fontSize: 16,
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 700,
                    color: "#1c1629",
                  }}
                >
                  {card.name}
                </span>
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: "#1c1629",
                  lineHeight: 1.6,
                  margin: "0 0 16px",
                  paddingRight: 32,
                }}
              >
                {card.desc}
              </p>

              {/* Pills */}
              <div style={{ display: "flex", gap: 8 }}>
                {[card.count, "Community"].map((pill) => (
                  <span
                    key={pill}
                    style={{
                      borderRadius: 100,
                      padding: "4px 12px",
                      background: "rgba(101,148,12,0.08)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#65940c",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Socials row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: 20 }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#1c1629",
            }}
          >
            Socials :
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {SOCIAL_ICONS.map((s, i) => (
              <div
                key={s.label}
                style={{ display: "flex", alignItems: "center" }}
              >
                {i > 0 && (
                  <div
                    style={{
                      width: 1,
                      height: 16,
                      background: "#eef6ea",
                      margin: "0 16px",
                    }}
                  />
                )}
                <a
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "rgba(101,148,12,0.08)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "transparent")
                  }
                >
                  {s.icon}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
