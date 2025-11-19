import React, { useState } from "react";
import { motion } from "framer-motion";

/* ===========================
   Header (with mega menus)
=========================== */
function Header({ onNav }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/MarTerra-Logomark-Transparent.png"
            alt="MarTerra"
            className="h-8 w-auto"
          />
          <span
            className="font-extrabold tracking-tight"
            style={{ fontFamily: "Poppins" }}
          >
            MarTerra
          </span>
        </div>

        {/* Navigation with dropdowns */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm relative"
          style={{ fontFamily: "Poppins" }}
        >
          {/* PRODUCTS MEGA MENU */}
          <div className="relative group">
            <button className="hover:opacity-80">Products ▾</button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 mt-4 w-[720px]">
              <div className="rounded-2xl bg-white text-[#0E1726] shadow-2xl ring-1 ring-black/5 p-6 grid grid-cols-3 gap-4">
                {/* Access Management product (click goes to product page) */}
                <a
                  onClick={() => onNav("access")}
                  className="rounded-xl p-4 hover:bg-[#F6F8FB] cursor-pointer"
                >
                  <div className="text-xs font-semibold text-[#2771E9]">
                    Product
                  </div>
                  <div className="mt-1 font-semibold">Access Management</div>
                  <p className="mt-1 text-xs text-[#555]">
                    Doors, gates, mobile/badge credentials, cloud control.
                  </p>
                  <div className="mt-3 rounded-lg bg-[#F6F8FB] p-2">
                    <img
                      src="/assets/241017_Access_Control_Family_hard_shadow.png"
                      alt="Access"
                      className="h-24 w-full object-contain"
                    />
                  </div>
                  <div className="mt-3 inline-flex items-center text-xs font-semibold text-[#2771E9]">
                    View Product Page →
                  </div>
                </a>

                {/* Placeholder products */}
                <a className="rounded-xl p-4 hover:bg-[#F6F8FB] opacity-60 cursor-not-allowed">
                  <div className="text-xs font-semibold text-[#2771E9]">
                    Product
                  </div>
                  <div className="mt-1 font-semibold">Cameras</div>
                  <p className="mt-1 text-xs text-[#555]">
                    Perimeter, dock, and LPR coverage with AI search.
                  </p>
                  <div className="mt-3 rounded-lg bg-[#F6F8FB] p-2">
                    <img
                      src="/assets/250228_Family_Portrait_Square0120_Levels-Edit.png"
                      alt="Cameras"
                      className="h-24 w-full object-contain"
                    />
                  </div>
                  <div className="mt-3 inline-flex items-center text-xs text-[#888]">
                    Coming soon
                  </div>
                </a>

                <a className="rounded-xl p-4 hover:bg-[#F6F8FB] opacity-60 cursor-not-allowed">
                  <div className="text-xs font-semibold text-[#2771E9]">
                    Product
                  </div>
                  <div className="mt-1 font-semibold">Intercom & Sensors</div>
                  <p className="mt-1 text-xs text-[#555]">
                    2-way video, environmental sensors, alarms.
                  </p>
                  <div className="mt-3 rounded-lg bg-[#F6F8FB] p-2">
                    <img
                      src="/assets/250228_Family_Portrait_Square0120_Levels-Edit.png"
                      alt="Intercom Sensors"
                      className="h-24 w-full object-contain"
                    />
                  </div>
                  <div className="mt-3 inline-flex items-center text-xs text-[#888]">
                    Coming soon
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* INDUSTRIES MEGA MENU */}
          <div className="relative group">
            <button className="hover:opacity-80">Industries ▾</button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 mt-4 w-[720px]">
              <div className="rounded-2xl bg-white text-[#0E1726] shadow-2xl ring-1 ring-black/5 p-6 grid grid-cols-3 gap-4">
                <a
                  onClick={() => onNav("marina")}
                  className="rounded-xl p-4 hover:bg-[#F6F8FB] cursor-pointer"
                >
                  <div className="text-xs font-semibold text-[#2771E9]">
                    Industry
                  </div>
                  <div className="mt-1 font-semibold">
                    Marina &amp; Port Security
                  </div>
                  <p className="mt-1 text-xs text-[#555]">
                    Gates, slips, fuel docks, perimeter.
                  </p>
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <video
                      className="w-full h-24 object-cover"
                      src="/assets/13483787_3840_2160_30fps.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <div className="mt-3 inline-flex items-center text-xs font-semibold text-[#2771E9]">
                    View Industry Page →
                  </div>
                </a>

                <div className="rounded-xl p-4 border border-dashed border-[#E6E9EF] text-[#888]">
                  <div className="text-xs font-semibold text-[#2771E9]/60">
                    Industry
                  </div>
                  <div className="mt-1 font-semibold">Schools &amp; Campuses</div>
                  <p className="mt-1 text-xs">Coming soon</p>
                </div>

                <div className="rounded-xl p-4 border border-dashed border-[#E6E9EF] text-[#888]">
                  <div className="text-xs font-semibold text-[#2771E9]/60">
                    Industry
                  </div>
                  <div className="mt-1 font-semibold">Construction Sites</div>
                  <p className="mt-1 text-xs">Coming soon</p>
                </div>
              </div>
            </div>
          </div>

          <a href="#services" className="hover:opacity-80">
            Services
          </a>
          <a href="#resources" className="hover:opacity-80">
            Resources
          </a>
          <button
            onClick={() => onNav("about")}
            className="hover:opacity-80"
            type="button"
          >
            About
          </button>
          <a
            className="ml-2 rounded-xl bg-[#FF7A00] px-4 py-2 font-semibold"
            href="#demo"
          >
            Get a Demo
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ===========================
   Helpers
=========================== */
function Breadcrumbs({ items, onNav }) {
  return (
    <nav
      className="bg-white text-[#0E1726] border-b border-[#E6E9EF]"
      aria-label="Breadcrumb"
    >
      <div className="mx-auto max-w-6xl px-6 py-3 text-sm">
        {items.map((item, idx) => (
          <span key={idx}>
            {idx > 0 && <span className="mx-2 text-[#888]">/</span>}
            {item.key ? (
              <button
                onClick={() => onNav(item.key)}
                className="text-[#2771E9] hover:underline"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-[#444]">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

/* ===========================
   Home (hero + Why + previews)
=========================== */
function Home({ onNav }) {
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* HERO + WHY MARTERRA */}
      <section className="relative isolate overflow-hidden min-h-[80vh]">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          preload="auto"
          poster="/assets/250228_Family_Portrait_Square0120_Levels-Edit.png"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/250801_Partner_Loop%202.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1726]/85 via-[#0E1726]/70 to-[#0E1726]" />

        <div className="relative mx-auto max-w-6xl px-6 py-32 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "Poppins" }}
          >
            AI Security Solutions — from Cloud to Coast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="max-w-2xl text-lg text-white/80 mb-10"
          >
            Unify video, access control, intercom, sensors and alarms on a
            single cloud-managed platform. Deploy fast, scale easily, and get
            proactive, real-time protection.
          </motion.p>

          {/* WHY MARTERRA SECTION */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
            className="text-2xl md:text-4xl font-extrabold mb-3"
            style={{ fontFamily: "Poppins" }}
          >
            Why MarTerra?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="max-w-3xl text-white/70 mb-8"
          >
            Secure, intelligent, and unified — built for performance,
            scalability, and real-world outcomes.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: "High Performance, Lower Cost, Faster ROI",
                desc: "High performance, lower cost, and faster ROI.",
              },
              {
                title: "Predictive Security",
                desc: "Proactively detect risks and adapt in real time.",
              },
              {
                title: "Secure Critical Infrastructure",
                desc: "Modernize your perimeter and access control systems with cloud-based integration.",
              },
              {
                title: "Protect High-Value Assets",
                desc: "Safeguard operations through AI analytics, automation, and intelligence.",
              },
            ].map((itemData, i) => (
              <motion.div
                key={i}
                variants={item}
                className="rounded-2xl bg-white/10 border border-white/15 p-6 hover:bg-white/15 transition-colors"
              >
                <div
                  className="font-semibold text-white/90 mb-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  {itemData.title}
                </div>
                <p className="text-sm text-white/70 leading-snug">
                  {itemData.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* This block is now ONLY Security & Compliance + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
            className="mt-10 text-sm text-white/60 max-w-3xl"
          >
            <p className="mt-2">
              Security &amp; Compliance — Achieve modernization without
              disruption, while integrating legacy systems.
            </p>
            <a
              href="#about"
              className="inline-flex items-center text-[#2771E9] font-semibold mt-3 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                onNav("about");
              }}
            >
              Learn more about us →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
            className="mt-10 flex gap-4"
          >
            <a
              className="rounded-xl bg-[#2771E9] px-5 py-3 font-semibold hover:bg-[#3A88FF] transition-colors"
              href="#demo"
            >
              Get a Demo
            </a>
            <a
              className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white/85 hover:bg-white/10 transition-colors"
              href="#audit"
            >
              Free Security Audit
            </a>
          </motion.div>
        </div>
      </section>

      {/* MARINA PREVIEW */}
      <section id="marina" className="relative isolate overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/13483787_3840_2160_30fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[#0E1726]/60" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <h2
            className="text-3xl md:text-5xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Marina &amp; Port Security — Unified, Cloud-Managed
          </h2>
          <p className="mt-4 text-white/85">
            Detect, deter, and respond across docks, slips, and fuel docks on
            one platform.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              className="rounded-xl bg-[#2771E9] px-4 py-2 font-semibold"
              onClick={() => onNav("marina")}
            >
              View Industry Page
            </button>
          </div>
        </div>
      </section>

      {/* ACCESS PREVIEW */}
      <section id="access" className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-20 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3
              className="text-3xl md:text-5xl font-extrabold"
              style={{ fontFamily: "Poppins" }}
            >
              Access Management — Secure Every Door with Cloud Control
            </h3>
            <p className="mt-4 text-[#444]">
              Badge, mobile, and cloud-based access that scales from a single
              gate to global facilities.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                className="rounded-xl bg-[#0E1726] text-white px-5 py-3 font-semibold"
                href="#"
              >
                Request an Access Audit
              </a>
              <button
                className="rounded-xl border border-[#E6E9EF] px-5 py-3 font-semibold"
                onClick={() => onNav("access")}
              >
                View Product Page
              </button>
            </div>
          </div>
          <div className="rounded-2xl bg-[#F6F8FB] p-6">
            <img
              src="/assets/241017_Access_Control_Family_hard_shadow.png"
              alt="Access Control Hardware"
              className="mx-auto h-[420px] w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ===========================
   About Page
=========================== */
function AboutPage({ onNav }) {
  return (
    <>
      <Breadcrumbs
        onNav={onNav}
        items={[
          { label: "Home", key: "home" },
          { label: "About", key: null },
        ]}
      />

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0E1726] to-[#152238] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold"
              style={{ fontFamily: "Poppins" }}
            >
              About MarTerra
            </h1>
            <p className="mt-4 text-white/85">
              High performance, lower cost, faster ROI — we unify modern
              physical security so organizations can protect people, property,
              and critical infrastructure with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2
              className="text-2xl md:text-3xl font-extrabold"
              style={{ fontFamily: "Poppins" }}
            >
              Our Mission
            </h2>
            <p className="mt-3 text-[#444]">
              To deliver unified, intelligent security that’s simple to deploy,
              effortless to manage, and powerful in outcomes — from docks and
              gates to campuses and enterprises.
            </p>
            <ul className="mt-6 space-y-3 text-[#444] list-disc pl-5">
              <li>Modernize legacy systems without disruption</li>
              <li>Use AI and automation to predict, detect, and respond</li>
              <li>Lower total cost while accelerating time-to-value</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-[#F6F8FB] p-6">
            <img
              src="/assets/250228_Family_Portrait_Square0120_Levels-Edit.png"
              alt="Unified Ecosystem"
              className="mx-auto h-72 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-[#0E1726] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2
            className="text-2xl md:text-3xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Who We Serve
          </h2>
          <p className="mt-3 text-white/80 max-w-3xl">
            From marinas and ports to public venues, construction sites, schools
            and campuses — we tailor deployments to the realities of each site.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Marinas & Ports",
              "Public Venues",
              "Construction",
              "Schools & Campuses",
            ].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <div className="font-semibold text-white/90">{label}</div>
                <p className="mt-2 text-sm text-white/70">
                  Cameras, access, intercom, sensors, and alarms — unified in
                  the cloud.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2
            className="text-2xl md:text-3xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Why MarTerra
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "High Performance, Lower Cost, Faster ROI",
                d: "Deploy quickly, operate efficiently, and reduce TCO.",
              },
              {
                t: "Predictive Security",
                d: "Proactively detect risks and adapt in real time with AI analytics.",
              },
              {
                t: "Secure Critical Infrastructure",
                d: "Harden perimeters and access with cloud-first designs.",
              },
              {
                t: "Protect High-Value Assets",
                d: "Safeguard operations through automation and intelligence.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-[#E6E9EF] bg-white p-6"
              >
                <div className="font-semibold">{c.t}</div>
                <p className="mt-2 text-[#444] text-sm">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[#0E1726] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2
            className="text-2xl md:text-3xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Our Approach
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              {
                s: "1. Assess",
                d: "Site survey, risk analysis, and modernization plan.",
              },
              {
                s: "2. Deploy",
                d: "Rapid rollout with minimal downtime and clean handoff.",
              },
              {
                s: "3. Integrate",
                d: "Connect legacy systems and unify devices in the cloud.",
              },
              {
                s: "4. Optimize",
                d: "Training, tuning, and ongoing analytics-driven improvements.",
              },
            ].map((step) => (
              <div
                key={step.s}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <div className="font-semibold text-white/90">{step.s}</div>
                <p className="mt-2 text-sm text-white/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS & CERTIFICATIONS */}
      <section className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2
            className="text-2xl md:text-3xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Partners &amp; Certifications
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#E6E9EF] bg-white p-6 flex items-center justify-center">
              <img
                src="/assets/Verkada-Logo-Authorized Reseller_White (1).png"
                alt="Verkada Authorized Reseller"
                className="h-10 w-auto"
              />
            </div>
            <div className="rounded-2xl border border-[#E6E9EF] bg-white p-6">
              <div className="font-semibold">Compliance</div>
              <ul className="mt-2 text-sm text-[#444] list-disc pl-5">
                <li>Privacy-first architecture and role-based access</li>
                <li>SSO/SAML and audit logging</li>
                <li>Secure device onboarding and firmware management</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E6E9EF] bg-white p-6">
              <div className="font-semibold">Support</div>
              <p className="mt-2 text-sm text-[#444]">
                Design services, deployment assistance, and ongoing success
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0E1726] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm uppercase tracking-wide text-white/70">
              Ready to modernize?
            </div>
            <h3
              className="text-2xl md:text-3xl font-extrabold mt-2"
              style={{ fontFamily: "Poppins" }}
            >
              Get a tailored security plan
            </h3>
            <p className="mt-2 text-white/80">
              We’ll assess your sites and design a roadmap to unified
              protection.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              className="rounded-xl bg-[#2771E9] px-5 py-3 font-semibold"
              href="#demo"
            >
              Get a Demo
            </a>
            <a
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold"
              href="#audit"
            >
              Free Security Audit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===========================
   Placeholder Marina / Access pages
=========================== */
function MarinaIndustryPage({ onNav }) {
  return (
    <>
      <Breadcrumbs
        onNav={onNav}
        items={[
          { label: "Home", key: "home" },
          { label: "Industries", key: null },
          { label: "Marina & Port Security", key: null },
        ]}
      />
      <section className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1
            className="text-3xl md:text-5xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Marina &amp; Port Security
          </h1>
          <p className="mt-4 text-[#444]">
            Dedicated page content coming soon — use cases, layouts, and
            outcomes tailored to marinas and ports.
          </p>
        </div>
      </section>
    </>
  );
}

function AccessProductPage({ onNav }) {
  return (
    <>
      <Breadcrumbs
        onNav={onNav}
        items={[
          { label: "Home", key: "home" },
          { label: "Products", key: null },
          { label: "Access Management", key: null },
        ]}
      />
      <section className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1
            className="text-3xl md:text-5xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Access Management
          </h1>
          <p className="mt-4 text-[#444]">
            Dedicated product page coming soon — detailed specs, integrations,
            and deployment options for Access Management.
          </p>
        </div>
      </section>
    </>
  );
}

/* ===========================
   Footer
=========================== */
function Footer() {
  return (
    <footer className="bg-white text-[#0E1726]">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <img
            src="/assets/MarTerra-Logomark-Transparent.png"
            alt="MarTerra"
            className="h-8 w-auto"
          />
          <p className="text-sm text-[#444]">
            Unified, AI-powered physical security solutions. Local expertise,
            global reach.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Explore</div>
          <ul className="mt-3 space-y-2 text-[#444]">
            <li>Products</li>
            <li>Industries</li>
            <li>Services</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-[#444]">
            <li>info@marterra.example</li>
            <li>+1 (555) 555-5555</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#E6E9EF]">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <span className="text-xs text-[#888]">
            © {new Date().getFullYear()} MarTerra. All rights reserved.
          </span>
          <img
            src="/assets/MarTerra-Logomark-BlueCircle.png"
            alt="Mark"
            className="h-8 w-8"
          />
        </div>
      </div>
    </footer>
  );
}

/* ===========================
   App
=========================== */
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#0E1726] text-white">
      <Header onNav={setPage} />
      {page === "home" && <Home onNav={setPage} />}
      {page === "about" && <AboutPage onNav={setPage} />}
      {page === "marina" && <MarinaIndustryPage onNav={setPage} />}
      {page === "access" && <AccessProductPage onNav={setPage} />}
      <Footer />
    </div>
  );
}
