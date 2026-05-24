"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TICKER_ITEMS = [
  {
    label: "Scalable Solutions",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="1"
          y="7"
          width="5"
          height="5"
          rx="1.5"
          stroke="#273c1d"
          strokeWidth="1.3"
        />
        <rect
          x="8"
          y="4"
          width="5"
          height="8"
          rx="1.5"
          stroke="#273c1d"
          strokeWidth="1.3"
        />
        <path
          d="M3.5 7V4M10.5 4V2"
          stroke="#273c1d"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Real-Time Insights",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="#273c1d" strokeWidth="1.3" />
        <path
          d="M8 8V4.5M8 8l3 2"
          stroke="#273c1d"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Virtual Assistance",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="1"
          y="3"
          width="10"
          height="7"
          rx="2"
          stroke="#273c1d"
          strokeWidth="1.3"
        />
        <path
          d="M4 14l2-4M8 14l-2-4"
          stroke="#273c1d"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="13" cy="5" r="2.5" stroke="#273c1d" strokeWidth="1.3" />
        <path
          d="M13 4.5v1M13 6.5v.2"
          stroke="#273c1d"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Cost Effective",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="#273c1d" strokeWidth="1.3" />
        <path
          d="M8 5v1m0 4v1M6 9.5h2a1.5 1.5 0 000-3H8A1.5 1.5 0 018 4h1.5"
          stroke="#273c1d"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Faster Innovation",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 2l1.5 4h4l-3 2.5 1 4L8 10l-3.5 2.5 1-4L2.5 6h4L8 2z"
          stroke="#273c1d"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const cardStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(237,237,237,0.48) 0%, rgba(255,255,255,0.48) 100%)",
  boxShadow:
    "0 0.8px 0.8px -1px rgba(0,0,0,0.04), 0 2.4px 2.4px -2px rgba(0,0,0,0.04), 0 6.4px 6.4px -3px rgba(0,0,0,0.03), 0 20px 20px -4px rgba(0,0,0,0.01), inset 0 0 1px 1px rgba(255,255,255,0.7)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  borderRadius: 16,
  overflow: "hidden",
};

// Subtle green fill for the bordered feature cards (2, 3, 4).
const cardGreen = "linear-gradient(180deg, #e6f2d8 0%, #f1f8e8 100%)";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        padding: "100px 20px",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial bg */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1100,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(244,252,241,0.85) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
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
            <img
              src="/images/process.png"
              alt=""
              width={14}
              height={14}
              style={{ display: "block" }}
            />
            Features
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
                maxWidth: 220,
                height: 3,
                background:
                  "linear-gradient(90deg, rgba(101,148,12,0) 0%, rgba(101,148,12,0.22) 100%)",
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
              Powering Commodity Finance
            </h2>
            <div
              style={{
                flex: 1,
                maxWidth: 220,
                height: 3,
                background:
                  "linear-gradient(90deg, rgba(101,148,12,0.22) 0%, rgba(101,148,12,0) 100%)",
              }}
            />
          </div>

          <p
            style={{
              fontSize: 15,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "#1c1629",
              maxWidth: 560,
              margin: "16px auto 0",
              lineHeight: 1.65,
            }}
          >
            Powerful Infrastructure For Commodity Storage, Financing,
            Monitoring, And Global Agricultural Trade.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              ...cardStyle,
              background: "transparent",
              boxShadow: "none",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 28,
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  color: "#1c1629",
                  margin: "0 0 20px",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                }}
              >
                AI Risk Intelligence
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                {[
                  "Automate commodity finance, storage, and trade.",
                  "Drive faster decisions and higher efficiency.",
                ].map((pt) => (
                  <div
                    key={pt}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "#65940c",
                        fontWeight: 400,
                        fontSize: 18,
                        lineHeight: 1.3,
                        flexShrink: 0,
                      }}
                    >
                      ✱
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        color: "#273c1d",
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two sub-cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                {
                  title: "Data-driven",
                  desc: "Use real-time market and commodity data for smarter decisions and better returns.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <ellipse
                        cx="11"
                        cy="6"
                        rx="7"
                        ry="2.5"
                        stroke="#65940c"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M4 6v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V6"
                        stroke="#65940c"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M4 11v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5"
                        stroke="#65940c"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Efficient Growth",
                  desc: "Faster financing, seamless operations, and better liquidity across agriculture supply chain.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <rect
                        x="2"
                        y="13"
                        width="4"
                        height="7"
                        rx="1"
                        stroke="#65940c"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="9"
                        y="9"
                        width="4"
                        height="11"
                        rx="1"
                        stroke="#65940c"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="16"
                        y="4"
                        width="4"
                        height="16"
                        rx="1"
                        stroke="#65940c"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: "22px 22px 26px",
                    boxShadow:
                      "0 0.8px 0.8px -1px rgba(0,0,0,0.04), 0 2.4px 2.4px -2px rgba(0,0,0,0.04), 0 6.4px 6.4px -3px rgba(0,0,0,0.03), 0 20px 20px -4px rgba(0,0,0,0.01), inset 0 0 1px 1px rgba(255,255,255,0.7)",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "#fff",
                      boxShadow:
                        "0 1px 2px rgba(16,24,40,0.06), 0 4px 10px rgba(16,24,40,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    {card.icon}
                  </div>
                  <p
                    style={{
                      fontSize: 20,
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 600,
                      color: "#1c1629",
                      margin: "0 0 10px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(39,60,29,0.55)",
                      margin: 0,
                      lineHeight: 1.55,
                    }}
                  >
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
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            style={{
              ...cardStyle,
              background: cardGreen,
              padding: 28,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                color: "#1c1629",
                margin: "0 0 8px",
              }}
            >
              Real-Time Monitoring
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(39,60,29,0.6)",
                margin: "0 0 28px",
                lineHeight: 1.55,
              }}
            >
              AI &amp; IoT monitor commodity quality and storage conditions in
              real time.
            </p>

            {/* Arc illustration — Landeros-style dome */}
            {/* All dome elements share a single center point at `bottom: 35`,
                which coincides with the pill's vertical center — so the
                connection lines visibly emanate from inside the pill. */}
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.05)",
                borderBottom: "none",
                position: "relative",
                height: 270,
                overflow: "hidden",
                clipPath: "inset(0 round 4px)",
                transform: "translateZ(0)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translate(-50%, 50%)",
                  width: 420,
                  height: 420,
                  borderRadius: "50%",
                  border: "60px solid rgba(101,148,12,0.07)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translate(-50%, 50%)",
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: "rgba(101,148,12,0.09)",
                  pointerEvents: "none",
                }}
              />

              {/* Orbit ring — lines + nodes sway gently around the pill center */}
              {/* Ring is 380×380, center pivots at (190,190); placed so that
                  pivot lands at container `bottom: 35` (= pill center).
                  NOTE: `.animate-orbit-sway` (globals.css) also applies a constant
                  scale(0.72) about that center, shrinking the nodes + wires so the
                  whole graph stays inside the green dome. */}
              <div
                className="animate-orbit-sway"
                style={{
                  position: "absolute",
                  width: 380,
                  height: 380,
                  bottom: -155,
                  left: "calc(50% - 190px)",
                  transformOrigin: "190px 190px",
                }}
              >
                <svg
                  viewBox="0 0 380 380"
                  fill="none"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "visible",
                  }}
                >
                  {/* Quadratic bezier wires — control point pushed outward from the
                      vertical axis through the dome center, so each wire bows away
                      from the centerline like a fountain spoke. */}
                  {/* Endpoints sit 35px short of each node center (= node radius)
                      so wires terminate at the circle edge, not inside it. */}
                  <path
                    d="M 190 190 Q 76 165 20 145"
                    stroke="rgba(39,60,29,0.28)"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <path
                    d="M 190 190 Q 148 117 137 44"
                    stroke="rgba(39,60,29,0.28)"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <path
                    d="M 190 190 Q 232 117 243 44"
                    stroke="rgba(39,60,29,0.28)"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <path
                    d="M 190 190 Q 304 165 359 145"
                    stroke="rgba(39,60,29,0.28)"
                    strokeWidth="1.6"
                    fill="none"
                  />
                </svg>

                {[
                  {
                    top: 101,
                    left: -48,
                    delay: 0,
                    icon: (
                      /* Thermometer — temperature monitoring */
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 13V5a2 2 0 1 1 4 0v8a4 4 0 1 1-4 0z"
                          stroke="#273c1d"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8v6"
                          stroke="#273c1d"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    top: -24,
                    left: 90,
                    delay: 0.65,
                    icon: (
                      /* Droplet — humidity / moisture */
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 3.5c2 3 6 7 6 10.5a6 6 0 1 1-12 0c0-3.5 4-7.5 6-10.5z"
                          stroke="#273c1d"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    top: -24,
                    left: 220,
                    delay: 1.3,
                    icon: (
                      /* Cube — inventory / storage */
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 16V8L12 4 3 8v8l9 4 9-4z"
                          stroke="#273c1d"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 8l9 4 9-4M12 12v8"
                          stroke="#273c1d"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    top: 101,
                    left: 357,
                    delay: 1.95,
                    icon: (
                      /* Bell — real-time alerts */
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 17h12M8 17v-6a4 4 0 1 1 8 0v6M10.5 20a1.5 1.5 0 0 0 3 0"
                          stroke="#273c1d"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="animate-node-bob"
                    style={{
                      position: "absolute",
                      top: pos.top,
                      left: pos.left,
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: "rgba(196,232,170,0.7)",
                      border: "1px solid rgba(101,148,12,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      animationDelay: `${pos.delay}s`,
                    }}
                  >
                    {pos.icon}
                  </div>
                ))}
              </div>

              {/* Bottom badge — overlays the dome center so lines appear to start from it */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: 12,
                  padding: "12px 30px",
                  background:
                    "linear-gradient(-43deg, rgb(60,120,20) 0%, rgb(97,148,12) 100%)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                  whiteSpace: "nowrap" as const,
                  boxShadow: "0 4px 20px rgba(60,100,20,0.35)",
                  letterSpacing: "0.01em",
                  zIndex: 2,
                }}
              >
                Warehouse Monitoring
              </div>
            </div>
          </motion.div>

          {/* Tokenized Agricultural Assets */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              ...cardStyle,
              background: cardGreen,
              padding: "28px 28px 0",
              display: "flex",
              flexDirection: "column",
              height: "346px",
            }}
          >
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                color: "#1c1629",
                margin: "0 0 8px",
              }}
            >
              Tokenized Agricultural Assets
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(39,60,29,0.6)",
                margin: "0 0 24px",
                lineHeight: 1.55,
              }}
            >
              Turn commodities into secure, tradable digital assets.
            </p>

            <div
              style={{
                background: "#fff",
                borderRadius: "12px 12px 12px 12px",
                border: "1px solid rgba(0,0,0,0.07)",
                overflow: "hidden",
                fontFamily: "monospace",
                fontSize: 11,
                position: "relative" as const,
                height: 220,
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 20px",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  background: "#fafafa",
                }}
              >
                <span style={{ fontSize: 11, color: "rgba(39,60,29,0.5)" }}>
                  Name :{" "}
                  <span style={{ color: "#273c1d", fontWeight: 500 }}>
                    AI_development.py
                  </span>
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle
                      cx="6"
                      cy="6"
                      r="4.5"
                      stroke="rgba(39,60,29,0.3)"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M9.5 9.5l2.5 2.5"
                      stroke="rgba(39,60,29,0.3)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#65940c",
                    }}
                  />
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "rgba(39,60,29,0.2)",
                    }}
                  />
                </div>
              </div>
              {/* Scrolling code — fixed viewport, lines loop upward */}
              <div className="code-scroll-outer" style={{ height: 160 }}>
                <div className="animate-scroll-up" style={{ paddingTop: 6 }}>
                  {[
                    ...[
                      { num: 1, text: "class AIAgent:" },
                      { num: 2, text: "    def __init__(self, limit):" },
                      { num: 3, text: "        self.limit = limit" },
                      { num: 4, text: '        self.mode = "idle"' },
                      { num: 5, text: "" },
                      { num: 6, text: "    def evaluate(self, value):" },
                      { num: 7, text: "        if value > self.limit:" },
                      { num: 8, text: '            self.mode = "active"' },
                      { num: 9, text: "            return True" },
                      { num: 10, text: "        return False" },
                      { num: 11, text: "" },
                      { num: 12, text: "    def reset(self):" },
                      { num: 13, text: '        self.mode = "idle"' },
                    ],
                    ...[
                      { num: 1, text: "class AIAgent:" },
                      { num: 2, text: "    def __init__(self, limit):" },
                      { num: 3, text: "        self.limit = limit" },
                      { num: 4, text: '        self.mode = "idle"' },
                      { num: 5, text: "" },
                      { num: 6, text: "    def evaluate(self, value):" },
                      { num: 7, text: "        if value > self.limit:" },
                      { num: 8, text: '            self.mode = "active"' },
                      { num: 9, text: "            return True" },
                      { num: 10, text: "        return False" },
                      { num: 11, text: "" },
                      { num: 12, text: "    def reset(self):" },
                      { num: 13, text: '        self.mode = "idle"' },
                    ],
                  ].map(({ num, text }, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", gap: 14, padding: "3px 14px" }}
                    >
                      <span
                        style={{
                          color: "rgba(39,60,29,0.2)",
                          minWidth: 18,
                          textAlign: "right",
                          userSelect: "none" as const,
                        }}
                      >
                        {num}
                      </span>
                      <span
                        style={{
                          color: "rgba(39,60,29,0.65)",
                          whiteSpace: "pre" as const,
                        }}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            style={{
              ...cardStyle,
              background:
                "linear-gradient(180deg, rgba(230,242,216,0.5) 0%, rgba(255,255,255,0.5) 100%)",
              padding: 28,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                color: "#1c1629",
                margin: "0 0 8px",
              }}
            >
              Chatbots &amp; virtual assistants
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(39,60,29,0.6)",
                margin: "0 0 24px",
                lineHeight: 1.55,
              }}
            >
              Engage customers 24/7 with intelligent virtual assistants.
            </p>

            {/* Chat UI mockup — Framer-style: rotation wobble + split-text + shimmer */}
            <div
              style={{
                flex: 1,
                background: "#fff",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.05)",
                padding: "18px",
                minHeight: 150,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {/* Typing indicator — light-green banner with rotation jitter */}
              <motion.div
                animate={{ rotate: [-0.7, 0.7, -0.7] }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#f0f8e6",
                  borderRadius: 10,
                  padding: "10px 14px",
                  willChange: "transform",
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "#dfeec9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {/* AI sparkle — 4-point star with a small accent sparkle */}
                  <svg
                    className="animate-sparkle-shake"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11 3 L13 10 L20 12 L13 14 L11 21 L9 14 L2 12 L9 10 Z"
                      fill="#65940c"
                    />
                    <path
                      d="M19 3 L19.7 5 L21.7 5.7 L19.7 6.4 L19 8.4 L18.3 6.4 L16.3 5.7 L18.3 5 Z"
                      fill="#65940c"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#273c1d",
                    flex: 1,
                  }}
                >
                  Creating Content Now
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="animate-typing-dot"
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "rgba(101,148,12,0.5)",
                        animationDelay: `${i * 0.18}s`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Placeholder lines — gentle wobble in opposite phases */}
              <motion.div
                animate={{ rotate: [0.5, -0.5, 0.5] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "rgba(0,0,0,0.05)",
                  borderRadius: 6,
                  height: 8,
                  width: "90%",
                  willChange: "transform",
                }}
              />
              <motion.div
                animate={{ rotate: [-0.6, 0.6, -0.6] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "rgba(0,0,0,0.05)",
                  borderRadius: 6,
                  height: 8,
                  width: "70%",
                  willChange: "transform",
                }}
              />

              {/* Image placeholder boxes — full-width 2-col grid, each tilts on its own clock */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                  padding: "4px 0",
                }}
              >
                {[
                  { from: -1.2, to: 1.2, duration: 5.6, delay: 0 },
                  { from: 1.2, to: -1.2, duration: 6.2, delay: 0.5 },
                ].map((cfg, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: [cfg.from, cfg.to, cfg.from] }}
                    transition={{
                      duration: cfg.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: cfg.delay,
                    }}
                    style={{
                      height: 32,
                      borderRadius: 10,
                      background: "#f0f8e6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      willChange: "transform",
                    }}
                  >
                    {/* Landscape / image upload icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3.5"
                        y="4.5"
                        width="17"
                        height="15"
                        rx="2"
                        stroke="#65940c"
                        strokeWidth="1.6"
                      />
                      <circle
                        cx="8.5"
                        cy="9.5"
                        r="1.2"
                        stroke="#65940c"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M20.5 14.5l-4.5-4-7 7"
                        stroke="#65940c"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                ))}
              </div>

              {/* Input row — paperclip + split-text bobbing placeholder + shimmer button */}
              <motion.div
                animate={{ rotate: [-0.4, 0.4, -0.4] }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#f0f8e6",
                  borderRadius: 12,
                  padding: "6px 6px 6px 10px",
                  marginTop: "auto",
                  willChange: "transform",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {/* Paperclip */}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 4L4.5 9.5a2 2 0 1 0 2.83 2.83L13 6.5a3.5 3.5 0 0 0-4.95-4.95L2.5 7.1"
                      stroke="#273c1d"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Split-text: each glyph in its own inline-block motion.span, bobbing on a staggered wave */}
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(39,60,29,0.55)",
                    flex: 1,
                    display: "inline-flex",
                    whiteSpace: "pre",
                  }}
                >
                  {"Create a banner".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      style={{
                        display: "inline-block",
                        willChange: "transform",
                      }}
                      animate={{ y: [0, -2.5, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.07,
                      }}
                    >
                      {char === " " ? " " : char}
                    </motion.span>
                  ))}
                </span>
                {/* Create button — sweeping shimmer overlay loops left→right */}
                <div
                  style={{
                    borderRadius: 8,
                    padding: "7px 16px",
                    background: "#65940c",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 0.8,
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>
                    Create
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Ticker strip — auto-scrolling marquee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ padding: "10px 0", background: "transparent" }}
        >
          <div className="marquee-outer">
            <div
              className="animate-marquee"
              style={{ gap: 12, padding: "0 6px" }}
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "9px 20px",
                    borderRadius: 100,
                    background: "#f4fcf1",
                    border: "1px solid rgba(101,148,12,0.12)",
                    flexShrink: 0,
                    marginRight: 12,
                  }}
                >
                  {item.icon}
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#273c1d",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ fontWeight: 700, color: "#1c1629" }}>
                      {item.label.split(" ")[0]}
                    </span>
                    {" " + item.label.split(" ").slice(1).join(" ")}
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
