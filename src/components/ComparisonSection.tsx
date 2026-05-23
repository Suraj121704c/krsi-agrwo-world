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
              color: "#1c1629",
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
              gap: 24,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(101,148,12,0) 0%, rgba(101,148,12,0.22) 100%)",
              }}
            />
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                color: "#1c1629",
                margin: 0,
                letterSpacing: "-1.2px",
                whiteSpace: "nowrap" as const,
              }}
            >
              Why Choose Us
            </h2>
            <div
              style={{
                flex: 1,
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(101,148,12,0.22) 0%, rgba(101,148,12,0) 100%)",
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
                justifyContent: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                  stroke="#6d4aff"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.3 7L12 12l8.7-5M12 22V12"
                  stroke="#6d4aff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontSize: 18,
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
                justifyContent: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                  stroke="#1c1629"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12.65l9.17 4.16a2 2 0 0 0 1.66 0L22 12.65"
                  stroke="#1c1629"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17.65l9.17 4.16a2 2 0 0 0 1.66 0L22 17.65"
                  stroke="#1c1629"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontSize: 18,
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
