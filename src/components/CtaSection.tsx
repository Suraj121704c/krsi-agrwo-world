"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Two cube layers drift at different rates — same parallax-depth trick the
  // Framer clouds use: JS writes transform on each scroll tick.
  const cube1X = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const cube1Y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const cube2X = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const cube2Y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "0 20px 100px",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            background:
              "linear-gradient(135deg, rgba(180,215,150,0.6) 0%, rgba(220,240,200,0.4) 40%, rgba(240,250,230,0.2) 100%)",
            borderRadius: 24,
            padding: "72px 48px 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(101,148,12,0.12)",
          }}
        >
          {/* Clouds — continuous drift on outer wrapper, scroll parallax on inner img */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <motion.div
              animate={{ x: [-14, 14, -14], y: [-6, 6, -6] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.img
                src="/images/hero-cubes.webp"
                alt=""
                aria-hidden="true"
                style={{
                  display: "block",
                  width: 460,
                  height: "auto",
                  opacity: 0.9,
                  filter:
                    "brightness(1.5) contrast(0.7) sepia(0.5) hue-rotate(55deg)",
                  x: cube1X,
                  y: cube1Y,
                  willChange: "transform",
                }}
              />
            </motion.div>
          </div>
          <motion.div
            style={{
              position: "absolute",
              bottom: "-14%",
              right: "8%",
              pointerEvents: "none",
              zIndex: 0,
            }}
            animate={{ x: [12, -12, 12], y: [5, -5, 5] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src="/images/hero-cubes.webp"
              alt=""
              aria-hidden="true"
              style={{
                display: "block",
                width: 360,
                height: "auto",
                opacity: 0.65,
                filter:
                  "brightness(1.5) contrast(0.7) sepia(0.5) hue-rotate(55deg)",
                x: cube2X,
                y: cube2Y,
                willChange: "transform",
              }}
            />
          </motion.div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                color: "#1c1629",
                margin: "0 0 16px",
                letterSpacing: "-1.5px",
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
                fontFamily: "var(--font-inter), Inter, sans-serif",
                color: "rgba(39,60,29,0.6)",
                maxWidth: 440,
                margin: "0 auto 32px",
                lineHeight: 1.65,
              }}
            >
              Transform commodity storage, financing, and trade with AI-powered
              infrastructure built for the modern agricultural economy.
            </p>

            {/* Feature pills */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 12,
                marginBottom: 32,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 100,
                  padding: "8px 18px",
                  background: "rgba(255,255,255,0.6)",
                  boxShadow: "inset 0 0 1px 1px rgba(255,255,255,0.9)",
                  border: "1px solid rgba(101,148,12,0.15)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#273c1d",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect
                    x="1"
                    y="3"
                    width="12"
                    height="8"
                    rx="2"
                    stroke="#65940c"
                    strokeWidth="1.4"
                  />
                  <circle
                    cx="7"
                    cy="7"
                    r="2"
                    stroke="#65940c"
                    strokeWidth="1.2"
                  />
                </svg>
                Fully Transparent
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 100,
                  padding: "8px 18px",
                  background: "rgba(255,255,255,0.6)",
                  boxShadow: "inset 0 0 1px 1px rgba(255,255,255,0.9)",
                  border: "1px solid rgba(101,148,12,0.15)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#273c1d",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="5"
                    cy="5.5"
                    r="2.5"
                    stroke="#65940c"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M1 12c0-2.2 1.8-4 4-4h.5M9.5 13v-1.5m0 0a2 2 0 100-4 2 2 0 000 4z"
                    stroke="#65940c"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 10.5h3"
                    stroke="#65940c"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
                10k+ farmer trust us
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:hello@krsiagrotech.com"
              style={{
                display: "inline-block",
                borderRadius: 100,
                padding: 5,
                background: "#fff",
                boxShadow:
                  "0 8px 20px rgba(97,148,12,0.22), 0 1px 2px rgba(0,0,0,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  borderRadius: 100,
                  padding: "11px 26px",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#fff",
                  background:
                    "linear-gradient(-43.56deg, rgb(159,206,106) 0%, rgb(97,175,28) 100%)",
                }}
              >
                <img
                  src="/images/callNow.png"
                  alt=""
                  width={18}
                  height={18}
                  style={{ display: "block" }}
                />
                Book A Free Call Now
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
