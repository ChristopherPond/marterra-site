import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

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

      {/* DIFFERENTIATORS (Why MarTerra) */}
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
                d:
                  "Proactively detect risks and adapt in real time with AI analytics.",
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

      {/* APPROACH / PROCESS */}
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
                d:
                  "Training, tuning, and ongoing analytics-driven improvements.",
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
            Partners & Certifications
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#E6E9EF] bg-white p-6 flex items-center justify-center">
              <img
                src="/assets/Verkada-Logo-Authorized%20Reseller_White%20(1).png"
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

export default AboutPage;
