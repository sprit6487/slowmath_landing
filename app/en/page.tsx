import type { Metadata } from "next";

const IOS_APP_URL = "https://apps.apple.com/us/app/id6763979294";
const SITE_URL = "https://slowkids.net";
const SITE_URL_EN = `${SITE_URL}/en/`;

export const metadata: Metadata = {
  title: "SlowKids — Math at every child's pace",
  description:
    "SlowKids is a learning series for children who pick up math more slowly. From color recognition to multiplication tables, paced so a child can stay at their own speed. iOS app available now.",
  alternates: {
    canonical: SITE_URL_EN,
    languages: {
      ko: SITE_URL + "/",
      en: SITE_URL_EN,
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    title: "SlowKids — Math at every child's pace",
    description:
      "Small math practices for children who learn slowly — from earliest cognition through multiplication. iOS app available now.",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    type: "website",
    url: SITE_URL_EN,
  },
  twitter: {
    card: "summary_large_image",
    title: "SlowKids — Math at every child's pace",
    description:
      "Small math practices for children who learn slowly. Available on the App Store.",
  },
  itunes: {
    appId: "6763979294",
  },
};

const STAGES = [
  {
    label: "Foundations",
    color: "#8B72C8",
    bg: "#EDE8F8",
    modules: [
      { emoji: "🌈", name: "Color", slug: "color" },
      { emoji: "✏️", name: "Lines", slug: "linedraw" },
      { emoji: "···", name: "Dot to dot", slug: "dot2dot" },
      { emoji: "🪞", name: "Pattern match", slug: "colorcopy" },
      { emoji: "🧩", name: "Pattern recognition", slug: "pattern" },
    ],
  },
  {
    label: "Number Sense",
    color: "#5A9FD8",
    bg: "#EBF4FC",
    modules: [
      { emoji: "🔢", name: "Numbers", slug: "number" },
      { emoji: "5️⃣", name: "Writing", slug: "numberdraw" },
      { emoji: "🎲", name: "Counting", slug: "dice" },
      { emoji: "🎯", name: "Matching", slug: "matching" },
    ],
  },
  {
    label: "Number Relations",
    color: "#5BAA82",
    bg: "#E8F4ED",
    modules: [
      { emoji: "⚖️", name: "Compare", slug: "comparing" },
      { emoji: "⚖️", name: "Compare 2", slug: "comparing2" },
      { emoji: "📏", name: "Size", slug: "compare" },
      { emoji: "🕐", name: "Time", slug: "clock" },
    ],
  },
  {
    label: "Pre-Addition",
    color: "#E0995A",
    bg: "#FCF0DC",
    modules: [
      { emoji: "🫱", name: "Combine", slug: "combining" },
      { emoji: "✂️", name: "Split", slug: "splitting" },
      { emoji: "🔟", name: "Pairs to 10", slug: "complement" },
    ],
  },
  {
    label: "Addition",
    color: "#E8924A",
    bg: "#FDEAD6",
    modules: [
      { emoji: "1️⃣", name: "+1", slug: "plusone" },
      { emoji: "2️⃣", name: "+2", slug: "plustwo" },
      { emoji: "3️⃣", name: "+3", slug: "plusthree" },
      { emoji: "➕", name: "1-digit", slug: "easy" },
      { emoji: "➕", name: "Practice", slug: "circle" },
      { emoji: "🆙", name: "Carrying", slug: "carry" },
    ],
  },
  {
    label: "Subtraction",
    color: "#D67B72",
    bg: "#FAE6E2",
    modules: [
      { emoji: "1️⃣", name: "−1", slug: "minusone" },
      { emoji: "2️⃣", name: "−2", slug: "minustwo" },
      { emoji: "3️⃣", name: "−3", slug: "minusthree" },
      { emoji: "⬇️", name: "Borrowing", slug: "borrow" },
    ],
  },
  {
    label: "Multiplication",
    color: "#7C8FB8",
    bg: "#E8ECF5",
    modules: [
      { emoji: "✖️", name: "Times tables", slug: "timestables" },
    ],
  },
];

const VALUES = [
  {
    title: "Pace, not pressure",
    body: "Children move forward at their own speed. The same concept gets repeated from many angles, until it feels familiar — not memorized.",
  },
  {
    title: "Quiet, not flashy",
    body: "No stars, no levels, no character mascots. A calm screen and a clearly-staged step, so the child can hear themselves think.",
  },
  {
    title: "Made beside the user",
    body: "Built by a father of an autistic child, alongside caregivers, special-education teachers, and cognitive therapists.",
  },
];

const FAQS = [
  {
    q: "Who is SlowKids for?",
    a: "Children who learn more slowly than peers, children who need more repetition, and the caregivers, teachers, and therapists walking with them. It does not assume a specific diagnosis.",
  },
  {
    q: "How is it different from other learning apps?",
    a: "Instead of pushing toward quick wins with stars and levels, SlowKids gives the same idea many angles and patient repetition. Clearly-staged steps, a quiet screen — so a child can stay at their own pace.",
  },
  {
    q: "Can I try it on the web first?",
    a: "Yes. The series is available on iOS, and each module is also previewable on this site. The full experience — saved progress, offline use, parental controls — lives in the app.",
  },
  {
    q: "Who made this?",
    a: "EverydaySummer Inc., a small studio in Seoul. The founder is a KAIST graduate and the father of a child on the autism spectrum, who built these tools from his own family's experience.",
  },
];

export default function HomeEn() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#EDE0C8] bg-[#FFFCF6]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-10 sm:py-4">
          <a href="/en/" className="flex items-center gap-2.5">
            <span style={{ fontSize: "1.1rem", fontWeight: 900, letterSpacing: "-0.02em" }}>
              <span style={{ color: "#5A9FD8" }}>Slow</span>
              <span style={{ color: "#E8924A" }}>Kids</span>
            </span>
          </a>
          <div className="inline-flex overflow-hidden rounded-full border border-[#EDE0C8] text-[11px] font-bold">
            <a
              href="/"
              className="px-2.5 py-1.5 text-[#7B6545] transition-colors hover:text-[#2D2620]"
              aria-label="한국어로 보기"
            >
              KR
            </a>
            <a
              href="/en/"
              className="bg-[#2D2620] px-2.5 py-1.5 text-white"
              aria-label="English"
            >
              EN
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="px-4 pt-10 pb-12 sm:px-6 sm:pt-16 sm:pb-16"
        style={{
          background: "linear-gradient(160deg, #FFFAF3 0%, #FFF0D8 55%, #FFE8C4 100%)",
          borderBottom: "1px solid #EDE0C8",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div className="flex flex-col items-center mb-5 gap-2">
            <svg viewBox="0 0 120 100" width="68" height="57" fill="none" aria-label="SlowKids turtle">
              <ellipse cx="30" cy="72" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(-20 30 72)" />
              <ellipse cx="78" cy="76" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(15 78 76)" />
              <ellipse cx="28" cy="54" rx="9" ry="5.5" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(-10 28 54)" />
              <ellipse cx="55" cy="58" rx="35" ry="20" fill="#F5E6C8" stroke="#3A9B6A" strokeWidth="2" />
              <ellipse cx="52" cy="42" rx="32" ry="28" fill="#7EDCAA" stroke="#3A9B6A" strokeWidth="2.5" />
              <ellipse cx="92" cy="40" rx="17" ry="15" fill="#F5E6C8" stroke="#3A9B6A" strokeWidth="2.5" />
              <circle cx="99" cy="35" r="4" fill="white" stroke="#3A9B6A" strokeWidth="1.5" />
              <circle cx="100" cy="34" r="2.5" fill="#3A9B6A" />
              <circle cx="101" cy="33" r="1" fill="white" />
            </svg>
            <p className="font-black" style={{ fontSize: "1.6rem", letterSpacing: "-0.02em" }}>
              <span style={{ color: "#5A9FD8" }}>Slow</span>
              <span style={{ color: "#E8924A" }}>Kids</span>
            </p>
          </div>

          <h1
            className="font-black mb-4"
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
              lineHeight: 1.22,
              color: "#2D2620",
              letterSpacing: "-0.03em",
            }}
          >
            Math at <span style={{ color: "#5A9FD8" }}>every child's</span> pace.
            <br />
            <span style={{ color: "#E8924A" }}>One small step</span> at a time.
          </h1>

          <p
            style={{
              fontSize: "clamp(0.85rem, 2.4vw, 0.95rem)",
              color: "#7B6545",
              lineHeight: 1.7,
              marginBottom: "32px",
              wordBreak: "keep-all",
            }}
          >
            <strong style={{ color: "#4A4035" }}>Small math practices</strong> for children who pick up concepts more slowly than peers — designed to be repeated patiently, from earliest cognition through multiplication tables.
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center justify-center">
              <a
                href={IOS_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download SlowKids on the App Store"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#000",
                  color: "#fff",
                  padding: "13px 22px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  minWidth: "210px",
                  justifyContent: "center",
                }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
                  <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.31-.74 3.74-.62 1.51.07 2.65.74 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.15 }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 500, opacity: 0.85 }}>Download on the</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 700 }}>App Store</span>
                </span>
              </a>
              <button
                type="button"
                disabled
                aria-label="Google Play coming soon"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#F0EBE2",
                  color: "#A8997F",
                  padding: "13px 22px",
                  borderRadius: "12px",
                  border: "none",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  cursor: "not-allowed",
                  minWidth: "210px",
                  justifyContent: "center",
                  fontFamily: "inherit",
                }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
                  <path fill="#C9BFA8" d="M3.6 21.6V2.4l13.5 9.6L3.6 21.6z" />
                </svg>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.15 }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 500, opacity: 0.9 }}>Google Play</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 700 }}>Coming soon</span>
                </span>
              </button>
            </div>
            <a
              href="#series"
              style={{
                color: "#7B6545",
                fontSize: "0.85rem",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Browse the modules first
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-12 sm:py-16" style={{ borderBottom: "1px solid #EDE0C8", background: "white" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-black text-xl mb-4" style={{ color: "#2D2620", letterSpacing: "-0.02em" }}>
            What is SlowKids?
          </h2>
          <p className="text-sm leading-loose" style={{ color: "#7B6545" }}>
            SlowKids is a set of learning tools for{" "}
            <strong style={{ color: "#4A4035" }}>
              children who pick up math concepts more slowly than peers
            </strong>
            . Built from the frustration of parents whose children kept falling behind on standard learning materials.
            With enough thinking time, layered hints, and voice guidance,{" "}
            <strong style={{ color: "#4A4035" }}>children get to do it themselves</strong>{" "}
            — and that small success becomes the foundation of independence. Used by parents, special education teachers, and cognitive therapists alike.
          </p>
          <div
            className="flex gap-3 mt-5"
            style={{ borderLeft: "3.5px solid #5A9FD8", paddingLeft: "14px" }}
          >
            <p className="text-sm font-semibold leading-relaxed" style={{ color: "#5A9FD8" }}>
              Built by a KAIST-trained engineer and father of a child on the autism spectrum, from his family's own experience.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="px-6 py-14 sm:py-20"
        style={{
          borderBottom: "1px solid #EDE0C8",
          background:
            "radial-gradient(900px 420px at 12% 0%, rgba(232,146,74,0.08), transparent 60%), linear-gradient(180deg, #FFFAF2 0%, #FFF6EA 100%)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            className="text-center font-semibold mb-3"
            style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C77A00" }}
          >
            What makes it different
          </p>
          <h2
            className="text-center font-black mb-12 break-keep"
            style={{ fontSize: "clamp(1.3rem, 3.6vw, 1.75rem)", color: "#2D2620", letterSpacing: "-0.02em" }}
          >
            Three ideas we hold tight to.
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl px-6 py-6"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid #EDE0C8",
                  boxShadow: "0 1px 0 rgba(45,38,32,0.02)",
                }}
              >
                <h3 className="font-bold text-base mb-3" style={{ color: "#2D2620", letterSpacing: "-0.01em" }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-loose" style={{ color: "#7B6545" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series at a glance */}
      <section id="series" className="px-6 py-14 sm:py-20" style={{ borderBottom: "1px solid #EDE0C8" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            className="font-semibold mb-3"
            style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C77A00" }}
          >
            The series at a glance
          </p>
          <h2 className="font-black mb-2" style={{ fontSize: "1.5rem", color: "#2D2620", letterSpacing: "-0.02em" }}>
            7 stages, 27 modules.
          </h2>
          <p className="text-sm mb-8" style={{ color: "#7B6545" }}>
            Each stage layers on the previous one. A child can stay on the same module for weeks if they need to.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {STAGES.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5"
                style={{ background: s.bg, border: `1px solid ${s.color}33` }}
              >
                <h3 className="font-bold mb-3 text-sm" style={{ color: s.color, letterSpacing: "-0.01em" }}>
                  {s.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.modules.map((m) => (
                    <a
                      key={m.slug}
                      href={`/slowmath_${m.slug}/`}
                      className="inline-flex items-center gap-1 font-bold rounded-full px-2.5 py-1"
                      style={{
                        fontSize: "0.7rem",
                        background: "rgba(255,255,255,0.7)",
                        color: s.color,
                        border: `1px solid ${s.color}44`,
                        textDecoration: "none",
                      }}
                    >
                      <span aria-hidden>{m.emoji}</span>
                      <span>{m.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-14 sm:py-20" style={{ borderBottom: "1px solid #EDE0C8", background: "#FFFCF6" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p
            className="font-semibold mb-3"
            style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C77A00" }}
          >
            Questions
          </p>
          <h2 className="font-black mb-8" style={{ fontSize: "1.5rem", color: "#2D2620", letterSpacing: "-0.02em" }}>
            Things people ask.
          </h2>
          <dl className="space-y-5">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl p-5"
                style={{ background: "white", border: "1px solid #EDE0C8" }}
              >
                <dt className="font-bold text-sm mb-2" style={{ color: "#2D2620" }}>
                  {f.q}
                </dt>
                <dd className="text-sm leading-loose" style={{ color: "#7B6545" }}>
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-14 sm:py-20" style={{ background: "#FFFCF6", borderBottom: "1px solid #EDE0C8" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="font-black mb-4" style={{ fontSize: "1.6rem", color: "#2D2620", letterSpacing: "-0.02em" }}>
            Get SlowKids on the App Store.
          </h2>
          <p className="text-sm mb-6" style={{ color: "#7B6545" }}>
            iOS — free to download, with in-app purchases for full curriculum access. Google Play version coming soon.
          </p>
          <a
            href={IOS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#000",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
              <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.31-.74 3.74-.62 1.51.07 2.65.74 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.15 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 500, opacity: 0.85 }}>Download on the</span>
              <span style={{ fontSize: "1.05rem", fontWeight: 700 }}>App Store</span>
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10" style={{ background: "white", color: "#7B6545" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p className="text-sm mb-2" style={{ color: "#2D2620" }}>
            <strong>EverydaySummer Inc.</strong>
          </p>
          <p className="text-xs mb-6">
            Learning tools at every child's pace. Made in Seoul.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <a href="/terms" className="underline underline-offset-4 hover:text-[#2D2620]">Terms</a>
            <a href="/privacy" className="underline underline-offset-4 hover:text-[#2D2620]">Privacy</a>
            <a href="mailto:contact@everydaysummer.net" className="underline underline-offset-4 hover:text-[#2D2620]">
              contact@everydaysummer.net
            </a>
          </div>
          <p className="mt-8 text-xs" style={{ color: "#A8997F" }}>
            © {new Date().getFullYear()} EverydaySummer Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
