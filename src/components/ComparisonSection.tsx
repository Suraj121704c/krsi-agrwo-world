"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const US_ITEMS = [
  "AI Based Collateral Monitoring.",
  "Blockchain Powered Receipts.",
  "Tokenized Commodity Assets.",
  "Real Time Commodity Tracking.",
  "End to End Storage, Finance & Trade.",
];

const OTHERS_ITEMS = [
  "Manual monitoring with limited visibility.",
  "Paper-based or centralized warehouse receipts.",
  "No tokenized or on chain commodity assets.",
  "Limited or delayed commodity tracking.",
  "Fragmented storage, finance, and trading systems.",
];

const rowStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(237,237,237,0.4) 0%, rgba(255,255,255,0.4) 100%)",
  boxShadow: "inset 0 0 1px 1px rgba(255,255,255,0.9)",
  borderRadius: 10,
  padding: "14px 18px",
  fontSize: 14,
  fontFamily: "var(--font-inter), Inter, sans-serif",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: 12,
};

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      style={{
        padding: "100px 20px",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              borderRadius: 100,
              padding: "5px 16px",
              background:
                "linear-gradient(180deg, rgba(246,241,252,0.55) 0%, rgba(255,255,255,0.55) 100%)",
              boxShadow: "inset 0 0 1px 1px rgba(255,255,255,0.85)",
              border: "1px solid rgba(101,148,12,0.12)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#65940c",
              textTransform: "uppercase" as const,
              marginBottom: 20,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="#65940c" strokeWidth="1.2" />
              <path
                d="M3 5l1.5 1.5L7 3.5"
                stroke="#65940c"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Comparision
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                flex: 1,
                maxWidth: 160,
                height: 1,
                background: "#eef6ea",
              }}
            />
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 500,
                color: "#273c1d",
                margin: 0,
                letterSpacing: "-1.2px",
              }}
            >
              Why Choose Us
            </h2>
            <div
              style={{
                flex: 1,
                maxWidth: 160,
                height: 1,
                background: "#eef6ea",
              }}
            />
          </div>

          <p
            style={{
              fontSize: 15,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(39,60,29,0.5)",
              maxWidth: 500,
              margin: "16px auto 0",
              lineHeight: 1.65,
            }}
          >
            We empower farmers, warehouses, banks, and agribusinesses with
            intelligent infrastructure for commodity storage, financing, and
            trade.
          </p>
        </motion.div>

        {/* Comparison table */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          {/* Us — Lander OS / KRSI */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            {/* Column header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(79,70,229,0.25)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="14"
                    height="14"
                    rx="3"
                    fill="rgba(255,255,255,0.9)"
                  />
                  <path
                    d="M5.5 9l2.5 2.5L12.5 6.5"
                    stroke="#4f46e5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  color: "#1c1629",
                }}
              >
                Lander OS
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {US_ITEMS.map((item) => (
                <div key={item} style={{ ...rowStyle, color: "#273c1d" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M3 8.5l3.5 3.5 6.5-7"
                      stroke="#65940c"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Others */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.05 }}
          >
            {/* Column header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect
                    x="2"
                    y="11"
                    width="14"
                    height="3"
                    rx="1"
                    stroke="rgba(39,60,29,0.5)"
                    strokeWidth="1.4"
                  />
                  <rect
                    x="2"
                    y="7"
                    width="14"
                    height="3"
                    rx="1"
                    stroke="rgba(39,60,29,0.5)"
                    strokeWidth="1.4"
                  />
                  <rect
                    x="2"
                    y="3"
                    width="14"
                    height="3"
                    rx="1"
                    stroke="rgba(39,60,29,0.5)"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  color: "#1c1629",
                }}
              >
                Others
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {OTHERS_ITEMS.map((item) => (
                <div
                  key={item}
                  style={{ ...rowStyle, color: "rgba(39,60,29,0.55)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M4 4l8 8M12 4l-8 8"
                      stroke="rgba(39,60,29,0.3)"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
