import Image from "next/image";

const BRAND_LOGOS = [
  "/images/brand-logo-1.svg",
  "/images/brand-logo-2.svg",
  "/images/brand-logo-3.svg",
  "/images/brand-logo-4.svg",
  "/images/brand-logo-5.svg",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 160,
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
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.92) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
          maxWidth: 860,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 100,
              padding: "7px 18px",
              background:
                "linear-gradient(180deg, rgba(246,241,252,0.55) 0%, rgba(255,255,255,0.55) 100%)",
              boxShadow: "inset 0 0 1px 1px rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.8)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#1c1629",
              textTransform: "uppercase" as const,
            }}
          >
            {/* Static brand dot */}
            <span
              style={{
                display: "inline-flex",
                width: 6,
                height: 6,
                flexShrink: 0,
                borderRadius: "50%",
                background: "#65940c",
                boxShadow: "0 0 8px rgba(101,148,12,0.55)",
              }}
            />
            New Gen AI Powered Agri Finance Platform
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(42px, 6.5vw, 86px)",
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 500,
            color: "#1c1629",
            letterSpacing: "-3.44px",
            lineHeight: 1.1,
            margin: "0 0 28px",
          }}
        >
          Infra Layer for Global
          <br />
          Agri Commodities
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            color: "rgba(28,22,41,0.5)",
            lineHeight: 1.7,
            maxWidth: 760,
            margin: "0 0 44px",
          }}
        >
          Empowering farmers globally with smarter storage, financing, and
          market access through
          <br />
          one trusted agri-finance platform.
        </p>
        <div>
          <a
            href="#contact"
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
                padding: "12px 26px",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff",
                background:
                  "linear-gradient(-43.56deg, rgb(159,206,106) 0%, rgb(97,175,28) 100%)",
              }}
            >
              <Image
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
        <div style={{ width: "100%", marginTop: 48 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#000000",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Trusted by leading agri companies
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 54,
              flexWrap: "wrap",
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
                style={{
                  height: 22,
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) opacity(0.62)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
